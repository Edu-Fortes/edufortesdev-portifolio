import { ReactNode } from 'react';

export default function Projects({ children }: { children: ReactNode }) {
  return (
    <section className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        A small selection of <span className="text-ring">recent projects</span>
      </h2>
      {children}
    </section>
  );
}
