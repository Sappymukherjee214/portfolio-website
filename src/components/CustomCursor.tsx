// src/components/CustomCursor.tsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-50"
      style={{ mixBlendMode: 'difference' }} // This creates the inversion effect
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
  );
}
