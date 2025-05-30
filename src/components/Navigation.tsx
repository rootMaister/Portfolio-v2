import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import avatarImage from "../assets/avatar.svg";

type NavigationProps = {
  navigate?: (path: string) => void;
};

export function Navigation({ navigate }: NavigationProps) {
  const { language, setLanguage } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Set mounted state and track scrolling
  useEffect(() => {
    setIsMounted(true);
    
    // Add scroll event listener
    const handleScroll = () => {
      // Show name, border and menu items when scrolled more than 100px
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check in case page is already scrolled on mount
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Toggle language using context
  const toggleLanguage = () => {
    const newLanguage = language === "pt-BR" ? "en-US" : "pt-BR";
    setLanguage(newLanguage);
  };
  
  // Handle navigation
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      // Fallback if navigate function is not provided
      window.location.href = path;
    }
  };
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 20; // Offset to account for header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  
  // Translations
  const content = {
    "pt-BR": {
      home: "Início",
      work: "Projetos",
      about: "Sobre",
      resume: "Currículo",
      downloadResume: "Baixar Currículo",
      contact: "Contato",
      language: "EN"
    },
    "en-US": {
      home: "Home",
      work: "Projects",
      about: "About",
      resume: "Resume",
      downloadResume: "Download Resume",
      contact: "Contact",
      language: "PT"
    }
  };
  
  // Use default content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <header className="fixed top-8 left-8 right-8 z-50">
        <div className="bg-background/80 backdrop-blur-md rounded-lg transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center py-4 px-6">
            {/* 3-column layout for balanced centering */}
            <div className="w-40"></div>
            <div className="flex-1 flex justify-center"></div>
            <div className="w-40 flex justify-end">
              {/* Placeholder for language switcher */}
              <div className="w-[34px] h-[30px]"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  const text = content[language];
  
  return (
    <header className="fixed top-8 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`bg-white/70 backdrop-blur-md rounded-3xl transition-all duration-300 ${
            isScrolled ? "border border-gray-200" : ""
          }`}
        >
          <div className="flex items-center justify-between py-4 px-6">
            {/* Left side - Logo and Name */}
            <div className="flex items-center w-[200px]">
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Profile image */}
                    <motion.div
                      className="h-8 w-8 overflow-hidden flex-shrink-0"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <img 
                        src={avatarImage}
                        alt="Vitor C. Costa"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    {/* Name */}
                    <motion.a 
                      href="/"
                      className="text-xl font-medium whitespace-nowrap"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      onClick={(e) => handleNavigate(e, "/")}
                    >
                      Vitor C. Costa
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Center - Desktop Navigation */}
            <div className="hidden md:flex justify-center flex-1">
              <AnimatePresence>
                {isScrolled && (
                  <motion.nav 
                    className="flex items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="flex items-center gap-8">
                      <li>
                        <a 
                          href="#" 
                          className="hover:text-primary transition-colors" 
                          onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMenuOpen(false);
                          }}
                        >
                        {text.home}
                      </a>
                    </li>
                    <li>
                        <a 
                          href="#work" 
                          className="hover:text-primary transition-colors"
                          onClick={(e) => scrollToSection(e, 'work')}
                        >
                        {text.work}
                      </a>
                    </li>
                    <li>
                        <a 
                          href="#about" 
                          className="hover:text-primary transition-colors"
                          onClick={(e) => scrollToSection(e, 'about')}
                        >
                        {text.about}
                      </a>
                    </li>
                    <li>
                        <a 
                          href="#resume" 
                          className="hover:text-primary transition-colors"
                          onClick={(e) => scrollToSection(e, 'resume')}
                        >
                        {text.resume}
                      </a>
                    </li>
                    </ul>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {/* Right side - Language Toggle and Mobile Menu */}
            <div className="flex items-center gap-4 w-[200px] justify-end">
              {/* Language Toggle - Desktop Only */}
              <button
                onClick={toggleLanguage}
                className="hidden md:block px-2 py-1 text-sm hover:text-primary transition-colors"
              >
                {text.language}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed left-8 right-8 top-[88px] bg-background z-40 md:hidden rounded-3xl ${
            isScrolled ? "border border-border" : "border border-transparent"
          }`}
        >
          <nav className="p-6">
            <ul className="flex flex-col gap-6">
              <li>
                <a 
                  href="#" 
                  className="text-xl hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {text.home}
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="text-xl hover:text-primary transition-colors"
                  onClick={(e) => scrollToSection(e, 'work')}
                >
                  {text.work}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-xl hover:text-primary transition-colors"
                  onClick={(e) => scrollToSection(e, 'about')}
                >
                  {text.about}
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                  className="text-xl hover:text-primary transition-colors"
                  onClick={(e) => scrollToSection(e, 'resume')}
                >
                  {text.resume}
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="text-xl hover:text-primary transition-colors"
                >
                  {text.language}
                </button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
