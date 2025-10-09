export default function Workflow({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        My <span className="text-ring">Workflow</span>
      </h2>
      {children}
    </section>
  );
}
