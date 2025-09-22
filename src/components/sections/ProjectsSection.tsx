import { projectsData } from "@/data/projects";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50">
          My Projects
        </h2>
        <p className="text-center text-white dark:text-white mt-2 mb-12">
          A selection of projects I have worked on.
        </p>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            // The Project Card
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer">
              <div 
                className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full"
              >
              <div className="p-4 bg-gray-50/20 dark:bg-zinc-900/20">
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  width={1200}
                  height={720}
                  className="rounded-md border border-slate-200 dark:border-zinc-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}