import { ICardProjectsProps } from '@/interface/ICardProjectsProps';

export const projectsData: ICardProjectsProps[] = [
  {
    data: {
      id: 1,
      title: '3D Solar System Planets to Explore',
      description:
        'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
      badges: [
        { id: 1, name: 'Next.js' },
        { id: 2, name: 'Tailwind' },
        { id: 3, name: 'TypeScript' },
      ],
      img: {
        src: '/mandala-edufortesdev.png',
        alt: 'card background',
        width: 1440,
        height: 960,
      },
      liveSiteURL: '#',
    },
  },
  {
    data: {
      id: 2,
      title: 'Financial Dashboard',
      description:
        'A comprehensive financial dashboard built with Angular and Tailwind CSS.',
      badges: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'Tailwind' },
      ],
      img: {
        src: '/mandala-edufortesdev.png',
        alt: 'card background',
        width: 500,
        height: 500,
      },
      liveSiteURL: '#',
    },
  },
  {
    data: {
      id: 3,
      title: 'Family Calendar App',
      description:
        'A FullStack Family Calendar App build with Angular, Material UI, ASP.NET Core and PostgreSQL.',
      badges: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'Tailwind' },
        { id: 4, name: 'ASP.NET Core' },
        { id: 5, name: 'PostgreSQL' },
      ],
      img: {
        src: '/mandala-edufortesdev.png',
        alt: 'card background',
        width: 500,
        height: 500,
      },
      liveSiteURL: '#',
    },
  },
  {
    data: {
      id: 4,
      title: 'Portifolio Website',
      description:
        'A personal portfolio website built with Next.js and Tailwind CSS.',
      badges: [
        { id: 1, name: 'Next.js' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'Tailwind' },
      ],
      img: {
        src: '/mandala-edufortesdev.png',
        alt: 'card background',
        width: 500,
        height: 500,
      },
      liveSiteURL: '#',
    },
  },
];
