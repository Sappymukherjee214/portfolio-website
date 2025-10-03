
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Landing() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'saptarshi-profile');

  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Hi, I’m Saptarshi Mukherjee – Software Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building scalable, AI-powered solutions.
          </p>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-card shadow-2xl aspect-square"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
