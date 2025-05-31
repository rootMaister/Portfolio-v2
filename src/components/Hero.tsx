import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import avatarImage from "../assets/avatar.svg";

export function Hero() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('work');
    if (projectsSection) {
      const offset = 20; // Match navigation offset
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Translations
  const content = {
    "pt-BR": {
      name: "Vitor C. Costa",
      subtitle: "Desenhando experiências e interfaces há 5 anos.",
      scrollDown: "Veja meus projetos"
    },
    "en-US": {
      name: "Vitor C. Costa",
      subtitle: "Designing experiences and interfaces for 5 years.",
      scrollDown: "View my projects"
    }
  };
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-background">
        <div className="absolute inset-0"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-background px-4">
      <motion.div
        className="mb-8 w-48 h-48 md:w-64 md:h-64 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img 
          src={avatarImage}
          alt="Vitor C. Costa"
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {text.name}
      </motion.h1>
      
      <motion.p
        className="text-lg md:text-xl text-muted-foreground text-center max-w-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {text.subtitle}
      </motion.p>
      
      <motion.button
        onClick={scrollToProjects}
        className="md:absolute md:bottom-8 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ y: 5 }}
      >
        <span>{text.scrollDown}</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
