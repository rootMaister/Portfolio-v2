export interface Project {
  id: string;
  'pt-BR': ProjectContent;
  'en-US': ProjectContent;
  tags: string[];
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  markdownPath: {
    en: string;
    pt: string;
  };
}

export interface ProjectContent {
  title: string;
  description: string;
  content: string;
  process?: string;
  solution?: string;
  problem?: string;
  images: string[];
  role: string;
  year: string;
  client: string;
  category: string;
} 