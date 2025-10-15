import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import CardFeatures from '@/components/Features/CardFeature';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import DesktopNav from '@/components/Navbar/DesktopNav';
import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import CardPlatform from '@/components/Platform/CardPlatform';
import Platform from '@/components/Platform/Platform';
import CardProject from '@/components/Projects/CardProject';
import Projects from '@/components/Projects/Projects';
import SocialMediaIcons from '@/components/SocialMediaIcons';
import CardWorkflow from '@/components/Workflow/CardWorkflow';
import Workflow from '@/components/Workflow/Workflow';
import { featuresData } from '@/data/featuresData';
import { platformData } from '@/data/platformData';
import { projectsData } from '@/data/projectsData';
import { workflowData } from '@/data/workflowData';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-15 pt-16 font-sans">
      <header className="relative">
        <div
          className="lg:clip-hero absolute -top-16 right-0 bottom-0 left-0 -z-10 hidden bg-[url(/developer.jpg)] bg-cover bg-center lg:block"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Navbar>
            <MobileNav />
            <DesktopNav />
          </Navbar>
          <Hero />
        </div>
      </header>
      <main className="mb-0 space-y-15 lg:mt-60 lg:space-y-50">
        <Features>
          {featuresData.map((feature) => (
            <CardFeatures
              key={feature.data.id}
              data={feature.data}
              justify={feature.justify}
              align={feature.align}
              grid={feature.grid}
            />
          ))}
        </Features>
        <About />
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
      <Footer>
        <ContactForm className="mx-auto py-8" />
        <SocialMediaIcons />
      </Footer>
    </div>
  );
}
