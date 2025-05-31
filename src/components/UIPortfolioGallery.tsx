import React from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const UIPortfolioGallery: React.FC = () => {
  const { language } = useLanguage();


  const uiProjects = [
    {
      title: "GI Baldino Landing Page",
      descriptionPT: "Página desenvolvida para divulgar o podcast de Gi Baldino e apresentar suas métricas de redes sociais como um mídia kit profissional, voltado para marcas e parcerias.",
      descriptionEN: "Page developed to promote Gi Baldino's podcast and present his social media metrics as a professional media kit, aimed at brands and partnerships.",
      imageSrc: "/images/UI/gi-baldino-thumbnail.gif",
      altText: "GI Baldino Dashboard Interface",
      additionalImages: [
        {
          src: "/images/UI/gi-baldino-podcast.gif",
          alt: "Dashboard Styleframes 1"
        },
        {
          src: "/images/UI/gi-baldino-skills.gif",
          alt: "Dashboard Styleframes 2"
        },
        {
          src: "/images/UI/gi-baldino-social.gif",
          alt: "Dashboard Styleframes 3"
        }
      ]
    },
    {
      title: "Apepê Landing Page",
      descriptionPT: "Aplicativo com funcionalidades voltadas à rotina de condomínios, como reservas de espaços, mercado autônomo e comunicação com a administração.",
      descriptionEN: "App with features focused on the routine of condominiums, such as space reservations, autonomous market and communication with the administration.",
      imageSrc: "/images/UI/apepe-landing-page-hero.jpg",
      altText: "Apepê Landing Page Interface"
    }
  ];

  const content = {
    "pt-BR": {
      title: "Interfaces",
      subtitle: "Usabilidade, estética e propósito.",
      description: "Um recorte visual de soluções que desenhei para diferentes produtos digitais."
    },
    "en-US": {
      title: "Interfaces", 
      subtitle: "Usability, aesthetics and purpose.",
      description: "A visual selection of solutions I designed for different digital products."
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium text-center mb-8">{content[language].title}</h2>
          <p className="text-xl mb-6 text-center">{content[language].subtitle}</p>
          <p className="text-muted-foreground text-center mb-8">{content[language].description}</p>

          <div className="flex flex-col gap-16">
            {uiProjects.map((project, index) => (
              <ImageCard
                key={index}
                title={project.title}
                description={language === 'pt-BR' ? project.descriptionPT : project.descriptionEN}
                imageSrc={project.imageSrc}
                altText={project.altText}
                additionalImages={project.additionalImages}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UIPortfolioGallery; 