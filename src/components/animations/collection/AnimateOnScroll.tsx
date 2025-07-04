'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  yOffset = 30,
  duration = 0.6,
  className = '',
}: AnimateOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom easing for smoother feel
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}