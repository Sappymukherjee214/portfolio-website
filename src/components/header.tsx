
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].href);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-md">
                <span className="font-bold text-xl bg-gradient-to-br from-cyan-400 to-green-400 text-transparent bg-clip-text">
                    SM
                </span>
            </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 p-2 rounded-full glass-card border relative">
          <AnimatePresence>
            {hoveredLink && (
              <motion.div
                layoutId="bubble"
                className="absolute bg-primary/60 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  left: document.getElementById(hoveredLink)?.offsetLeft,
                  width: document.getElementById(hoveredLink)?.offsetWidth,
                  height: document.getElementById(hoveredLink)?.offsetHeight,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </AnimatePresence>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              id={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(activeLink)}
              onClick={() => setActiveLink(link.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-full relative",
                activeLink === link.href ? "text-primary-foreground" : "hover:text-primary"
              )}
            >
              {link.label}
              {activeLink === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary rounded-full -z-20"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background/80 backdrop-blur-lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" className="flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-md">
                            <span className="font-bold text-xl bg-gradient-to-br from-cyan-400 to-green-400 text-transparent bg-clip-text">
                                SM
                            </span>
                          </div>
                          <span className="font-bold text-lg">Saptarshi M.</span>
                      </Link>
                      <SheetTrigger asChild>
                          <Button variant="ghost" size="icon">
                              <X />
                              <span className="sr-only">Close Menu</span>
                          </Button>
                      </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-4 pt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
