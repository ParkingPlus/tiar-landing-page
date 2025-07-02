"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  readonly href: string;
  readonly children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {

  const desktopBaseClasses = "px-3 py-2 text-sm font-medium transition-colors rounded-md";
  const desktopActive = "bg-brand-50 text-gray-900 dark:bg-brand-950 dark:text-white";

  const combinedClasses = `${desktopBaseClasses} ${desktopActive}`;

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}