'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
}

export default function ScaleInScroll({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.8,
  className = '',
}: ScaleInScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
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
