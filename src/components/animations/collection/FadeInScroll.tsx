'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInScroll({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: FadeInScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}