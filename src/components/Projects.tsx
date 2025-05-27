import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { useEffect } from "react";

interface ProjectsProps {
  navigate?: (path: string, saveScroll?: boolean) => void;
}

export function Projects({ navigate }: ProjectsProps) {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Hardcoded translations
  const content = {
    "pt-BR": {
      title: "Projetos",
      subtitle: "Trabalhos selecionados",
      description: "Uma coleção curada de projetos que demonstram minha abordagem e processo de design.",
      viewProject: "Ver projeto"
    },
    "en-US": {
      title: "Projects",
      subtitle: "Selected works",
      description: "A curated collection of projects that demonstrate my design approach and process.",
      viewProject: "View project"
    }
  };
  
  // Project data with translations
  const projects = [
    {
      id: "apepe-registration",
      title: {
        "pt-BR": "Processo de Cadastro & Vínculo Condomínial - apepê",
        "en-US": "Registration Process & Building Connection - apepê"
      },
      description: {
        "pt-BR": "Mapeamento e redesign do processo de cadastro do app e experiência de vínculo condomínial do usuário.",
        "en-US": "Mapping and redesign of the app's registration process and user's building connection experience."
      },
      fullDescription: {
        "pt-BR": "O apepê é um aplicativo voltado a experiência do morador dentro do seu condomínio. O app reúne diversas funcionalidades e serviços que facilitam a realização de tarefas - como a reserva de espaços comuns e mercadinho autônomo - através do aplicativo.",
        "en-US": "Apepê is an app focused on the resident's experience within their condominium. The app brings together various features and services that facilitate tasks - such as common space reservations and autonomous market - through the application."
      },
      process: {
        "pt-BR": "O aplicativo havia passado por mudanças nas regras de negócio, onde anteriormente limitava o acesso de usuários apenas para aqueles que o condomínio já tivesse adquirido o apepê para a administração de funcionalidades e oferta de serviços externos (ex: reservas de espaços e lavanderia).\n\nAs novas regras, possibilitaram 3 novos cenários:\n\n1. Novos usuários agora poderiam se cadastrar e utilizar serviços que não necessitavam de um condomínio vinculado ao app.\n\n2. Para uma maior segurança, para o morador ter acesso as funcionalidades do condomínio, o mesmo teria que solicitar vínculo do seu perfil ao condomínio. Dando a possibilidade para o condomínio verificar as informações do usuário que se diz morador do condomínio.\n\n3. Usuários poderiam ter mais de um vínculo condominial, dando a possibilidade para usuários se vincularem a múltiplos condomínios.\n\nO processo de cadastro deveria ser acessível o suficiente para que mesmo pessoas com pouco contato com tecnologia e pessoas de idade avançada pudessem realizar com sucesso.",
        "en-US": "The application had undergone changes in business rules, where previously it limited user access only to those whose condominium had already acquired apepê for feature management and external service offerings (e.g., space reservations and laundry).\n\nThe new rules enabled 3 new scenarios:\n\n1. New users could now register and use services that did not require a condominium linked to the app.\n\n2. For greater security, for residents to access condominium features, they would have to request their profile to be linked to the condominium. Giving the condominium the ability to verify the information of users claiming to be residents.\n\n3. Users could have multiple condominium links, giving users the possibility to link to multiple condominiums.\n\nThe registration process needed to be accessible enough that even people with little contact with technology and elderly people could complete it successfully."
      },
      solution: {
        "pt-BR": "Espalhar QRCode's únicos em cada condomínio no momento da implantação que já levassem o usuário para o download e cadastro no condomínio especificado.",
        "en-US": "Distribute unique QR codes in each condominium during implementation that would already take the user to download and register in the specified condominium."
      },
      outcome: {
        "pt-BR": "Para que o usuário (morador) tivesse acesso ás funcionalidades do aplicativo, o vínculo desse usuário como morador deveria ser comprovado no momento do cadastro sem que as informações do condomínio (áreas comuns, etc) fossem expostas na interface para qualquer pessoa que baixasse o app.",
        "en-US": "For the user (resident) to have access to the application's features, their link as a resident had to be verified during registration without exposing condominium information (common areas, etc.) in the interface to anyone who downloaded the app."
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      categories: ["UX/UI Design", "Product Design", "User Flow"],
      customCard: false
    },
    {
      id: "1",
      title: {
        "pt-BR": "App Financeiro",
        "en-US": "Finance App"
      },
      description: {
        "pt-BR": "Redesign completo de uma aplicação financeira para melhorar a experiência do usuário.",
        "en-US": "Complete redesign of a financial application to improve user experience."
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      categories: ["UX/UI Design", "Mobile"],
      customCard: false
    },
    {
      id: "2",
      title: {
        "pt-BR": "Plataforma Educacional",
        "en-US": "Educational Platform"
      },
      description: {
        "pt-BR": "Design de uma plataforma educacional focada em facilitar o aprendizado remoto.",
        "en-US": "Design of an educational platform focused on facilitating remote learning."
      },
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
      categories: ["Product Design", "Web"],
      customCard: false
    },
    {
      id: "3",
      title: {
        "pt-BR": "E-commerce de Moda",
        "en-US": "Fashion E-commerce"
      },
      description: {
        "pt-BR": "Criação de uma experiência de compra intuitiva para uma marca de moda.",
        "en-US": "Creation of an intuitive shopping experience for a fashion brand."
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      categories: ["UX Design", "E-commerce"],
      customCard: false
    }
  ];
  
  // Use simplified content before mount to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="work" className="min-h-screen flex items-center py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    );
  }
  
  const text = content[language];
  
  return (
    <section id="work" className="min-h-screen flex items-center py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title[language]}
              description={project.description[language]}
              image={project.image}
              categories={project.categories}
              href={`/project/${project.id}`}
              index={index}
              viewText={text.viewProject}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
