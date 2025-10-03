
import { Section, SectionHeading } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../motion-div';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Senior Software Engineer',
    company: 'Tech Innovators',
    quote: "Saptarshi is a highly motivated and talented developer. His contributions to our project were invaluable, and he consistently delivered high-quality code. His passion for AI and full-stack development is truly inspiring.",
    imageId: 'testimonial-sarah'
  },
  {
    name: 'Michael Chen',
    title: 'Project Manager',
    company: 'CodeCrafters',
    quote: "Working with Saptarshi was a pleasure. He is a great communicator and a proactive team player. He's not afraid to take on challenging tasks and always finds creative solutions to complex problems.",
    imageId: 'testimonial-michael'
  },
  {
    name: 'Emily Rodriguez',
    title: 'GSoC Mentor',
    company: 'Open Source Community',
    quote: "As a GSoC contributor, Saptarshi demonstrated exceptional technical skills and a strong commitment to the project. He quickly became a valuable member of our community, and I have no doubt he has a bright future ahead.",
    imageId: 'testimonial-emily'
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


export function Testimonials() {
  return (
    <Section id="testimonials">
      <MotionDiv>
        <SectionHeading>Testimonials</SectionHeading>
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => {
            const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
            return (
              <MotionDiv variants={itemVariants} key={testimonial.name}>
                <Card className="p-6 flex flex-col h-full">
                  <CardContent className="p-0 flex-grow">
                    <div className="flex text-yellow-400 gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                  </CardContent>
                  <div className="flex items-center gap-4 mt-6">
                    {testimonialImage && (
                      <Avatar>
                        <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
