'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInScrollProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
}

export default function SlideInScroll({
  children,
  direction = 'left',
  delay = 0,
  distance = 50,
  duration = 0.7,
  className = '',
}: SlideInScrollProps) {
  const xOffset = direction === 'left' ? -distance : distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}