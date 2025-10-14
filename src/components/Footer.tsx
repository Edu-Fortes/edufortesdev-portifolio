export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="pt-15 lg:pt-50">
      <div className="px-4 py-6">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Pronto para deixar os templates para trás? <br />
          <span className="text-ring">
            É hora de uma solução que realmente funciona.
          </span>
        </h2>
        <p className="mx-auto text-center md:max-w-3/5">
          Vamos construir um site em que você é o dono, você controla e que se
          destaca da concorrência. Estou pronto para transformar sua visão em
          uma realidade de alta performance.
        </p>
        {children}
        <p className="text-muted-foreground text-center text-xs">
          Copyright &copy;{new Date().getFullYear()} Eduardo Fortes.
          <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
