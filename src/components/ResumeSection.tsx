import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Download } from "lucide-react";

export function ResumeSection() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  const getResumeFile = () => {
    return language === 'pt-BR' 
      ? {
          path: "/resume.pdf",
          filename: "Vitor C. Costa - Product Designer.pdf"
        }
      : {
          path: "/EN - Vitor C. Costa - Product Designer.pdf",
          filename: "EN - Vitor C. Costa - Product Designer.pdf"
        };
  };
  
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
  const resumeFile = getResumeFile();
  
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
            <motion.a
              href={resumeFile.path}
              download={resumeFile.filename}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors"
              whileHover={{ y: 5 }}
              transition={{ duration: 0.2 }}
            >
              {text.downloadButton}
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 