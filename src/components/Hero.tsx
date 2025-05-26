import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import avatarImage from "../assets/avatar.svg";

export function Hero() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Translations
  const content = {
    "pt-BR": {
      name: "Vitor C. Costa",
      subtitle: "Especialista em criar interfaces e experiências há 5 anos.",
      scrollDown: "Role para baixo"
    },
    "en-US": {
      name: "Vitor C. Costa",
      subtitle: "Specialist in creating interfaces and experiences for 5 years.",
      scrollDown: "Scroll down"
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
        className="text-lg md:text-xl text-muted-foreground text-center max-w-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {text.subtitle}
      </motion.p>
      
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="text-sm text-muted-foreground mb-2">{text.scrollDown}</span>
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground rounded-full p-2 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <motion.div 
            className="w-1 h-2 bg-muted-foreground rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
