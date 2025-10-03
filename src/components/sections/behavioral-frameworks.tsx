
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from '../motion-div';
import { Recycle, Lightbulb, Users, Scaling } from 'lucide-react';

const frameworks = [
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: 'Agile Methodologies',
    description: 'Embracing iterative development, collaboration, and responding to change to deliver value efficiently.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'First Principles Thinking',
    description: 'Breaking down complex problems into their most basic elements to build innovative solutions from the ground up.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'User-Centric Design',
    description: 'Prioritizing the user\'s needs and experience at every stage of the development process to create intuitive products.'
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Scalable Architecture',
    description: 'Designing systems with future growth in mind, ensuring reliability and performance as user demand increases.'
  },
];

export function BehavioralFrameworks() {
  return (
    <Section id="frameworks">
      <MotionDiv>
        <SectionHeading>Behavioral Frameworks</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {frameworks.map((framework, index) => (
            <Card key={index} className="p-6 text-center flex flex-col items-center">
                <div className="bg-secondary p-3 rounded-lg inline-block mb-4">
                    {framework.icon}
                </div>
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-2">{framework.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground">{framework.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
