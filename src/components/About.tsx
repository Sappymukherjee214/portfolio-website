'use client';

import Image from 'next/image';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiPrisma,
  SiNestjs,
} from 'react-icons/si';
import { FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() { // Changed to default export and function name to About
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image 
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full object-cover border-4 border-slate-200 dark:border-zinc-700 shadow-md"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-lg text-white dark:text-white">
              I am an aspiring Software Developer from India, passionate about building efficient, scalable, and user-friendly applications. My core skills include JavaScript, TypeScript, React, and Next.js, and I’m continuously exploring backend and AI technologies to grow as a full-stack developer. I’m eager to contribute to impactful projects, learn from real-world challenges, and enhance my problem-solving abilities.
            </p>
          </div>
        </div>

        {/* This is the container for the skill icons */}
        <div className="mt-16 flex items-center justify-center gap-6 md:gap-8 flex-wrap">
          <SiHtml5
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="HTML5"
          />
          <SiCss3
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="CSS3"
          />
          <SiSass
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Sass"
          />
          <SiJavascript
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="JavaScript"
          />
          <SiTypescript
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="TypeScript"
          />
          <SiReact
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="React"
          />
          <SiNextdotjs
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Next.js"
          />
          <FaNodeJs
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Node.js"
          />
          <SiNestjs
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="NestJS"
          />
          <SiTailwindcss
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Tailwind CSS"
          />
          <SiPrisma
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Prisma"
          />
          <FaGitAlt
            className="text-4xl text-slate-500 hover:text-pink-600 transition-colors"
            title="Git"
          />
        </div>
      </div>
    </motion.section>
  );
}