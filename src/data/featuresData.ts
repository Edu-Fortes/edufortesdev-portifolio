import { ICardFeaturesProps } from '@/interface/ICardFeaturesProps';

export const featuresData: ICardFeaturesProps[] = [
  {
    data: {
      id: 1,
      title: 'Comunicação clara, sem barreiras e flexível',
      img: {
        src: {
          dark: '/dark-comunication.png',
          light: '/light-comunication.png',
        },
        alt: 'Conceito digital de comunicação clara, com linhas de dados fluindo e ícones de balões de fala e um globo terrestre, em tons neon de azul e roxo',
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
        src: {
          dark: '/dark-collaboration.png',
          light: '/light-collaboration.png',
        },
        alt: 'Diagrama digital em loop com ícones de aperto de mãos, documento, engrenagem e foguete, simbolizando colaboração do início ao fim, em tons neon',
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
        src: {
          dark: '/dark-tech-stack.png',
          light: '/light-tech-stack.png',
        },
        alt: 'Placa de circuito estilizada com ícones de linguagens de programação (JS, Vue, Nuxt, TypeScript) e um gráfico de crescimento, em tons neon, simbolizando sucesso com tecnologias modernas',
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
        src: {
          dark: '/dark-better-together.png',
          light: '/light-better-together.png',
        },
        alt: 'Engrenagem digital com duas figuras humanas apertando as mãos e um gráfico de crescimento ao centro, representando trabalho em equipe e melhores resultados, em tons neon',
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
        src: {
          dark: '/dark-top-idea.png',
          light: '/light-top-idea.png',
        },
        alt: 'Lâmpada acesa no centro de um circuito digital, com linhas de código e diagramas ao redor, simbolizando a transformação de ideias em realidade com programação',
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
        src: {
          dark: '/dark-rocket-lauch.png',
          light: '/light-rocket-lauch.png',
        },
        alt: 'Foguete estilizado decolando de uma plataforma digital com o texto "START PROJECT", rodeado por elementos de código e engrenagens, convidando ao início de um projeto',
        width: 400,
        height: 200,
      },
    },
    justify: 'center',
    align: 'center',
    grid: 'md:col-span-4 md:row-span-[2] md:grid-row-start-9 md:grid-col-start-1',
  },
];
