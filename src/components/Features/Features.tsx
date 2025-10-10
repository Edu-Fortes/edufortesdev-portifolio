import { ReactNode } from 'react';

export default function Features({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6 px-4 md:grid md:grid-cols-12 md:grid-rows-10 md:gap-2">
      {children}
    </section>
  );
}
