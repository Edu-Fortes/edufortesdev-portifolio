import { ReactNode } from 'react';

export default function Features({ children }: { children: ReactNode }) {
  return <section className="space-y-6 px-4">{children}</section>;
}
