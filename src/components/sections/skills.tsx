
import { Section, SectionHeading } from '@/components/ui/section';
import { MotionDiv } from '../motion-div';
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVercel,
  SiPython,
  SiExpress,
  SiGithub,
  SiMui,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiOpenai,
  SiTensorflow,
  SiFigma,
  SiPostman,
  SiGooglegemini,
  SiStreamlit,
} from "@icons-pack/react-simple-icons";
import Link from 'next/link';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { name: 'CSS3', icon: <SiCss3 size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Python', icon: <SiPython size={40} />, url: 'https://www.python.org/' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript size={40} />, url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: <SiReact size={40} />, url: 'https://react.dev/' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} />, url: 'https://nextjs.org/' },
  { name: 'Node.js', icon: <SiNodedotjs size={40} />, url: 'https://nodejs.org/' },
  { name: 'Express', icon: <SiExpress size={40} />, url: 'https://expressjs.com/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, url: 'https://tailwindcss.com/' },
  { name: 'Material UI', icon: <SiMui size={40} />, url: 'https://mui.com/' },
  { name: 'Framer Motion', icon: <SiFramer size={40} />, url: 'https://www.framer.com/motion/' },
  { name: 'MongoDB', icon: <SiMongodb size={40} />, url: 'https://www.mongodb.com/' },
  { name: 'MySQL', icon: <SiMysql size={40} />, url: 'https://www.mysql.com/' },
  { name: 'AWS', icon: <SiAmazon size={40} />, url: 'https://aws.amazon.com/' },
  { name: 'OpenAI', icon: <SiOpenai size={40} />, url: 'https://openai.com/' },
  { name: 'TensorFlow', icon: <SiTensorflow size={40} />, url: 'https://www.tensorflow.org/' },
  { name: 'Figma', icon: <SiFigma size={40} />, url: 'https://www.figma.com/' },
  { name: 'Postman', icon: <SiPostman size={40} />, url: 'https://www.postman.com/' },
  { name: 'Vercel', icon: <SiVercel size={40} />, url: 'https://vercel.com/' },
  { name: 'Git', icon: <SiGit size={40} />, url: 'https://git-scm.com/' },
  { name: 'GitHub', icon: <SiGithub size={40} />, url: 'https://github.com/' },
  { name: 'Gemini', icon: <SiGooglegemini size={40} />, url: 'https://deepmind.google/technologies/gemini/' },
  { name: 'Streamlit', icon: <SiStreamlit size={40} />, url: 'https://streamlit.io/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


export function Skills() {
  return (
    <Section id="skills">
      <MotionDiv>
        <SectionHeading>My Skills</SectionHeading>
        <MotionDiv
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
             <MotionDiv key={skill.name} variants={itemVariants}>
              <Link href={skill.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-foreground hover:scale-110">
                {skill.icon}
                <span className="text-sm font-medium">{skill.name}</span>
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
