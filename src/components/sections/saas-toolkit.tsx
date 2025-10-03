
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { MotionDiv } from '../motion-div';
import {
  SiAmazons3,
  SiStripe,
  SiAuth0,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGoogleanalytics,
} from "@icons-pack/react-simple-icons";
import { Mail } from 'lucide-react';

const toolkit = [
  { name: 'Amazon S3', icon: <SiAmazons3 size={32} />, description: 'Scalable object storage' },
  { name: 'Stripe', icon: <SiStripe size={32} />, description: 'Payment processing' },
  { name: 'Auth0', icon: <SiAuth0 size={32} />, description: 'Identity & Access Management' },
  { name: 'Docker', icon: <SiDocker size={32} />, description: 'Containerization' },
  { name: 'Kubernetes', icon: <SiKubernetes size={32} />, description: 'Container Orchestration' },
  { name: 'Jenkins', icon: <SiJenkins size={32} />, description: 'CI/CD Automation' },
  { name: 'Google Analytics', icon: <SiGoogleanalytics size={32} />, description: 'Web analytics service' },
  { name: 'SendGrid', icon: <Mail size={32} />, description: 'Email Delivery Service' },
];

export function SaasToolkit() {
  return (
    <Section id="toolkit">
      <MotionDiv>
        <SectionHeading>SaaS Toolkit</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {toolkit.map((tool) => (
            <Card key={tool.name} className="p-4 transition-transform transform hover:-translate-y-2 hover:shadow-primary/20 flex flex-col items-center text-center">
              <div className="text-primary mb-3">
                {tool.icon}
              </div>
              <p className="font-semibold text-base mb-1">{tool.name}</p>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Card>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
