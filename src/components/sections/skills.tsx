
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
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: 'HTML5', icon: <SiHtml5 size={40} /> },
  { name: 'CSS3', icon: <SiCss3 size={40} /> },
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
  { name: 'Express', icon: <SiExpress size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'Material UI', icon: <SiMui size={40} /> },
  { name: 'Framer Motion', icon: <SiFramer size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'MySQL', icon: <SiMysql size={40} /> },
  { name: 'AWS', icon: <SiAmazon size={40} /> },
  { name: 'OpenAI', icon: <SiOpenai size={40} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
  { name: 'Figma', icon: <SiFigma size={40} /> },
  { name: 'Postman', icon: <SiPostman size={40} /> },
  { name: 'Vercel', icon: <SiVercel size={40} /> },
  { name: 'Git', icon: <SiGit size={40} /> },
  { name: 'GitHub', icon: <SiGithub size={40} /> },
];

export function Skills() {
  return (
    <Section id="skills">
      <MotionDiv>
        <SectionHeading>My Skills</SectionHeading>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-foreground hover:scale-110">
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
