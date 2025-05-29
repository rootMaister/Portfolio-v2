import React, { useEffect, useState } from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { projects } from '../data/projects';
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Project, ProjectContent } from '../types/Project';
import { loadMarkdownContent, watchMarkdownFile } from '../utils/projectLoader';

interface ProjectDetailProps {
  projectId?: string;
  navigateBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, navigateBack }) => {
  const { language, setLanguage } = useLanguage();
  const project = projects.find(p => p.id === projectId);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  
  const getLangContent = (project: Project) => project[language === 'pt-BR' ? 'pt-BR' : 'en-US'] as ProjectContent;

  const toggleLanguage = () => {
    const newLanguage = language === "pt-BR" ? "en-US" : "pt-BR";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!project) return;
      
      try {
        setIsLoading(true);
        // Map language to correct path format
        const langPath = language === 'pt-BR' ? 'pt' : 'en';
        const markdownPath = project.markdownPath[langPath];
        
        console.log('Project:', project);
        console.log('Language path:', langPath);
        console.log('Markdown path:', markdownPath);
        
        // Initial load
        const initialContent = await loadMarkdownContent(markdownPath);
        console.log('Content loaded:', initialContent.substring(0, 100));
        
        if (!initialContent) {
          console.error('No content loaded for path:', markdownPath);
          setIsLoading(false);
          return;
        }
        
        setContent(initialContent);
        setIsLoading(false);

        // Set up watcher
        const cleanup = await watchMarkdownFile(markdownPath, (updatedContent) => {
          if (updatedContent) {
            setContent(updatedContent);
          }
        });

        return cleanup;
      } catch (error) {
        console.error('Error loading project content:', error);
        setIsLoading(false);
      }
    };

    loadContent();
  }, [project, language]);

  if (!project) {
    return <div>Project not found</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-[#fdfdfd]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={navigateBack}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
              {language === "pt-BR" ? "Voltar para projetos" : "Back to projects"}
            </motion.button>

            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-black text-white hover:bg-black/80 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {language === "pt-BR" ? "EN" : "PT"}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="px-4 py-12 md:py-16 mt-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project metadata */}
          <h1 className="text-6xl md:text-6xl font-medium mb-6">{getLangContent(project).title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{getLangContent(project).description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Markdown content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-h1:text-4xl prose-h1:font-medium prose-h1:mb-6 prose-h2:text-3xl prose-h2:font-medium prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-medium prose-h3:mb-3 prose-h4:text-xl prose-h4:font-medium prose-h4:mb-2 prose-h5:text-lg prose-h5:font-medium prose-h5:mb-1 prose-h6:text-base prose-h6:font-medium prose-h6:mb-0 prose-table:thead:th:text-black prose-h4:text-gray-400 prose-h4:uppercase prose-h4:tracking-widest prose-h4:text-sm">
            {content ? (
              <MarkdownRenderer content={content} />
            ) : (
              <div>No content available</div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
