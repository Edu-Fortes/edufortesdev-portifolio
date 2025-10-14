import { ICardFeaturesProps } from '@/interface/ICardFeaturesProps';

export const featuresData: ICardFeaturesProps[] = [
  {
    data: {
      id: 1,
      title: 'Comunicação clara, sem barreiras e flexível',
      img: {
        src: '/card_notebook.png',
        alt: 'card background',
        width: 691,
        height: 543,
      },
    },
    justify: 'bottom',
    align: 'left',
    grid: 'md:col-span-7 md:row-span-[6]',
  },
  {
    data: {
      id: 2,
      title: 'Colaboração total, do início ao fim',
      img: {
        src: '/card_globe.png',
        alt: 'card background',
        width: 400,
        height: 197,
      },
    },
    justify: 'top',
    align: 'left',
    grid: 'md:col-span-5 md:row-span-[3] md:grid-col-start-8',
  },
  {
    data: {
      id: 3,
      title: 'Técnologias modernas',
      subtitle: 'Seu sucesso com',
      img: {
        src: '/card_tech.png',
        alt: 'card background',
        width: 400,
        height: 197,
      },
    },
    justify: 'center',
    align: 'left',
    grid: 'md:col-span-5 md:row-span-[3] md:grid-col-start-4 md:grid-row-start-8',
  },
  {
    data: {
      id: 4,
      title: 'Trabalhando juntos, alcançamos resultados melhores',
      img: {
        src: '/card_browser.png',
        alt: 'card background',
        width: 400,
        height: 175,
      },
    },
    justify: 'top',
    align: 'left',
    grid: 'md:col-span-4 md:row-span-[2] md:grid-row-start-7',
  },
  {
    data: {
      id: 5,
      title: 'Transformando sua ideia em realidade com linhas de código',
      subtitle: 'Testemunhe a magia',
      img: {
        src: '/card_code.png',
        alt: 'card background',
        width: 400,
        height: 182,
      },
    },
    justify: 'center',
    align: 'left',
    grid: 'md:col-span-8 md:row-span-[4]  md:grid-col-start-5 md:grid-row-start-7',
  },

  {
    data: {
      id: 6,
      title: 'Você quer iniciar um projeto?',
      img: {
        src: '/card_gradient.png',
        alt: 'card background',
        width: 400,
        height: 144,
      },
    },
    justify: 'center',
    align: 'center',
    grid: 'md:col-span-4 md:row-span-[2] md:grid-row-start-9 md:grid-col-start-1',
  },
];
