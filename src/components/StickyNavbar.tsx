// src/components/StickyNavbar.tsx
'use client';

import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

type StickyNavbarProps = {
  activeSection: string;
};

export function StickyNavbar({ activeSection }: StickyNavbarProps) {
  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div className="bg-slate-100 p-2 flex items-center gap-2 rounded-full shadow-sm">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium text-slate-700 rounded-full"
          >
            {/* Render the pill if this link's section is active */}
            {activeSection === link.name && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                layoutId="active-section-pill" // Consistent ID for animation
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ zIndex: 0 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}