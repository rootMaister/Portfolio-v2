
import React from "react";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogDescription,
  DialogClose
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface ProjectDetailModalProps {
  projectId: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ 
  projectId, 
  isOpen, 
  onClose 
}: ProjectDetailModalProps) {
  const { language } = useLanguage();

  // All project data with translations
  const projects = {
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
        "pt-BR": "Este projeto envolveu o redesign completo de um aplicativo financeiro existente. O objetivo era simplificar a gestão financeira diária e fornecer insights mais claros sobre os hábitos de gastos dos usuários.",
        "en-US": "This project involved the complete redesign of an existing financial app. The goal was to simplify daily financial management and provide clearer insights into users' spending habits."
      },
      process: {
        "pt-BR": "Conduzi uma extensa pesquisa com usuários, incluindo entrevistas, testes de usabilidade e análise de concorrentes para identificar oportunidades de melhoria.",
        "en-US": "I conducted extensive user research, including interviews, usability testing, and competitor analysis to identify opportunities for improvement."
      },
      solution: {
        "pt-BR": "A solução final apresenta uma interface simplificada com visualizações de dados intuitivas, categorização automática de transações e um dashboard personalizado.",
        "en-US": "The final solution features a simplified interface with intuitive data visualizations, automatic transaction categorization, and a customizable dashboard."
      },
      outcome: {
        "pt-BR": "Após o lançamento, o aplicativo viu um aumento de 35% no engajamento diário e uma melhoria de 28% nas avaliações dos usuários.",
        "en-US": "After launch, the app saw a 35% increase in daily engagement and a 28% improvement in user ratings."
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
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
      outcome: {
        "pt-BR": "A plataforma foi adotada por mais de 200 escolas no primeiro ano, com 92% dos professores relatando melhoria no engajamento dos alunos.",
        "en-US": "The platform was adopted by over 200 schools in the first year, with 92% of teachers reporting improved student engagement."
      },
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
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
      outcome: {
        "pt-BR": "O novo design resultou em um aumento de 27% nas conversões, 18% no valor médio de pedido e uma redução de 32% na taxa de abandono de carrinho.",
        "en-US": "The new design resulted in a 27% increase in conversions, 18% in average order value, and a 32% reduction in cart abandonment rate."
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      categories: ["UX Design", "E-commerce"]
    }
  };

  if (!projectId || !projects[projectId as keyof typeof projects]) {
    return null;
  }

  const project = projects[projectId as keyof typeof projects];
  
  const content = {
    "pt-BR": {
      backButton: "Voltar para projetos",
      closeButton: "Fechar",
      overview: "Visão geral",
      process: "Processo",
      solution: "Solução",
      outcome: "Resultado",
      categories: "Categorias",
      projectDetails: "Detalhes do projeto"
    },
    "en-US": {
      backButton: "Back to projects",
      closeButton: "Close",
      overview: "Overview",
      process: "Process",
      solution: "Solution",
      outcome: "Outcome",
      categories: "Categories",
      projectDetails: "Project details"
    }
  };
  
  const text = content[language];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
        {/* Hidden but accessible title and description for screen readers */}
        <DialogTitle className="sr-only">{project.title[language]}</DialogTitle>
        <DialogDescription className="sr-only">{project.description[language]}</DialogDescription>
        
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 md:p-8 border-b">
            <motion.button
              onClick={onClose}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
              {text.backButton}
            </motion.button>
            
            <DialogClose className="rounded-full p-2 hover:bg-muted/80 transition-colors" aria-label={text.closeButton}>
              <X size={20} />
            </DialogClose>
          </div>

          <ScrollArea className="flex-1 overflow-auto">
            <div className="p-6 md:p-8 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl font-medium mb-6">{project.title[language]}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.description[language]}</p>

                <div className="rounded-lg overflow-hidden mb-12 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title[language]} 
                    className="w-full h-full object-cover"
                  />
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
                    <h2 className="text-2xl font-medium mb-4">{text.outcome}</h2>
                    <p className="text-muted-foreground">{project.outcome[language]}</p>
                  </section>
                </div>
              </motion.div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
