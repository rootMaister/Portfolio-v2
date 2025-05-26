import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import userFlowImage from '../assets/userflow_condominium-conection.png';

interface ProjectDetailProps {
  projectId: string | undefined;
  navigate: (path: string, saveScroll?: boolean) => void;
  navigateBack: () => void;
}

interface Project {
  title: {
    "pt-BR": string;
    "en-US": string;
  };
  description: {
    "pt-BR": string;
    "en-US": string;
  };
  fullDescription: {
    "pt-BR": string;
    "en-US": string;
  };
  process: {
    "pt-BR": string;
    "en-US": string;
  };
  solution: {
    "pt-BR": string;
    "en-US": string;
  };
  problem: {
    "pt-BR": string;
    "en-US": string;
  };
  image: string;
  customImage: boolean;
  categories: string[];
}

export function ProjectDetail({ projectId, navigate, navigateBack }: ProjectDetailProps) {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(1);
  const [showHeaderTimeline, setShowHeaderTimeline] = useState(false);
  
  const scrollToSection = (sectionIndex: number) => {
    const section = document.querySelector(`[data-timeline-section="${sectionIndex}"]`);
    if (section) {
      const headerHeight = showHeaderTimeline ? 180 : 60;
      const top = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-timeline-section]');
      const mainTimeline = document.getElementById('main-timeline');
      const mainTimelineRect = mainTimeline?.getBoundingClientRect();
      
      if (mainTimelineRect) {
        setShowHeaderTimeline(mainTimelineRect.top < 0 || mainTimelineRect.bottom < 0);
      }

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 250) {
          setActiveSection(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showHeaderTimeline]);

  // All project data with translations
  const projects: Record<string, Project> = {
    "apepe-registration": {
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
      problem: {
        "pt-BR": "Para que o usuário (morador) tivesse acesso ás funcionalidades do aplicativo, o vínculo desse usuário como morador deveria ser comprovado no momento do cadastro sem que as informações do condomínio (áreas comuns, etc) fossem expostas na interface para qualquer pessoa que baixasse o app.",
        "en-US": "For the user (resident) to have access to the application's features, their link as a resident had to be verified during registration without exposing condominium information (common areas, etc.) in the interface to anyone who downloaded the app."
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      customImage: false,
      categories: ["UX/UI Design", "Product Design", "User Flow"]
    },
    "laundry": {
      title: {
        "pt-BR": "App de Lavanderia",
        "en-US": "Laundry App"
      },
      description: {
        "pt-BR": "Redesign de um aplicativo de lavanderia para melhorar a experiência do usuário.",
        "en-US": "Redesign of a laundry app to improve user experience."
      },
      fullDescription: {
        "pt-BR": "Este projeto envolveu o redesign completo de um aplicativo de lavanderia para tornar o processo de pedido mais intuitivo e eficiente.",
        "en-US": "This project involved the complete redesign of a laundry app to make the ordering process more intuitive and efficient."
      },
      process: {
        "pt-BR": "Realizei pesquisas com usuários, análise de concorrentes e prototipagem iterativa para identificar e resolver pontos de atrito.",
        "en-US": "I conducted user research, competitor analysis, and iterative prototyping to identify and resolve pain points."
      },
      solution: {
        "pt-BR": "O novo design simplifica o processo de pedido, adiciona rastreamento em tempo real e oferece um sistema de recompensas.",
        "en-US": "The new design simplifies the ordering process, adds real-time tracking, and offers a rewards system."
      },
      problem: {
        "pt-BR": "O redesign resultou em um aumento de 45% na satisfação do usuário e 30% no número de pedidos recorrentes.",
        "en-US": "The redesign resulted in a 45% increase in user satisfaction and 30% increase in recurring orders."
      },
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&auto=format&fit=crop&q=80",
      customImage: false,
      categories: ["UX/UI Design", "Mobile"]
    },
    "1": {
      title: {
        "pt-BR": "App Financeiro",
        "en-US": "Finance App"
      },
      description: {
        "pt-BR": "Redesign completo de uma aplicação financeira para melhorar a experiência do usuário.",
        "en-US": "Complete redesign of a financial application to improve user experience."
      },
      fullDescription: {
        "pt-BR": "Este projeto envolveu o redesign completo de uma aplicação financeira para torná-la mais intuitiva e fácil de usar.",
        "en-US": "This project involved the complete redesign of a financial application to make it more intuitive and user-friendly."
      },
      process: {
        "pt-BR": "Realizei pesquisas com usuários, análise de concorrentes e prototipagem iterativa para identificar e resolver pontos de atrito.",
        "en-US": "I conducted user research, competitor analysis, and iterative prototyping to identify and resolve pain points."
      },
      solution: {
        "pt-BR": "O novo design simplifica a gestão financeira, oferece insights personalizados e facilita o controle de gastos.",
        "en-US": "The new design simplifies financial management, offers personalized insights, and makes expense tracking easier."
      },
      problem: {
        "pt-BR": "O redesign resultou em um aumento de 35% na retenção de usuários e 25% no engajamento diário.",
        "en-US": "The redesign resulted in a 35% increase in user retention and 25% increase in daily engagement."
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      customImage: false,
      categories: ["UX/UI Design", "Mobile"]
    },
    "2": {
      title: {
        "pt-BR": "Plataforma Educacional",
        "en-US": "Educational Platform"
      },
      description: {
        "pt-BR": "Design de uma plataforma educacional focada em facilitar o aprendizado remoto.",
        "en-US": "Design of an educational platform focused on facilitating remote learning."
      },
      fullDescription: {
        "pt-BR": "Este projeto envolveu o design de uma plataforma educacional para facilitar o aprendizado remoto. O objetivo era criar uma experiência envolvente e eficaz para estudantes de todas as idades.",
        "en-US": "This project involved designing an educational platform to facilitate remote learning. The goal was to create an engaging and effective experience for students of all ages."
      },
      process: {
        "pt-BR": "Comecei com uma extensa pesquisa sobre as necessidades de professores e alunos em ambientes de aprendizado remoto, seguida por prototipagem e testes iterativos.",
        "en-US": "I started with extensive research on the needs of teachers and students in remote learning environments, followed by prototyping and iterative testing."
      },
      solution: {
        "pt-BR": "A plataforma final inclui ferramentas de colaboração em tempo real, conteúdo personalizado baseado no progresso do aluno e um sistema de feedback integrado.",
        "en-US": "The final platform includes real-time collaboration tools, personalized content based on student progress, and an integrated feedback system."
      },
      problem: {
        "pt-BR": "A plataforma foi adotada por mais de 200 escolas no primeiro ano, com 92% dos professores relatando melhoria no engajamento dos alunos.",
        "en-US": "The platform was adopted by over 200 schools in the first year, with 92% of teachers reporting improved student engagement."
      },
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
      customImage: false,
      categories: ["Product Design", "Web"]
    },
    "3": {
      title: {
        "pt-BR": "E-commerce de Moda",
        "en-US": "Fashion E-commerce"
      },
      description: {
        "pt-BR": "Criação de uma experiência de compra intuitiva para uma marca de moda.",
        "en-US": "Creation of an intuitive shopping experience for a fashion brand."
      },
      fullDescription: {
        "pt-BR": "Este projeto envolveu o redesign completo de uma plataforma de e-commerce de moda. O objetivo era criar uma experiência de compra mais imersiva e personalizada.",
        "en-US": "This project involved the complete redesign of a fashion e-commerce platform. The goal was to create a more immersive and personalized shopping experience."
      },
      process: {
        "pt-BR": "Realizei uma análise detalhada do comportamento do usuário, mapeei a jornada de compra e identifiquei pontos de atrito que afetavam as conversões.",
        "en-US": "I conducted a detailed analysis of user behavior, mapped the purchase journey, and identified friction points that affected conversions."
      },
      solution: {
        "pt-BR": "O redesign incluiu uma navegação simplificada, recomendações personalizadas baseadas em inteligência artificial e uma experiência de checkout otimizada.",
        "en-US": "The redesign included simplified navigation, AI-powered personalized recommendations, and an optimized checkout experience."
      },
      problem: {
        "pt-BR": "O novo design resultou em um aumento de 27% nas conversões, 18% no valor médio de pedido e uma redução de 32% na taxa de abandono de carrinho.",
        "en-US": "The new design resulted in a 27% increase in conversions, 18% in average order value, and a 32% reduction in cart abandonment rate."
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      customImage: false,
      categories: ["UX Design", "E-commerce"]
    }
  };

  // Use the navigateBack function to return to the main page and restore scroll position
  const goBack = () => {
    navigateBack();
  };

  if (!isMounted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
          <div className="h-96 bg-muted rounded mb-8"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded w-3/4 mb-8"></div>
        </div>
      </div>
    );
  }

  if (!projectId || !projects[projectId as keyof typeof projects]) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-medium mb-6">
          {language === "pt-BR" ? "Projeto não encontrado" : "Project not found"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {language === "pt-BR" 
            ? "O projeto que você está procurando não existe."
            : "The project you're looking for doesn't exist."}
        </p>
        <button 
          onClick={goBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={16} />
          {language === "pt-BR" ? "Voltar para projetos" : "Back to projects"}
        </button>
      </div>
    );
  }

  const project = projects[projectId as keyof typeof projects];
  
  const content = {
    "pt-BR": {
      backButton: "Voltar para projetos",
      overview: "Visão geral",
      process: "Processo",
      solution: "Solução",
      problem: "Problema",
      categories: "Categorias",
      tools: "Ferramentas",
      team: "Time",
      role: "Meu papel",
      designProcess: "Processo de design"
    },
    "en-US": {
      backButton: "Back to projects",
      overview: "Overview",
      process: "Process",
      solution: "Solution",
      problem: "Problem",
      categories: "Categories",
      tools: "Tools",
      team: "Team",
      role: "My Role",
      designProcess: "Design Process"
    }
  };
  
  const text = content[language];

  const TimelineNodes = ({ onClick }: { onClick?: (index: number) => void }) => (
    <div className="flex justify-between relative">
      {[
        { number: 1, title: "Análise da Jornada do Usuário" },
        { number: 2, title: "Protótipo" },
        { number: 3, title: "Teste de Usabilidade" },
        { number: 4, title: "Resultados" }
      ].map((node) => (
        <div 
          key={node.number}
          className="flex flex-col items-center relative cursor-pointer group"
          onClick={() => onClick?.(node.number)}
        >
          <div 
            className={`w-8 h-8 rounded-full border-2 ${
              activeSection === node.number 
                ? 'border-background bg-foreground text-background' 
                : 'border-muted bg-background group-hover:border-foreground'
            } flex items-center justify-center mb-4 transition-colors duration-300`}
          >
            <span className="text-sm">{node.number}</span>
          </div>
          <h3 className="text-sm font-medium text-center max-w-[160px] group-hover:text-foreground transition-colors duration-300">
            {node.title}
          </h3>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-[#fdfdfd]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#fdfdfd] border-b shadow-sm" id="timeline">
        <div className="max-w-6xl mx-auto px-4 transition-all duration-300 ${showHeaderTimeline ? 'py-4' : 'py-2'}">
          <div className={`flex items-center ${showHeaderTimeline ? 'mb-6' : 'mb-0'}`}>
            <motion.button
              onClick={goBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
              {text.backButton}
            </motion.button>
          </div>

          <div className={`relative transition-all duration-300 ${showHeaderTimeline ? 'opacity-100 max-h-[100px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {/* Timeline */}
            <div className="absolute left-0 right-0 top-[15px] h-[2px] bg-muted"></div>
            <TimelineNodes onClick={scrollToSection} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className={`px-4 py-12 md:py-16 transition-all duration-300 ${showHeaderTimeline ? 'mt-[180px]' : 'mt-[60px]'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-medium mb-6">{project.title[language]}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description[language]}</p>

          <div className="rounded-lg overflow-hidden mb-12 aspect-video">
            {project.customImage ? (
              <div className="h-full w-full">
                {/* <ImagemCardLavanderia /> */}
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={project.title[language]} 
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.categories.map((category, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-medium mb-4">{text.overview}</h2>
              <p className="text-muted-foreground">{project.fullDescription[language]}</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">{text.process}</h2>
              <p className="text-muted-foreground">{project.process[language]}</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">{text.solution}</h2>
              <p className="text-muted-foreground">{project.solution[language]}</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">{text.problem}</h2>
              <p className="text-muted-foreground">{project.problem[language]}</p>
            </section>

            {/* Grid layout for Tools, Team, and Role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <section>
                <h2 className="text-2xl font-medium mb-4">{text.tools}</h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>Figma</li>
                  <li>Miro</li>
                  <li>Protopie</li>
                  <li>Excel</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">{text.team}</h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>2 UX Designers</li>
                  <li>6 Desenvolvedores</li>
                  <li>1 Project Manager</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">{text.role}</h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>UX Design</li>
                  <li>UX Research</li>
                  <li>Prototipação</li>
                  <li>Condução do Teste</li>
                </ul>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-medium mb-8">{text.designProcess}</h2>
              <div className="relative" id="main-timeline">
                {/* Timeline */}
                <div className="absolute left-0 right-0 top-[15px] h-[2px] bg-muted"></div>
                <TimelineNodes onClick={scrollToSection} />
              </div>
            </section>

            {/* Content sections */}
            <div className="relative space-y-24">
              {/* User Journey Analysis Section */}
              <section data-timeline-section="1" className="min-h-screen pt-2">
                <h2 className="text-2xl font-medium mb-6">Análise da Jornada do Usuário</h2>
                <p className="text-muted-foreground mb-8">
                  Desenhei a jornada do usuário para entendermos melhor como os moradores se cadastrariam no app a partir da leitura do QRCode no condomínio. Identificamos através da jornada que os usuários precisariam ser bem instruídos a cada etapa que prosseguissem, já que durante as etapas da jornada notamos vários pontos de dúvida.
                </p>
                <div className="rounded-lg overflow-hidden mb-8 border">
                  <img 
                    src={userFlowImage}
                    alt="User journey flow showing the condominium connection process with user thoughts, emotions, and insights" 
                    className="w-full h-auto object-contain bg-white p-4"
                  />
                </div>
              </section>

              {/* Prototype Section */}
              <section data-timeline-section="2" className="min-h-screen pt-2">
                <h2 className="text-2xl font-medium mb-6">Protótipo</h2>
                <p className="text-muted-foreground mb-8">
                  No protótipo, dei uma atenção especial e optei por desenvolver um protótipo de alta fidelidade para que os usuários testados tivessem uma experiência mais próxima o possível do resultado final. A decisão de usar o protótipo de alta fidelidade ajudou na compreensão dos usuários com pouco contato com tecnologia e com idade mais avançada.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden mb-8">
                  <iframe
                    src="https://player.vimeo.com/video/793933696?h=c6d9d6c0f5&autoplay=1&autopause=0&background=1&loop=1&muted=1"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="High-fidelity prototype demonstration"
                  />
                </div>
              </section>

              {/* Usability Testing Section */}
              <section data-timeline-section="3" className="min-h-screen pt-2">
                <h2 className="text-2xl font-medium mb-6">Teste de Usabilidade</h2>
                <p className="text-muted-foreground">
                  Details about the usability testing process will go here. This section should cover the testing methodology and key findings.
                </p>
              </section>

              {/* Results Section */}
              <section data-timeline-section="4" className="min-h-screen pt-2">
                <h2 className="text-2xl font-medium mb-6">Resultados</h2>
                <p className="text-muted-foreground">
                  Project outcomes and results will go here. This section should highlight the improvements and impact of the design changes.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
