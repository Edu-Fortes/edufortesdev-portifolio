import CardFeatures from '@/components/Features/CardFeature';
import Features from '@/components/Features/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { featuresData } from '@/data/featuresData';

export default function Home() {
  return (
    <div className="space-y-15 font-sans">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features>
          {featuresData.map((feature) => (
            <CardFeatures
              key={feature.data.id}
              data={feature.data}
              justify={feature.justify}
              align={feature.align}
            />
          ))}
        </Features>
      </main>
      <ThemeToggle />
    </div>
  );
}
