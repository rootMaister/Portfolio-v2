import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getAssetPath } from "../utils/assetPath";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  href?: string;
  index: number;
  viewText?: string;
  comingSoon?: boolean;
  navigate?: (path: string, saveScroll?: boolean) => void;
}

export function ProjectCard({
  title,
  description,
  image,
  href,
  index,
  viewText,
  comingSoon = false,
  navigate
}: ProjectCardProps) {
  const { language } = useLanguage();
  
  const comingSoonText = {
    "pt-BR": "Mais detalhes em breve",
    "en-US": "More details coming soon"
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigate && href) {
      // Pass true to save the scroll position when navigating to a project
      navigate(href, true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-[#FDFDFD] rounded-3xl overflow-hidden border"
    >
      <div className="overflow-hidden rounded-b-3xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-[16/9]"
        >
          <ImageWithFallback
            src={getAssetPath(image)}
            alt={title}
            className="w-full h-full object-cover transition-transform"
          />
        </motion.div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        <div className="flex items-center">
          {comingSoon ? (
            <p className="text-muted-foreground italic">
              {comingSoonText[language]}
            </p>
          ) : (
            <motion.a
              href={href}
              onClick={handleClick}
              className="inline-flex items-center text-black hover:opacity-70 transition-opacity font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {viewText} →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
