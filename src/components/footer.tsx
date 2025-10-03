
import { Github, Linkedin, Download, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiDiscord, SiCredly } from '@icons-pack/react-simple-icons';

export function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2025 Saptarshi Mukherjee. All rights reserved.
        </p>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Sappymukherjee214" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/saptarshi-mukherjee-096191263" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="Discord">
              <SiDiscord className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="Credly">
              <SiCredly className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/resume.pdf" download="Saptarshi-Mukherjee-Resume.pdf" target="_blank" aria-label="Download Resume">
              <Download className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
