'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredScrollProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export default function StaggeredScroll({
  children,
  stagger = 0.1,
  delay = 0,
  className = '',
}: StaggeredScrollProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}