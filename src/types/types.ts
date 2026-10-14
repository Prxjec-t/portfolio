import type { IconType } from 'react-icons';

export type Skill = {
  id: string;
  name: string;
  icon: IconType;
  iconColor?: string;
};

export type Projects = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveLink?: string;
};
