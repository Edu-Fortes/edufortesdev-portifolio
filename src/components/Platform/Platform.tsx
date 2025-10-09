export default function Platform({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Exclusive <span className="text-ring">platform</span>
      </h2>
      {children}
    </section>
  );
}
