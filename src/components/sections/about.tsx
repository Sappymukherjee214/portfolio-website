
import { Section, SectionHeading } from '@/components/ui/section';
import { MotionDiv } from '@/components/motion-div';

export function About() {
  return (
    <Section id="about">
       <MotionDiv>
        <SectionHeading>About Me</SectionHeading>
        <div className="max-w-3xl mx-auto text-center text-lg text-muted-foreground space-y-4">
            <p>
            I&apos;m a third-year engineering undergraduate with a deep passion for full-stack development and Artificial Intelligence. My journey in technology is driven by a desire to build impactful, real-world projects that solve complex problems.
            </p>
            <p>
            My core interests lie in web development, creating robust APIs, and exploring the frontiers of Generative AI and computer vision. I am constantly learning and experimenting with new technologies to create innovative and user-centric solutions.
            </p>
        </div>
       </MotionDiv>
    </Section>
  );
}
