import type { Projects } from '../types/types';

export const projectsData: Projects[] = [
  {
    id: '1',
    title: 'New Vegas Store',
    description: 'My first JavaScript project when my JS course started.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'public/images/New-Vegas-Store.png',
    github: 'https://github.com/Prxjec-t/Webshop',
    liveLink: 'https://medieinstitutet.github.io/fed25d-js-intro-inl-1-Prxjec-t/',
  },
  {
    id: '2',
    title: 'BudgetWork',
    description: 'This was a school project for learning TypeScript.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vite'],
    image: 'public/images/BudgetWork.png',
    github: 'https://github.com/Prxjec-t/BudgetApp',
    liveLink: 'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-Prxjec-t/',
  },
  {
    id: '3',
    title: 'Escape Room - Group Project',
    description: 'This was the first group project and for this we had to make an escape room.',
    technologies: ['HTML', 'SCSS', 'TypeScript', 'Vite'],
    image: 'public/images/EscapeRoom.png',
    github: 'https://github.com/Prxjec-t/EscapeRoom-GroupProject',
    liveLink: 'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-dopefish-admirers/',
  },
  {
    id: '4',
    title: 'Book API - Group Project',
    description: 'This is a fullstack project we got during our API development course.',
    technologies: ['TypeScript', 'MongoDB', 'Express', 'Vercel', 'CSS', 'HTML'],
    image: 'public/images/BookAPI.png',
    github: 'https://github.com/Prxjec-t/BookApi-GroupProject',
    liveLink: 'https://book-api-kappa-ten.vercel.app/',
  },
  {
    //Not finished project
    id: '5',
    title: 'Music Store - WIP',
    description:
      'This is a little fun project im working on. It is inspired by a website someone had created were it replicated the steam store where you could pretend to buy games',
    technologies: ['TypeScript', 'Express', 'MongoDB', 'CSS', 'HTML'],
    image: 'public/images/MusicStore.png',
    github: 'https://github.com/Prxjec-t/music-store',
    liveLink: '',
  },
  {
    //Not finished project
    id: '6',
    title: 'Xbox Dashboard Imitation - WIP',
    description:
      'This was a HTML and CSS practice project I did for myself which I have forgotten so it is not fully finished yet',
    technologies: ['HTML', 'CSS'],
    image: 'public/images/Xbox-dashboard.png',
    github: 'https://github.com/Prxjec-t/Xbox-dashboard-copy',
    liveLink: 'https://xboxdashboard.vercel.app/',
  },
];
