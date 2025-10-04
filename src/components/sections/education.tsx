
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';
import { MotionDiv } from '../motion-div';

const education = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    university: 'Swami Vivekananda Institute of Science and Technology (SVIST)',
    location: 'Kolkata, West bengal, India',
    date: '2023-2027',
    details: [
      'Currently a third-year undergraduate student.',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems, Artificial Intelligence.',
      'CGPA: 7.89/10.0 (or as applicable)',
    ],
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    degree: 'XII (Senior Secondary)',
    university: 'BBIT Public School',
    location: 'Kolkata, West bengal, India',
    date: '2020 - 2022',
    details: [
        'Stream: Science',
        'Board: Central Board of Secondary Education (CBSE)',
        'Percentage: 83.4%',
    ],
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    degree: 'X (Secondary)',
    university: 'Your Secondary School',
    location: 'City, Country',
    date: '2020 - 2021',
    details: [
        'Board: Your Board (e.g., CBSE, ICSE)',
        'Percentage: 83%',
    ],
  },
];

export function Education() {
  return (
    <Section id="education">
      <MotionDiv>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 md:p-8 flex flex-col sm:flex-row gap-6">
              <div className="flex justify-center items-center">
                <div className="bg-secondary p-3 rounded-lg h-14 w-14 flex items-center justify-center">
                    {edu.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold font-headline">{edu.degree}</h3>
                <p className="text-primary font-semibold mt-1">{edu.university} | {edu.location}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.date}</p>
                <ul className="mt-4 space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 flex-shrink-0 mt-1">
                        <GraduationCap className="w-full h-full text-primary/70" />
                      </div>
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
