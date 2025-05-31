import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'project-1',
    tags: ['User Journey Map', 'User Flow', 'User Testing', 'User Research', 'Prototyping'],
    thumbnail: '/images/project-1/apepe_thumbnail.jpg',
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
      title: 'User Testing apepê',
      description: 'Registration and Condominium Link Process',
      content: '',
      images: ['/images/project-1/results.png'],
      role: 'Product Designer',
      year: '',
      client: '',
      category: ''
    }
  },
  {
    id: 'coming-soon-project',
    tags: ['UX Design', 'UI Design'],
    thumbnail: '/images/desk-field-research/desk-thumbnail.jpg',
    comingSoon: true,
    markdownPath: {
      en: '',
      pt: ''
    },
    'pt-BR': {
      title: 'Controle de Acesso Desk',
      description: 'Desenvolvimento de um sistema de controle de acesso condominial.',
      content: '',
      images: [],
      role: 'Product Designer',
      year: '2024',
      client: '',
      category: ''
    },
    'en-US': {
      title: 'Access Control Desk',
      description: 'Development of a condominium access control system.',
      content: '',
      images: [],
      role: 'Product Designer',
      year: '2024',
      client: '',
      category: ''
    }
  },
];