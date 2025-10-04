import localFont from 'next/font/local';

const Inter = localFont({
  src: [
    {
      path: '/Inter-Variable.ttf',

      style: 'normal',
    },
    {
      path: '/Inter-Italic-Variable.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export default Inter;
