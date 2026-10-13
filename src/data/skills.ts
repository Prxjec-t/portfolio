import type { Skill } from '../types/types';
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiFigma } from 'react-icons/si';

export const skillsData: Skill[] = [
  {
    id: '1',
    name: 'HTML',
    icon: FaHtml5,
    iconColor: '#E34F26',
  },
  {
    id: '2',
    name: 'CSS',
    icon: FaCss3,
  },
  {
    id: '3',
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    id: '4',
    name: 'Figma',
    icon: SiFigma,
  },
  {
    id: '5',
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: '6',
    name: 'Git',
    icon: FaGitAlt,
  },
  {
    id: '7',
    name: 'React',
    icon: FaReact,
  },
  {
    id: '8',
    name: 'Tailwind',
    icon: SiTailwindcss,
  },
];
