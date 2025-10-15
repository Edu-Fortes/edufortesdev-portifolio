import { ReactNode } from 'react';

export default function Projects({ children }: { children: ReactNode }) {
  return (
    <section id="projects" className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold lg:mb-25">
        Alguns dos meus <span className="text-ring">projetos recentes</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{children}</div>
    </section>
  );
}
