import { ReactNode } from 'react';

export default function Features({ children }: { children: ReactNode }) {
  return (
    <section className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-10 md:gap-2">
      {children}
    </section>
  );
}
