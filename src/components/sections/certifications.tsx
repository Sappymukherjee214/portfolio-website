
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'HackerRank Python', issuer: 'HackerRank', year: '2024', id: 'Python (Basic)' },
  { name: 'HackerRank CSS', issuer: 'HackerRank', year: '2024', id: 'CSS' },
  { name: 'HackerRank JavaScript', issuer: 'HackerRank', year: '2024', id: 'JavaScript (Intermediate)' },
  { name: 'Python Video Processing', issuer: 'Udemy', year: '2024', id: 'Certificate of Completion' },
  { name: 'Google Summer of Code', issuer: 'Google', year: '2024', id: 'Contributor' },
  { name: 'Azure Fundamentals', issuer: 'Microsoft', year: '2025', id: 'AZ-900 Certification' },
  { name: 'Java SE Programmer', issuer: 'Oracle', year: '2025', id: '1Z0-819' },
  { name: 'AI Practitioner', issuer: 'AWS', year: '2025', id: 'CLF-C01' },
  { name: 'Machine Learning', issuer: 'Coursera', year: '2023', id: 'Certificate of Completion' },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {certifications.map((cert) => (
          <Card key={cert.name} className="p-4 transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 flex flex-col">
            <CardHeader className="flex-row items-center gap-4 p-0">
              <Award className="w-10 h-10 text-primary shrink-0" />
              <CardTitle className="font-semibold text-base md:text-lg leading-tight">{cert.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.year}</p>
                <CardDescription className="text-sm mt-1">{cert.id}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
