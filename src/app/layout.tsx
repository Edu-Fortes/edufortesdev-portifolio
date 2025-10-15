import type { Metadata } from 'next';
import Inter from '../../public/fonts/Inter';
import './globals.css';
import { ThemeProvider } from '@/components/util/theme-provider';

const inter = Inter;

export const metadata: Metadata = {
  title: 'Eduardo Fortes | Desenvolvedor Next.js  - Portifólio de Soluções Web',
  description:
    'Especialista em Next.js. Crio websites e aplicações web do zero, com código limpo e foco em alta performance. Conheça meu trabalho e vamos construir algo incrível.',
  openGraph: {
    title:
      'Eduardo Fortes | Desenvolvedor Next.js  - Portifólio de Soluções Web',
    description:
      'Especialista em Next.js. Crio websites e aplicações web do zero, com código limpo e foco em alta performance. Conheça meu trabalho e vamos construir algo incrível.',
    url: 'https://eduardofortes.dev',
    siteName: 'Eduardo Fortes | Desenvolvedor Web - Portifólio de Soluções Web',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
