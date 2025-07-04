'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlurInScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function BlurInScroll({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: BlurInScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
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