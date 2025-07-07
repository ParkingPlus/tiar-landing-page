"use client";

import React from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MenuItem, MenuItems } from "@/types";
import Image from 'next/image';
import Logo from '@/assets/tiar/logo.svg'; // convert it to PNG

const MobileMenuItem = ({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-sm font-semibold text-gray-900 hover:text-brand-600"
      >
        {title}
        <ChevronRight
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform",
            isOpen && "rotate-90 text-brand-500"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 overflow-hidden"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className="block py-2 text-sm text-gray-700 hover:text-brand-600"
              >
                <div className="font-medium">{item.title}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function MobileMenu({
  menuItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  openMobileSection,
  setOpenMobileSection,
}: {
  menuItems: MenuItems;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  openMobileSection: string | null;
  setOpenMobileSection: (section: string | null) => void;
}) {
  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-gray-800" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm bg-white shadow-xl border-none h-screen p-0"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          {/* Logo Section */}
          <div className="flex items-center justify-between py-4 px-6 border-b">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image src={Logo} alt="TIAR" width={124} height={124} />
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-2 px-4 overflow-y-auto">
            {Object.entries(menuItems).map(([sectionKey, sectionItems]) => (
              <MobileMenuItem
                key={sectionKey}
                title={sectionKey.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                items={sectionItems}
                isOpen={openMobileSection === sectionKey}
                onToggle={() =>
                  setOpenMobileSection(openMobileSection === sectionKey ? null : sectionKey)
                }
              />
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="py-4 px-6 border-t bg-white flex flex-col gap-2">
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full border-brand-500 text-brand-600 hover:bg-brand-50 rounded-xl"
              >
                Pricing
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
