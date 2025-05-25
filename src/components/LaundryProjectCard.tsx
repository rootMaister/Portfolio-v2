import React from "react";
import { motion } from "framer-motion";

interface LaundryProjectCardProps {
  title: string;
  description: string;
  categories: string[];
  href: string;
  index: number;
  viewText: string;
  navigate?: (path: string) => void;
}

export function LaundryProjectCard({
  title,
  description,
  categories,
  href,
  index,
  viewText,
  navigate
}: LaundryProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigate) {
      navigate(href);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="overflow-hidden rounded-lg mb-4 h-48">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          <div className="relative size-full rounded-bl-[4px] rounded-tl-[4px] bg-gray-100" />
        </motion.div>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        <motion.a
          href={href}
          onClick={handleClick}
          className="inline-flex items-center text-primary hover:underline"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {viewText} →
        </motion.a>
      </div>
    </motion.div>
  );
}
