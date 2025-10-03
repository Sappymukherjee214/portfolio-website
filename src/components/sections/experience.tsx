
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Briefcase, Code, ChevronRight } from 'lucide-react';
import { MotionDiv } from '../motion-div';

const experiences = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Software Developer Intern',
    company: 'Zidio Development',
    location: 'Bangalore, India',
    date: 'June 2025 - August 2025',
    details: [
      'Developed 15+ RESTful APIs and SDKs handling 50K+ telemetry requests/day, improving service reliability and scalability',
      'Built end-to-end telemetry pipelines with Azure Data Factory + EventHub, improving data model accuracy by 20%',
      'Automated CI/CD pipelines with GitHub Actions, cutting deployment time by 60%',
      'Containerized microservices with Docker, enhancing modularity across 3 production environments',
    ],
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Open-Source Contributor',
    company: 'Google Summer of Code',
    location: 'Remote',
    date: 'July 2025 - July 2025',
    details: [
      'Built 5 telemetry dashboards in Power BI + Synapse, processing 500K+ logs/day for real-time analytics',
      'Implemented pipelines (Kafka → EventHub → ADX) processing 1M+ events/hour, reducing latency by 25%',
      'Addressed 30+ bugs and reduced technical debt by 20% across 3 global open-source projects',
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <MotionDiv>
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 flex flex-col sm:flex-row gap-6">
              <div className="flex justify-center items-center">
                <div className="bg-secondary p-3 rounded-lg h-14 w-14 flex items-center justify-center">
                    {exp.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold font-headline">{exp.title}</h3>
                <p className="text-primary font-semibold mt-1">{exp.company} | {exp.location}</p>
                <p className="text-sm text-muted-foreground mt-1">{exp.date}</p>
                <ul className="mt-4 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
