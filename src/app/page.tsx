import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="space-y-15 font-sans">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features />
      </main>
      <ThemeToggle />
    </div>
  );
}
