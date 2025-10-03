import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landing } from '@/components/sections/landing';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { AiResumeBuilder } from '@/components/sections/ai-resume-builder';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';
import { Chatbot } from '@/components/chatbot';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiResumeBuilder />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
