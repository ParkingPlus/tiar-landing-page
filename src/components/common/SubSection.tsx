"use client"

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames

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

interface SubSectionStep {
  title: string;
  description?: React.ReactNode;
}

interface SubSectionProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  steps?: SubSectionStep[];
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
  steps,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  className,
}: SubSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
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
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
              {title}
            </h2>
            {steps && steps.length > 0 ? (
              <ol className="mt-2 space-y-6">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-600 text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-gray-900">{step.title}</p>
                      {step.description ? (
                        <p className="mt-1 text-base text-gray-600">{step.description}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                {description}
              </div>
            )}
          </div>

          {/* Image Column */}
          <div
            className={cn("flex items-center justify-center", {
              "md:order-first": imagePosition === 'left',
            })}
          >
            {/* Prefer Next Image for optimization; fallback if remote domain not configured */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-full"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
