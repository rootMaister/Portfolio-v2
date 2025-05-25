
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectsProps {
  navigate?: (path: string, saveScroll?: boolean) => void;
}

export function Projects({ navigate }: ProjectsProps) {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
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
  
  // Project data with translations
  const projects = [
    {
      id: "1",
      title: {
        "pt-BR": "App Financeiro",
        "en-US": "Finance App"
      },
      description: {
        "pt-BR": "Redesign completo de uma aplicação financeira para melhorar a experiência do usuário.",
        "en-US": "Complete redesign of a financial application to improve user experience."
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      categories: ["UX/UI Design", "Mobile"],
      customCard: false
    },
    {
      id: "2",
      title: {
        "pt-BR": "Plataforma Educacional",
        "en-US": "Educational Platform"
      },
      description: {
        "pt-BR": "Design de uma plataforma educacional focada em facilitar o aprendizado remoto.",
        "en-US": "Design of an educational platform focused on facilitating remote learning."
      },
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
      categories: ["Product Design", "Web"],
      customCard: false
    },
    {
      id: "3",
      title: {
        "pt-BR": "E-commerce de Moda",
        "en-US": "Fashion E-commerce"
      },
      description: {
        "pt-BR": "Criação de uma experiência de compra intuitiva para uma marca de moda.",
        "en-US": "Creation of an intuitive shopping experience for a fashion brand."
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      categories: ["UX Design", "E-commerce"],
      customCard: false
    }
  ];
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="work" className="min-h-screen flex items-center py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="work" className="min-h-screen flex items-center py-20 px-4 md:px-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title[language]}
              description={project.description[language]}
              image={project.image}
              categories={project.categories}
              href={`/project/${project.id}`}
              index={index}
              viewText={text.viewProject}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
