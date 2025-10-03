
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'HackerRank Python' },
  { name: 'HackerRank CSS' },
  { name: 'HackerRank JavaScript' },
  { name: 'Udemy Python Video Processing' },
  { name: 'Google Summer of Code' },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
        {certifications.map((cert) => (
          <Card key={cert.name} className="p-4 transition-transform transform hover:-translate-y-2 hover:shadow-primary/20">
            <CardContent className="flex flex-col items-center justify-center text-center gap-3 p-0">
              <Award className="w-10 h-10 text-primary" />
              <p className="font-semibold text-sm md:text-base">{cert.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
