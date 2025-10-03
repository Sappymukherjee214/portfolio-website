
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

export function BehavioralFrameworks() {
  return (
    <Section id="frameworks">
      <MotionDiv>
        <SectionHeading>Behavioral Frameworks</SectionHeading>
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {frameworks.map((framework, index) => (
            <MotionDiv variants={itemVariants} key={index}>
              <Card className="p-6 text-center flex flex-col items-center h-full">
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
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
