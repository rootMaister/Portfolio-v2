import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import aboutMeImage from "../assets/about me.png";
import { useEffect } from "react";
import { useState } from "react";

export function About() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Hardcoded translations

  const AboutMePT = () => (
    <>
      <p>
        Olá! Me chamo <strong>Vitor</strong>, nascido em São Paulo, Brasil. Sou formado em <strong>Análise e
        Desenvolvimento de Sistemas</strong> e atuo há 5 anos como <strong>UX/UI Designer</strong>, criando
        experiências digitais para plataformas web e mobile.
      </p>
      <br />
      <p>
        Ao longo da minha trajetória, colaborei no desenvolvimento de <strong>plataformas jurídicas</strong>,
        <strong> dashboards analíticos</strong>, <strong>e-commerces</strong>, <strong>sistemas internos com
        gamificação</strong> e <strong>aplicativos condominiais</strong>. Acredito que um bom design nasce da
        combinação entre <strong>lógica, empatia e colaboração</strong> — princípios que levo para cada projeto em que atuo.
      </p>
      <br />
      <p>
        Tenho como foco a construção de <strong>soluções funcionais, visualmente claras e acessíveis</strong>,
        sempre colocando o usuário no centro de cada decisão.
      </p>
    </>
  );
  
  const AboutMeEN = () => (
    <>
      <p>
        Hi! I'm <strong>Vitor</strong>, born in São Paulo, Brazil. I have a degree in <strong>Systems Analysis
        and Development</strong> and 5 years of experience working as a <strong>UX/UI Designer</strong>,
        creating digital experiences for web and mobile platforms.
      </p>
      <br />
      <p>
        Throughout my career, I've contributed to the development of <strong>legal platforms</strong>,
        <strong> analytical dashboards</strong>, <strong>e-commerce interfaces</strong>, <strong>gamified internal systems</strong>, and
        <strong> condominium apps</strong>. I believe great design is the result of a strong balance between
        <strong> logic, empathy, </strong> and <strong> collaboration</strong> — values I carry into every project.
      </p>
      <br />
      <p>
        I focus on building <strong>functional, visually clear, and accessible solutions</strong>, always keeping
        the user at the center of the process.
      </p>
    </>
  );
  
  const content = {
    "pt-BR": {
      title: "Sobre mim",
      subtitle: "Designer de produto com 5+ anos de experiência",
      bio: AboutMePT,
      skills: "Habilidades",
      skillsList: [
        {
          category: "Research e Discovery",
          items: ["Análise de Competidores", "Entrevistas", "Pesquisa", "Teste de Usabilidade"]
        },
        {
          category: "Design",
          items: ["Wireframing", "Prototipagem", "Comunicação Visual", "UI Design", "Design System", "UX/UI Design"]
        }
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
      bio: AboutMeEN,
      skills: "Skills",
      skillsList: [
        {
          category: "Research & Discovery",
          items: ["Competitor Analysis", "Interviews", "Surveys", "Usability Testing"]
        },
        {
          category: "Design",
          items: ["Wireframing", "Prototyping", "Visual Communication", "UI Design", "Design System", "UX/UI Design"]
        }
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
              {typeof text.bio === 'function' ? text.bio() : text.bio}
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">{text.skills}</h3>
              <div className="space-y-6">
                {text.skillsList.map((skillGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <h4 className="text-base font-medium mb-3 text-muted-foreground">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
