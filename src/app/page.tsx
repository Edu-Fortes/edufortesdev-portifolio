import CardFeatures from '@/components/Features/CardFeature';
import Features from '@/components/Features/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import CardProject from '@/components/Projects/CardProject';
import Projects from '@/components/Projects/Projects';
import { ThemeToggle } from '@/components/ThemeToggle';
import { featuresData } from '@/data/featuresData';

export default function Home() {
  return (
    <div className="space-y-15 font-sans">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="space-y-15">
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
        <Projects>
          <CardProject />
        </Projects>
      </main>
      <ThemeToggle />
    </div>
  );
}
