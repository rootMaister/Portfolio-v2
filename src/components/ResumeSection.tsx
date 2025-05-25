import React, { useState, useEffect } from "react";
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
      downloadButton: "Baixar Currículo",
      skills: {
        title: "Habilidades",
        categories: [
          {
            name: "Design",
            skills: ["UX/UI Design", "Design de Produto", "Prototipagem", "Design System", "Wireframing"]
          },
          {
            name: "Ferramentas",
            skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
          },
          {
            name: "Soft Skills",
            skills: ["Comunicação", "Trabalho em equipe", "Gestão de projetos", "Liderança", "Pensamento crítico"]
          }
        ]
      },
      education: {
        title: "Formação",
        institutions: [
          {
            name: "Universidade de São Paulo",
            degree: "Bacharelado em Design Digital",
            period: "2014 - 2018"
          },
          {
            name: "Escola de Design Thinking",
            degree: "Certificação em UX Design",
            period: "2019"
          }
        ]
      }
    },
    "en-US": {
      title: "Resume",
      subtitle: "My professional experience",
      description: "Download my complete resume for more details about my academic background, professional experience, and technical skills.",
      downloadButton: "Download Resume",
      skills: {
        title: "Skills",
        categories: [
          {
            name: "Design",
            skills: ["UX/UI Design", "Product Design", "Prototyping", "Design Systems", "Wireframing"]
          },
          {
            name: "Tools",
            skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
          },
          {
            name: "Soft Skills",
            skills: ["Communication", "Teamwork", "Project Management", "Leadership", "Critical Thinking"]
          }
        ]
      },
      education: {
        title: "Education",
        institutions: [
          {
            name: "University of São Paulo",
            degree: "Bachelor's in Digital Design",
            period: "2014 - 2018"
          },
          {
            name: "School of Design Thinking",
            degree: "UX Design Certification",
            period: "2019"
          }
        ]
      }
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
          className="text-center mb-16"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-6">{text.skills.title}</h3>
            
            <div className="space-y-8">
              {text.skills.categories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg mb-4">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-6">{text.education.title}</h3>
            
            <div className="space-y-6">
              {text.education.institutions.map((institution, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-medium">{institution.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors">
                      {institution.degree}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors">
                      {institution.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 