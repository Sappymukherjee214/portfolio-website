
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ExternalLink } from 'lucide-react';
import { MotionDiv } from '../motion-div';

const projects = [
  {
    title: 'AI Resume Builder',
    description: 'A tool that leverages generative AI to tailor resumes to specific job descriptions, helping users stand out.',
    imageId: 'project-ai-resume-builder',
    githubLink: '#',
    liveLink: '#ai-resume-builder',
  },
  {
    title: 'Virtual Mouse with Hand Gestures',
    description: 'Control your computer\'s mouse using hand gestures, powered by computer vision and OpenCV.',
    imageId: 'project-virtual-mouse',
    githubLink: '#',
  },
  {
    title: 'Photo Caption Generator',
    description: 'An AI model that automatically generates descriptive captions for images, using deep learning techniques.',
    imageId: 'project-photo-caption-generator',
    githubLink: '#',
  },
  {
    title: 'Expense Explanation Generator',
    description: 'Simplify financial reports by automatically generating easy-to-understand explanations for expense data.',
    imageId: 'project-expense-explanation',
    githubLink: '#',
  },
  {
    title: 'College Recommendation Engine',
    description: 'A recommendation system that suggests suitable colleges to students based on their academic profiles and preferences.',
    imageId: 'project-college-recommendation',
    githubLink: '#',
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, index) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                return (
                    <MotionDiv variants={itemVariants} key={project.title}>
                      <Card className="overflow-hidden flex flex-col h-full group transition-transform transform hover:-translate-y-2 hover:shadow-primary/20">
                      {projectImage && (
                          <div className="overflow-hidden">
                              <Image
                              src={projectImage.imageUrl}
                              alt={projectImage.description}
                              width={600}
                              height={400}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={projectImage.imageHint}
                              />
                          </div>
                      )}
                      <CardHeader>
                          <CardTitle className="font-headline">{project.title}</CardTitle>
                          <CardDescription className="h-12">{project.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto flex justify-end gap-2">
                          {project.githubLink && (
                          <Button variant="outline" size="sm" asChild>
                              <Link href={project.githubLink} target="_blank">
                              <Github />
                              <span>GitHub</span>
                              </Link>
                          </Button>
                          )}
                          {project.liveLink && (
                          <Button variant="default" size="sm" asChild>
                              <Link href={project.liveLink}>
                              <ExternalLink />
                              <span>View</span>
                              </Link>
                          </Button>
                          )}
                      </CardFooter>
                      </Card>
                    </MotionDiv>
                );
                })}
            </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
