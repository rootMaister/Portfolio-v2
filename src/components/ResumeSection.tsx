import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Download } from "lucide-react";

export function ResumeSection() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Translations
  const content = {
    "pt-BR": {
      title: "Currículo",
      subtitle: "Minha experiência profissional",
      description: "Faça o download do meu currículo completo para mais detalhes sobre minha formação acadêmica, experiência profissional e habilidades técnicas.",
      downloadButton: "Baixar Currículo"
    },
    "en-US": {
      title: "Resume",
      subtitle: "My professional experience",
      description: "Download my complete resume for more details about my academic background, professional experience, and technical skills.",
      downloadButton: "Download Resume"
    }
  };
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="resume" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="resume" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{text.title}</h2>
          <p className="text-xl mb-6">{text.subtitle}</p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {text.description}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="/resume.pdf"
              download="Vitor C. Costa - Product Designer.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download size={20} />
              {text.downloadButton}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 