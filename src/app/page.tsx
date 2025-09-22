// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { StickyNavbar } from '@/components/StickyNavbar';

// Import your section components
import Hero from '@/components/Hero';
import About from '@/components/About';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import Skills from '@/components/Skills';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) setActiveSection('Home');
    if (aboutInView) setActiveSection('About');
    if (experienceInView) setActiveSection('Experience');
    if (projectsInView) setActiveSection('Projects');
    if (contactInView) setActiveSection('Contact');
    if (skillsInView) setActiveSection('Skills');
  }, [homeInView, aboutInView, experienceInView, projectsInView, contactInView, skillsInView]);

  return (
    <main>
      <StickyNavbar activeSection={activeSection} />

      {/* Assign the ref and id to each section component's root element */}
      <div id="home" ref={homeRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      <div id="experience" ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div id="projects" ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div id="contact" ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}