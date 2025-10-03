
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Landing() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'saptarshi-profile');
  
  return (
    <section id="home" className="relative w-full h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <Badge variant="secondary" className="mb-6 bg-green-500/20 text-green-300 border-green-500/30 w-fit mx-auto md:mx-0">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work!
          </Badge>

          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Hi, I'm Saptarshi Mukherjee, an aspiring <span className="text-green-400">Software</span> developer building user-friendly web applications.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto md:mx-0">
            A passionate software developer based in the India, skilled in the MERN stack and other applications like Python, dedicated to writing clean, efficient code while continuously expanding my technical knowledge.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resume.pdf" download="Saptarshi-Mukherjee-Resume.pdf" target='_blank'>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
            {profileImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-card shadow-2xl aspect-square"
                data-ai-hint={profileImage.imageHint}
              />
            )}
        </div>
      </div>
    </section>
  );
}
