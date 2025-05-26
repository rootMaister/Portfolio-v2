export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Hardcoded translations to avoid context issues
  const copyright = {
    "pt-BR": `© ${currentYear} Vitor C. Costa. Todos os direitos reservados.`,
    "en-US": `© ${currentYear} Vitor C. Costa. All rights reserved.`
  };
  
  const links = {
    "pt-BR": {
      work: "Trabalhos",
      about: "Sobre",
      contact: "Contato"
    },
    "en-US": {
      work: "Work",
      about: "About",
      contact: "Contact"
    }
  };
  
  // Detect language from HTML tag or default to Portuguese
  const htmlLang = 
    typeof document !== 'undefined' 
      ? document.documentElement.lang 
      : 'pt-BR';
      
  const language = (htmlLang === 'en-US') ? 'en-US' : 'pt-BR';
  
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            {copyright[language]}
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#work" className="text-sm hover:text-primary/80 transition-colors">
            {links[language].work}
          </a>
          <a href="#about" className="text-sm hover:text-primary/80 transition-colors">
            {links[language].about}
          </a>
          <a href="#contact" className="text-sm hover:text-primary/80 transition-colors">
            {links[language].contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
