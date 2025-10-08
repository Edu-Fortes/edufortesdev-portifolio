import CardFeatures from '@/components/Features/CardFeature';
import Features from '@/components/Features/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import CardPlatform from '@/components/Platform/CardPlatform';
import Platform from '@/components/Platform/Platform';
import CardProject from '@/components/Projects/CardProject';
import Projects from '@/components/Projects/Projects';
import { ThemeToggle } from '@/components/ThemeToggle';
import CardWorkflow from '@/components/Workflow/CardWorkflow';
import Workflow from '@/components/Workflow/Workflow';
import { featuresData } from '@/data/featuresData';
import { platformData } from '@/data/platformData';
import { projectsData } from '@/data/projectsData';
import { workflowData } from '@/data/workflowData';

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
          {projectsData.map((project) => (
            <CardProject key={project.data.id} data={project.data} />
          ))}
        </Projects>
        <Platform>
          {platformData.map((card) => (
            <CardPlatform key={card.data.id} data={card.data} />
          ))}
        </Platform>
        <Workflow>
          {workflowData.map((card) => (
            <CardWorkflow key={card.data.id} data={card.data} />
          ))}
        </Workflow>
      </main>
      <ThemeToggle />
    </div>
  );
}
