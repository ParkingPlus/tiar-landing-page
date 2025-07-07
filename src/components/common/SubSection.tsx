"use client"

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames
import Image from 'next/image';
/**
 * @typedef {object} SubSectionProps
 * @property {string} eyebrow - The small, capitalized text above the title (e.g., "REPORTS & ANALYTICS").
 * @property {string} title - The main heading for the section.
 * @property {React.ReactNode} description - The main content/description. Can be a string or JSX for more complex formatting.
 * @property {string} imageUrl - The source URL for the image.
 * @property {string} imageAlt - The alt text for the image, for accessibility.
 * @property {'left' | 'right'} [imagePosition='right'] - Determines if the image appears on the left or right. Defaults to 'right'.
 * @property {string} [className] - Optional additional class names for the container.
 */

interface SubSectionProps {
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

/**
 * A reusable two-column component for showcasing features, with text on one side and an image on the other.
 * It is responsive and stacks on smaller screens.
 *
 * @param {SubSectionProps} props - The props for the component.
 * @returns {JSX.Element}
 */
export function SubSection({
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  className,
}: SubSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-transparent", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content Column */}
          <div
            className={cn("flex flex-col justify-center", {
              "md:order-last": imagePosition === 'left',
            })}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              {title}
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              {description}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={cn("flex items-center justify-center", {
              "md:order-first": imagePosition === 'left',
            })}
          >
            {/* Replaced Next.js Image with standard img tag to resolve compile error */}
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-full"
              style={{ maxWidth: '600px' }}
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
