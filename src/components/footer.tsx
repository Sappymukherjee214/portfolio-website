
import { Github, Linkedin, Download, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiDiscord, SiCredly, SiTelegram, SiX, SiGmail } from '@icons-pack/react-simple-icons';

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
            <Link href="https://x.com/MukherjeeXii" target="_blank" aria-label="X">
              <SiX className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/share/1BJKG9mvac/" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/saptarshi.mukherjee.31392?igsh=a3JjbW5kbGhmdHcw" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://discord.com/users/1119889309424701480" target="_blank" aria-label="Discord">
              <SiDiscord className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://t.me/sappymukherjee214" target="_blank" aria-label="Telegram">
              <SiTelegram className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://mail.google.com/" target="_blank" aria-label="Gmail">
              <SiGmail className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.credly.com/users/saptarshi-mukherjee.62a3f023" target="_blank" aria-label="Credly">
              <SiCredly className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://youtube.com/@saptarshimukherjeescience_7351?si=kJjs87t18MgfQ0NI" target="_blank" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://example.com/your-resume.pdf" download="Saptarshi-Mukherjee-Resume.pdf" target="_blank" aria-label="Download Resume">
              <Download className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
