import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import aboutMeImage from "../assets/about me.png";
import { useEffect, useState } from "react";

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
        Nascido em São Paulo. Sou formado em <strong>Análise e
        Desenvolvimento de Sistemas</strong> e atuo há 5 anos como <strong>UX/UI Designer</strong>, criando
        experiências digitais e físicas para plataformas web e mobile.
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
        Born in São Paulo. Rugby player in my free time. I have a degree in <strong>Systems Analysis
        and Development</strong> and 5 years of experience working as a <strong>UX/UI Designer</strong>,
        creating digital and physical experiences for web and mobile platforms.
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
      subtitle: "Olá, sou o Vitor Costa. Ou só Vitor. Ou apenas Costa. O importante é que você me conhece agora.",
      bio: AboutMePT,
      skills: "Habilidades",
      skillsList: [
        {
          category: "Research e Discovery",
          items: ["Análise de Competidores", "Entrevistas", "Surveys", "User Testing", "Pesquisa de Campo", "Mapeamento de jornada", "Definição de KPIs"]
        },
        {
          category: "Design",
          items: ["Wireframing", "Prototipagem", "Comunicação Visual", "UI Design", "Design System", "UX/UI Design"]
        },
        {
          category: "Outros",
          items: ["Front-end", "Prototipagem de Hardware", "Design Thinking"]
        }
      ],
      experience: "Experiência",
      experienceList: [
        {
          company: "apepê",
          role: "Product Designer",
          period: "2021 - Presente"
        },
        {
          company: "Spaceneedle Tecnologia",
          role: "UX/UI Designer",
          period: "2020 - 2021"
        },
      ],
      education: "Formação",
      educationList: [
        {
          institution: "UNIP",
          degree: "Análise e Desenvolvimento de Sistemas",
          period: "2021 - 2023"
        },
        {
          institution: "SENAI - Code Exp.",
          degree: "Full Stack Developer",
          period: "2019"
        }
      ]
    },
    "en-US": {
      title: "About me",
      subtitle: "Hi, I'm Vitor Costa. Or just Vitor. Or just Costa. The important thing is that you know me now.",
      bio: AboutMeEN,
      skills: "Skills",
      skillsList: [
        {
          category: "Research & Discovery",
          items: ["Competitor Analysis", "Interviews", "Surveys", "User Testing", "Field Research", "Journey Mapping", "KPI Definition"]
        },
        {
          category: "Design",
          items: ["Wireframing", "Prototyping", "Visual Communication", "UI Design", "Design System", "UX/UI Design"]
        },
        {
          category: "Others",
          items: ["Front-end", "Hardware Prototyping", "Design Thinking"]
        }
      ],
      experience: "Experience",
      experienceList: [
        {
          company: "apepê",
          role: "Product Designer",
          period: "2021 - Present"
        },
        {
          company: "Spaceneedle Tecnologia",
          role: "UX/UI Designer",
          period: "2020 - 2021"
        }
      ],
      education: "Education",
      educationList: [
        {
          institution: "UNIP",
          degree: "Systems Analysis and Development",
          period: "2021 - 2023"
        },
        {
          institution: "SENAI",
          degree: "Full Stack Developer",
          period: "2019"
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
    <section id="about" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{text.title}</h2>
          <h3 className="text-lg font-medium mb-4">{text.subtitle}</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full md:w-[500px]"
            >
              <div className="w-full md:w-[500px] aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={aboutMeImage}
                  alt="Vitor C. Costa - About"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-muted-foreground mb-16">
              {typeof text.bio === 'function' ? text.bio() : text.bio}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16 md:mb-0"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-lg font-medium mb-4">{text.education}</h3>
                <div className="space-y-4">
                  {text.educationList.map((edu, index) => (
                    <div key={index} className="border-l-2 border-border pl-4">
                      <h4 className="font-medium">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          
          <h2 className="text-lg font-medium mb-8 text-left">{text.skills}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l-2 border-border pl-4">
            {text.skillsList.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="bg-secondary/10 p-6">
                <h4 className="text-base font-medium mb-4 text-muted-foreground">{skillGroup.category}</h4>
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
        </motion.div>
      </div>
    </section>
  );
}
