
import React from "react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState<'pt-BR' | 'en-US'>('pt-BR');
  
  // Initialize language from localStorage if available
  React.useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'pt-BR' || savedLanguage === 'en-US') {
        setLanguage(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);
  
  const toggleLanguage = () => {
    const newLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(newLanguage);
    
    try {
      localStorage.setItem('language', newLanguage);
      document.documentElement.lang = newLanguage;
      
      // Force refresh to apply language change
      window.location.reload();
    } catch (error) {
      console.error("Error setting language:", error);
    }
  };

  const buttonText = language === 'pt-BR' ? 'EN' : 'PT';

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-md hover:bg-accent transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'pt-BR' ? 'English' : 'Portuguese'}`}
    >
      {buttonText}
    </motion.button>
  );
}
