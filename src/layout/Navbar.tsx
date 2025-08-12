"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { MegaMenu } from './MegaMenu';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { menuItems } from '@/data/menuItem';
import { PopupModal } from 'react-calendly';
import Logo from '@/assets/tiar/logo.svg';
import LogoDark from '@/assets/tiar/logo-dark.svg';
import Image from 'next/image';
import { useAutoNavbarContrast } from '@/hooks/useAutoNavbarContrast';

// Enhanced navigation menu trigger with hover indicator
const EnhancedNavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuTrigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuTrigger
    ref={ref}
    className={cn(
      "group inline-flex h-16 w-max items-center justify-center rounded-md bg-transparent px-8 py-4 text-base font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
      "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 after:-translate-x-1/2",
      "hover:after:w-full data-[state=open]:after:w-full",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuTrigger>
))
EnhancedNavigationMenuTrigger.displayName = "EnhancedNavigationMenuTrigger"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const theme = useAutoNavbarContrast();
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const logoSrc = isScrolled
    ? Logo
    : hasMounted
      ? (theme === "light" ? LogoDark : Logo)
      : Logo;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header suppressHydrationWarning
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-sm border-b border-white/50 text-neutral-900"
          : hasMounted
            ? (theme === "light"
                ? "bg-gradient-to-b from-black/40 to-transparent text-white border-none"
                : "bg-gradient-to-b from-white/40 to-transparent text-neutral-900 border-none")
            : "bg-transparent border-none text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex h-18 items-center justify-between px-6 md:px-8 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 lg:flex-1">
          <Image src={logoSrc} alt="logo" width={120} height={120} suppressHydrationWarning />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:justify-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <EnhancedNavigationMenuTrigger>About Us</EnhancedNavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    title="About Us"
                    items={menuItems.aboutUs}
                    showBrand={true}
                    columns={2}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <EnhancedNavigationMenuTrigger>Use Cases</EnhancedNavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    title="Use Cases"
                    items={menuItems.useCase}
                    showBrand={false}
                    columns={3}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <EnhancedNavigationMenuTrigger>Solutions</EnhancedNavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    title="Solutions"
                    items={menuItems.offerings}
                    showBrand={false}
                    columns={3}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <EnhancedNavigationMenuTrigger>Resources</EnhancedNavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    title="Resources"
                    items={menuItems.resources}
                    showBrand={false}
                    columns={2}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center justify-end space-x-4 lg:flex-1">
          <Link href="/contact">
            <Button 
              variant="outline" 
              className="border-brand-400 bg-brand-400 text-white hover:bg-brand-700 hover:border-brand-700 hover:text-white border-2 text-lg py-2 px-4"
            >
              Contact Sales
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
            <MobileMenu
                menuItems={menuItems}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                openMobileSection={openMobileSection}
                setOpenMobileSection={setOpenMobileSection}
            />
        </div>
      </div>  
      {rootElement && (
        <PopupModal
            url="https://calendly.com/releasethebeast00/30min"
            onModalClose={() => setIsCalendlyOpen(false)}
            open={isCalendlyOpen}
            rootElement={rootElement}
        />
      )}
    </header>
  );
}