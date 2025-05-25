
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'pt-BR' | 'en-US';

// Define the context shape
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// Create the context with safe default values
const defaultSetLanguage = () => {};
const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR', // Default to Brazilian Portuguese
  setLanguage: defaultSetLanguage,
});

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with default Portuguese
  const [language, setLanguage] = useState<Language>('pt-BR');
  
  // Load saved language preference on initial mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'pt-BR' || savedLanguage === 'en-US')) {
        setLanguage(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    } catch (error) {
      console.error("Error setting language:", error);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Safe hook that won't throw if used outside provider
export const useLanguage = () => {
  try {
    return useContext(LanguageContext);
  } catch (error) {
    console.error("Error using language context:", error);
    return {
      language: 'pt-BR' as Language,
      setLanguage: defaultSetLanguage
    };
  }
};
