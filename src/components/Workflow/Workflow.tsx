export default function Workflow({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        My <span className="text-ring">Workflow</span>
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
