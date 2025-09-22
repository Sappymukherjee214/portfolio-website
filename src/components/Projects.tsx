import ProjectCard from "./ProjectCard";
import { motion } from 'framer-motion';

import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
