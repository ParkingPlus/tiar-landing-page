"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming shadcn utils path

/**
 * @typedef {object} HeroProps
 * @property {(string | boolean)} eyebrow - The small, capitalized text above the main header.
 * @property {React.ReactNode} header - The main heading. Can be a string or JSX for complex formatting like line breaks.
 * @property {string} caption - The descriptive text below the header.
 * @property {string[]} images - An array of image URLs for the background. If more than one, it becomes a carousel.
 * @property {string} [className] - Optional additional class names for the section container.
 * @property {React.ReactNode} [actions] - Optional actions to be rendered below the caption.
 */
interface HeroProps {
  eyebrow?: React.ReactNode;
  header: React.ReactNode;
  caption: React.ReactNode;
  images: string[];
  className?: string;
  actions?: React.ReactNode;
}

/**
 * A full-width Hero component with a background image carousel, animated text,
 * and call-to-action buttons.
 *
 * @param {HeroProps} props - The props for the component.
 * @returns {JSX.Element}
 */
export function Hero({ eyebrow, header, caption, images, className, actions }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle the automatic sliding of the carousel
  useEffect(() => {
    // Only run the carousel if there is more than one image
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]);

  const hasImages = images && images.length > 0;
  const currentImageUrl = hasImages ? images[currentIndex] : "";

  return (
    <section
      id="hero-root"
      data-current-bg={currentImageUrl}
      className={cn(
        "relative w-full h-[80vh] md:h-screen text-white overflow-hidden bg-gray-500",
        className
      )}
    >
      {/* Background Image Carousel */}
      {hasImages && (
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            data-hero-background
            className="absolute inset-0 w-full h-full bg-gray-900 bg-center"
            style={{ 
              backgroundImage: `url(${currentImageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              // blur the image
              filter: 'blur(0.5px)'
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      )}

      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b to-white/50" /> 

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-10 md:px-12 flex flex-col justify-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <span className="text-base font-semibold uppercase tracking-wider text-gray-900">
            {eyebrow}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight text-gray-900">
            {header}
          </h1>
          <p className="text-lg md:text-xl text-gray-950 mb-8 max-w-prose">
            {caption}
          </p>
          {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
        </motion.div>
      </div>
    </section>
  );
}
