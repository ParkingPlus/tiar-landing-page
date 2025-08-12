'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'slideLeft' 
  | 'slideRight' 
  | 'scale' 
  | 'blur' 

interface AnimationWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimationWrapper({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
}: AnimationWrapperProps) {
  const animations: Record<AnimationType, Variants> = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeDown: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    blur: {
      initial: { opacity: 0, filter: 'blur(8px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={animations[animation]}
      initial="initial"
      whileInView="animate"
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ 
        transformOrigin: 'center center',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
}