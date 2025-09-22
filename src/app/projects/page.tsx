import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          My Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}