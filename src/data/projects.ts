import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'project-1',
    tags: ['User Journey Map', 'User Flow', 'User Testing', 'User Research', 'Prototyping'],
    thumbnail: '/images/project-1/thumbnail.png',
    markdownPath: {
      en: '/content/en/project-1.md',
      pt: '/content/pt/project-1.md'
    },
    'pt-BR': {
      title: 'Teste de Usabilidade apepê',
      description: 'Processo de cadastro e vínculo condominial',
      content: '',
      images: ['/images/project-1/results.png'],
      role: 'Product Designer',
      year: '',
      client: '',
      category: ''
    },
    'en-US': {
      title: 'Teste de Usabilidade apepê',
      description: 'Teste de Usabilidade apepê',
      content: '',
      images: ['/images/project-1/results.png'],
      role: '',
      year: '',
      client: '',
      category: ''
    }
  },
];