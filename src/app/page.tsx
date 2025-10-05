import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="font-sans">
      <header>
        <Navbar />
        <Hero />
        <ThemeToggle />
      </header>
    </div>
  );
}
