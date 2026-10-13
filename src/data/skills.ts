import type { Skill } from '../types/types';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
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
    icon: FaCss3Alt,
    iconColor: '#1572B6',
  },
  {
    id: '3',
    name: 'JavaScript',
    icon: SiJavascript,
    iconColor: '#F7DF1E',
  },
  {
    id: '4',
    name: 'Figma',
    icon: SiFigma,
    iconColor: '', //Multiple colors on the original so I just leave this blank
  },
  {
    id: '5',
    name: 'TypeScript',
    icon: SiTypescript,
    iconColor: '#3178C6',
  },
  {
    id: '6',
    name: 'Git',
    icon: FaGitAlt,
    iconColor: '#F05032',
  },
  {
    id: '7',
    name: 'React',
    icon: FaReact,
    iconColor: '#61DAFB',
  },
  {
    id: '8',
    name: 'Tailwind',
    icon: SiTailwindcss,
    iconColor: '#06B6D4',
  },
];
