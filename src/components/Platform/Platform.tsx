export default function Platform({ children }: { children: React.ReactNode }) {
  return (
    <section id="platform" className="px-4">
      <div className="mb-8 text-center lg:mb-25">
        <h2 className="text-3xl font-bold">
          Seu Negócio
          <span className="text-ring"> Sem limites</span>
        </h2>
        <p className="mt-4 text-xl font-semibold">
          As vantagens de uma solução construída sob medida.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{children}</div>
    </section>
  );
}
