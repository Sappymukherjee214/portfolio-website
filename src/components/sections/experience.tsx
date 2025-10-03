
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, FileText, BrainCircuit } from 'lucide-react';

const experiences = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Google Summer of Code Contributor',
    description: 'Contributed to an open-source organization, developing new features and improving existing codebase under the mentorship of experienced developers.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Technical Paper Presenter',
    description: 'Presented a technical paper on a noise-resilient object recognition model, detailing a novel approach to improve accuracy in challenging environments.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI/ML Project Development',
    description: 'Worked on various AI/ML projects involving computer vision and natural language processing, from model training to deployment.',
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="flex flex-col text-center items-center p-6 transition-transform transform hover:-translate-y-2">
            <div className="mb-4">{exp.icon}</div>
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
