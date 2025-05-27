import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const content = {
    "pt-BR": {
      message: "Obrigado por scrollar :D",
      copyright: "© 2025 Vitor C. Costa. Todos os direitos reservados."
    },
    "en-US": {
      message: "Thanks for scrolling :D",
      copyright: "© 2025 Vitor C. Costa. All rights reserved."
    }
  };
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <footer className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </footer>
    );
  }
  
  const text = content[language];
  
  return (
    <footer className="py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground space-y-2"
        >
          <p>{text.message}</p>
          <p className="text-sm">{text.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
