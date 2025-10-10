import { ICardFeaturesProps } from '@/interface/ICardFeaturesProps';

export const featuresData: ICardFeaturesProps[] = [
  {
    data: {
      id: 1,
      title: 'I prioritize client collaboration, fostering open communication',
      img: {
        src: '/card_notebook.png',
        alt: 'card background',
        width: 691,
        height: 543,
      },
    },
    justify: 'bottom',
    align: 'left',
    grid: 'col-span-7 row-span-[6]',
  },
  {
    data: {
      id: 2,
      title: `I'm very flexible with time zone communications`,
      img: {
        src: '/card_globe.png',
        alt: 'card background',
        width: 400,
        height: 197,
      },
    },
    justify: 'top',
    align: 'left',
    grid: 'col-span-5 row-span-[3] grid-col-start-8',
  },
  {
    data: {
      id: 3,
      title: 'My tech stack',
      subtitle: 'I constantly try to improve',
      img: {
        src: '/card_tech.png',
        alt: 'card background',
        width: 400,
        height: 197,
      },
    },
    justify: 'center',
    align: 'left',
    grid: 'col-span-5 row-span-[3] grid-col-start-4 grid-row-start-8',
  },
  {
    data: {
      id: 4,
      title: 'Tech enthusiast with passion for development',
      img: {
        src: '/card_browser.png',
        alt: 'card background',
        width: 400,
        height: 175,
      },
    },
    justify: 'top',
    align: 'left',
    grid: 'col-span-4 row-span-[2] grid-row-start-7',
  },
  {
    data: {
      id: 5,
      title: 'Currently open to new opportunities',
      subtitle: 'Feel free to reach out!',
      img: {
        src: '/card_code.png',
        alt: 'card background',
        width: 400,
        height: 182,
      },
    },
    justify: 'center',
    align: 'left',
    grid: 'col-span-8 row-span-[4]  grid-col-start-5 grid-row-start-7',
  },

  {
    data: {
      id: 6,
      title: 'Do you want to start a project?',
      img: {
        src: '/card_gradient.png',
        alt: 'card background',
        width: 400,
        height: 144,
      },
    },
    justify: 'center',
    align: 'center',
    grid: 'col-span-4 row-span-[2] grid-row-start-9 grid-col-start-1',
  },
];
