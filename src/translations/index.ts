
// Import all translations
import { portugueseTranslations } from './pt-BR';
import { englishTranslations } from './en-US';
import { Language } from '../contexts/LanguageContext';

// Default translations to use as fallback
const DEFAULT_TRANSLATIONS = portugueseTranslations;

// Export a function to get translations for a specific language
export const getTranslations = (language?: Language) => {
  if (!language) {
    return DEFAULT_TRANSLATIONS;
  }
  
  switch (language) {
    case 'pt-BR':
      return portugueseTranslations;
    case 'en-US':
      return englishTranslations;
    default:
      return DEFAULT_TRANSLATIONS; // Fallback to Portuguese
  }
};

// Export direct access to specific translations for components that need them
// before context is available
export const defaultTranslations = DEFAULT_TRANSLATIONS;
export const ptBRTranslations = portugueseTranslations;
export const enUSTranslations = englishTranslations;
