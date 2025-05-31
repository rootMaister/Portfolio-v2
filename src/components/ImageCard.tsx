import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  additionalImages?: { src: string; alt: string; }[];
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  altText,
  additionalImages = []
}) => {
  return (
    <motion.div
      className="w-full bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      
      {/* Main Image */}
      <div className="w-full">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-contain rounded-3xl border border-gray-200"
        />
      </div>

      {/* Additional Images Row */}
      {additionalImages.length > 0 && (
        <div className="grid grid-cols-3 gap-4 pt-6">
          {additionalImages.map((img, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-2xl bg-white/5">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Text Content */}
      <div className="p-6 rounded-3xl">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="border-b border-gray-200" />

    </motion.div>
  );
};

export default ImageCard; 