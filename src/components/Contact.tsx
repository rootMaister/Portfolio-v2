
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  const [language, setLanguage] = useState<"pt-BR" | "en-US">("pt-BR");
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Set mounted state and detect language
  useEffect(() => {
    setIsMounted(true);
    
    // Check for language preference in localStorage or HTML lang attribute
    try {
      const htmlLang = document.documentElement.lang;
      const storedLanguage = localStorage.getItem("language");
      
      if (storedLanguage === "en-US" || htmlLang === "en-US") {
        setLanguage("en-US");
      } else {
        setLanguage("pt-BR");
      }
    } catch (error) {
      console.error("Error detecting language:", error);
    }
  }, []);
  
  // Hardcoded translations
  const content = {
    "pt-BR": {
      title: "Contato",
      subtitle: "Vamos conversar",
      description: "Interessado em trabalhar juntos? Preencha o formulário abaixo ou entre em contato através das minhas redes sociais.",
      nameLabel: "Nome",
      emailLabel: "Email",
      messagePlaceholder: "Sua mensagem...",
      submitButton: "Enviar mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com"
    },
    "en-US": {
      title: "Contact",
      subtitle: "Let's talk",
      description: "Interested in working together? Fill out the form below or get in touch through my social media.",
      nameLabel: "Name",
      emailLabel: "Email",
      messagePlaceholder: "Your message...",
      submitButton: "Send message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com"
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the form data to a server
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="contact" className="py-20 px-4 md:px-8 bg-accent">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{text.title}</h2>
          <p className="text-xl mb-6">{text.subtitle}</p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {text.description}
          </p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              {text.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder={text.namePlaceholder}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">
              {text.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder={text.emailPlaceholder}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
              placeholder={text.messagePlaceholder}
              required
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{text.submitButton}</span>
            <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
