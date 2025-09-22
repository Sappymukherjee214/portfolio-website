import { experienceData } from "@/data/experience";
import { Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white dark:text-white">
          My Experience
        </h2>
        <p className="text-center text-white dark:text-white mt-2 mb-12">
          Professional experience that I have accumulated over several years.
        </p>

        {/* The Timeline */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experienceData.map((item, index) => (
            <li key={index} className="mb-10 ml-8">
              {/* The Timeline Marker */}
              <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-200 rounded-full -left-1.5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>

              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-white dark:text-white" />
                <h3 className="text-lg font-semibold text-white dark:text-white">
                  {item.company}
                </h3>
              </div>
              
              <h4 className="text-xl font-bold text-white dark:text-white">
                {item.title}
              </h4>
              
              <div className="flex items-center mt-1 mb-2">
                <Calendar className="w-3.5 h-3.5 text-white dark:text-white mr-2" />
                <time className="text-sm font-normal leading-none text-white dark:text-white">
                  {item.date}
                </time>
              </div>
              
              <p className="mb-4 text-base font-normal text-white dark:text-white">
                {item.description}
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-white text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}