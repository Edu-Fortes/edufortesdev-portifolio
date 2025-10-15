import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold lg:mb-25">
        <span className="text-ring">Sou um artesão</span> em um mundo de
        fábricas
      </h2>
      <div className="flex flex-wrap items-center justify-center px-4 lg:px-0">
        <Image
          src="/craftsman.png"
          alt="Mundo digital dividido ao meio: à esquerda, ferramentas de desenho técnico como compasso e esquadros flutuam com trechos de código em azul neon, simbolizando design artesanal. À direita, fileiras de servidores e esteiras de produção em cinza, representando automação e fábricas. Um núcleo brilhante conecta os dois lados"
          width={600}
          height={400}
          className="border-ring rounded-lg border"
        />
        <p className="mx-auto mt-20 max-w-3xl text-justify text-lg font-medium">
          Em uma era de sites padronizados, sigo uma filosofia diferente: criar
          produtos digitais tão únicos quanto os negócios que eles representam.
          Meu trabalho é impulsionado pela paixão por um código limpo e
          eficiente e pelo compromisso em criar experiências de usuário belas e
          intuitivas. Eu não apenas construo sites — eu construo bases
          escaláveis e robustas que capacitam negócios a crescer, se adaptar e
          prosperar.
        </p>
      </div>
    </section>
  );
}
