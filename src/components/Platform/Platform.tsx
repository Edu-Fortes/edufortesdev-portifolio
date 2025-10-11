export default function Platform({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold lg:mb-25">
        Exclusive <span className="text-ring">platform</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{children}</div>
    </section>
  );
}
