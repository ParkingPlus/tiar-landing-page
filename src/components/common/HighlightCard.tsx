"use client"

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames

/**
 * @typedef {object} HighlightCardProps
 * @property {React.ReactNode} icon - The icon to display. Should be an SVG or a component from a library like lucide-react.
 * @property {string} [header] - The optional main heading for the card.
 * @property {React.ReactNode} text - The descriptive text content. Can be a string or JSX.
 * @property {string} [href] - If provided, the card becomes a clickable link pointing to this URL.
 * @property {string} [textColor='text-gray-300'] - The CSS class for the text color. Defaults to a light gray.
 * @property {string} [iconColor='text-yellow-400'] - The CSS class for the icon color. Defaults to a bright yellow.
 * @property {string} [className] - Optional additional class names for the card container.
 */
interface HighlightCardProps {
  icon: React.ReactNode;
  header?: string;
  text: React.ReactNode;
  href?: string;
  textColor?: string;
  iconColor?: string;
  className?: string;
}

/**
 * A reusable card component to display features, benefits, or other snippets of information.
 * It can optionally function as a link.
 *
 * @param {FeatureCardProps} props - The props for the component.
 * @returns {JSX.Element}
 */
export function HighlightCard({
  icon,
  header,
  text,
  href,
  textColor = 'text-gray-300',
  iconColor = 'text-yellow-400',
  className,
}: HighlightCardProps) {
  
  // The core content of the card
  const CardContent = (
    <div className="text-center">
      <div className={cn("mb-4 h-12 w-12 mx-auto", iconColor)}>
        {icon}
      </div>
      {header && (
        <h3 className="text-2xl font-bold text-white mb-2">{header}</h3>
      )}
      <p className={cn("leading-relaxed", textColor)}>{text}</p>
    </div>
  );

  // If href is provided, wrap the content in a standard anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "transition-all duration-300 hover:-translate-y-1 flex justify-center",
          className
        )}
      >
        {CardContent}
      </a>
    );
  }

  // Otherwise, render it as a standard div
  return (
    <div
      className={cn(
        "p-8 rounded-lg flex justify-center",
        className
      )}
    >
      {CardContent}
    </div>
  );
}
