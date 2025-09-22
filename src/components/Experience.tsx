'use client';

import { experienceData } from '../data/experience'; // Corrected import path
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() { // Changed to default export and function name to Experience
  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h2>

        {/* The Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-700">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* The Timeline Marker Dot */}
              <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-slate-400 dark:border-zinc-800 dark:bg-zinc-600"></div>

              {/* Job Title and Company */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                {item.title} - <span className="font-normal text-slate-700 dark:text-slate-300">{item.company}</span>
              </h3>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 my-2">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              
              {/* Description */}
              <p className="text-base text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              {/* Skills/Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full dark:bg-zinc-800 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}