import { ReactNode } from 'react';

export default function Projects({ children }: { children: ReactNode }) {
  return (
    <section className="px-4">
      <h2 className="mb-8 text-center text-3xl font-bold lg:mb-25">
        A small selection of <span className="text-ring">recent projects</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{children}</div>
    </section>
  );
}
