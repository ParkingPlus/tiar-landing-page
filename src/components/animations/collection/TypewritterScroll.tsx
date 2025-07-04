'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TypewriterScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TypewriterScroll({
  children,
  delay = 0,
  duration = 1,
  className = '',
}: TypewriterScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 'auto' }}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}