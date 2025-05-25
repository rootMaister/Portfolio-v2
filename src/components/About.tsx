import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutMeImage from "../assets/about me.png";

export function About() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Hardcoded translations
  const content = {
    "pt-BR": {
      title: "Sobre mim",
      subtitle: "Designer de produto com 5+ anos de experiência",
      bio: "Olá, sou Vitor C. Costa, um designer de produto baseado em São Paulo. Comecei minha jornada no design em 2018 e desde então tenho trabalhado com startups e empresas estabelecidas para criar produtos digitais centrados no usuário. Minha abordagem combina pesquisa de usuário, estratégia de produto e design de interface para criar experiências que resolvem problemas reais.",
      skills: "Habilidades",
      skillsList: [
        "Design de Produto",
        "UX/UI Design",
        "Design System",
        "Prototipagem",
        "Pesquisa de Usuário",
        "Design Sprint"
      ],
      experience: "Experiência",
      experienceList: [
        {
          company: "Studio Design Co.",
          role: "Designer de Produto Sênior",
          period: "2022 - Presente"
        },
        {
          company: "Tech Innovations",
          role: "Designer UX/UI",
          period: "2020 - 2022"
        },
        {
          company: "Creative Agency",
          role: "Designer Visual",
          period: "2018 - 2020"
        }
      ]
    },
    "en-US": {
      title: "About me",
      subtitle: "Product designer with 5+ years of experience",
      bio: "Hello, I'm Vitor C. Costa, a product designer based in São Paulo. I started my design journey in 2018 and since then I've been working with startups and established companies to create user-centered digital products. My approach combines user research, product strategy, and interface design to create experiences that solve real problems.",
      skills: "Skills",
      skillsList: [
        "Product Design",
        "UX/UI Design",
        "Design Systems",
        "Prototyping",
        "User Research",
        "Design Sprint"
      ],
      experience: "Experience",
      experienceList: [
        {
          company: "Studio Design Co.",
          role: "Senior Product Designer",
          period: "2022 - Present"
        },
        {
          company: "Tech Innovations",
          role: "UX/UI Designer",
          period: "2020 - 2022"
        },
        {
          company: "Creative Agency",
          role: "Visual Designer",
          period: "2018 - 2020"
        }
      ]
    }
  };
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{text.title}</h2>
          <p className="text-xl">{text.subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={aboutMeImage}
                alt="Vitor C. Costa - About"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground mb-8">
              {text.bio}
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">{text.skills}</h3>
              <div className="flex flex-wrap gap-2">
                {text.skillsList.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{text.experience}</h3>
              <div className="space-y-4">
                {text.experienceList.map((exp, index) => (
                  <div key={index} className="border-l-2 border-border pl-4">
                    <h4 className="font-medium">{exp.company}</h4>
                    <p className="text-muted-foreground">{exp.role}</p>
                    <p className="text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
