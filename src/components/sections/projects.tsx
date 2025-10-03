
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code } from 'lucide-react';
import { MotionDiv } from '../motion-div';

const projects = [
  {
    title: 'AI-Powered Resume Builder',
    description: 'Full-stack application generating ATS-optimized resumes, serving 200+ active users with secure authentication and telemetry tracking.',
    tags: ['React', 'Node.js', 'AI', 'Tailwind'],
    liveLink: '#ai-resume-builder',
  },
  {
    title: 'Photo Caption Generator',
    description: 'AI captioning system using Gemini API, processing 1,000+ images/day with 18% higher accuracy and optimized inference pipelines.',
    tags: ['Python', 'Gemini API', 'React', 'Streamlit'],
    liveLink: '#',
  },
  {
    title: 'Virtual Mouse',
    description: 'Computer vision application enabling hands-free mouse control using gesture recognition and real-time tracking algorithms.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    liveLink: '#',
  },
  {
    title: 'GenAI Applications',
    description: 'Suite of AI-powered tools leveraging modern LLMs for content generation, data analysis, and intelligent automation.',
    tags: ['Python', 'LLMs', 'Azure', 'APIs'],
    liveLink: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Projects() {
  return (
    <Section id="projects">
        <MotionDiv>
            <SectionHeading>Projects</SectionHeading>
            <MotionDiv 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project) => (
                    <MotionDiv variants={itemVariants} key={project.title}>
                      <Card className="flex flex-col h-full group relative transition-all duration-300 hover:border-primary/40">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="bg-primary/10 border border-primary/30 p-2 rounded-md">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            {project.liveLink && (
                                <Link href={project.liveLink} target="_blank">
                                    <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                                </Link>
                            )}
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                      </Card>
                    </MotionDiv>
                ))}
            </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
