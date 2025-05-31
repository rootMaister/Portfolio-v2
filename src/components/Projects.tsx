import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";

interface ProjectsProps {
  navigate?: (path: string, saveScroll?: boolean) => void;
}

export function Projects({ navigate }: ProjectsProps) {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Hardcoded translations
  const content = {
    "pt-BR": {
      title: "Projetos",
      subtitle: "Trabalhos selecionados",
      description: "Uma coleção curada de projetos que demonstram minha abordagem e processo de design.",
      viewProject: "Ver projeto"
    },
    "en-US": {
      title: "Projects",
      subtitle: "Selected works",
      description: "A curated collection of projects that demonstrate my design approach and process.",
      viewProject: "View project"
    }
  };
  
  // Use simplified content while loading
  if (isLoading) {
    return (
      <section id="work" className="min-h-screen flex items-start pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-gray-200 rounded-lg h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="work" className="min-h-screen flex items-start pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{text.title}</h2>
          <p className="text-xl mb-6">{text.subtitle}</p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {text.description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project[language].title}
              description={project[language].description}
              image={project.thumbnail}
              categories={project.tags}
              href={project.comingSoon ? undefined : `/project/${project.id}`}
              index={index}
              viewText={text.viewProject}
              comingSoon={project.comingSoon}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
