import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  href: string;
  index: number;
  viewText: string;
  navigate?: (path: string, saveScroll?: boolean) => void;
}

export function ProjectCard({
  title,
  description,
  image,
  categories,
  href,
  index,
  viewText,
  navigate
}: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigate) {
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
            src={image}
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
        
        <motion.a
          href={href}
          onClick={handleClick}
          className="inline-flex items-center text-black hover:opacity-70 transition-opacity font-medium"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {viewText} →
        </motion.a>
      </div>
    </motion.div>
  );
}
