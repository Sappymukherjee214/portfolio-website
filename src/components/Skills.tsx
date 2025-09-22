import { skillsData } from "../data/skillsData";
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-4xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skillsData.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{skill.name}</span>
        ))}
      </div>
    </motion.section>
  );
}
