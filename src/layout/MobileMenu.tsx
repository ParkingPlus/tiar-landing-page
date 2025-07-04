"use client";

import React from "react";
import Link from "next/link";
import { Mountain, Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenuItem = ({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: Array<{ href: string; title: string; description: string }>;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-900 hover:text-brand-600"
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
                className="block py-2 text-sm text-gray-700 hover:text-brand-600"
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
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
  menuItems: any;
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
        className="w-full max-w-sm sm:max-w-sm bg-white shadow-xl border-none h-screen p-0"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          <div className="flex items-center justify-between py-4 px-6 border-b">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mountain className="h-6 w-6 text-brand-600" />
              <span className="font-bold text-brand-600 text-lg">Tiar</span>
            </Link>
          </div>

          <nav className="flex-1 py-2 px-4 overflow-y-auto">
            <MobileMenuItem
              title="About Us"
              items={menuItems.aboutUs}
              isOpen={openMobileSection === "aboutUs"}
              onToggle={() =>
                setOpenMobileSection(
                  openMobileSection === "aboutUs" ? null : "aboutUs"
                )
              }
            />
            <MobileMenuItem
              title="Use Case"
              items={menuItems.useCase}
              isOpen={openMobileSection === "useCase"}
              onToggle={() =>
                setOpenMobileSection(
                  openMobileSection === "useCase" ? null : "useCase"
                )
              }
            />
            <MobileMenuItem
              title="Offerings"
              items={menuItems.offerings}
              isOpen={openMobileSection === "offerings"}
              onToggle={() =>
                setOpenMobileSection(
                  openMobileSection === "offerings" ? null : "offerings"
                )
              }
            />
            <MobileMenuItem
              title="Resources"
              items={menuItems.resources}
              isOpen={openMobileSection === "resources"}
              onToggle={() =>
                setOpenMobileSection(openMobileSection === "resources" ? null : "resources")
              }
            />
          </nav>

          <div className="py-4 px-6 border-t bg-white flex gap-2">
            <Button
              variant="outline"
              className="w-1/2 border-brand-500 text-brand-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
            <Button
              className="w-1/2 bg-brand-500 hover:bg-brand-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Live Demo
            </Button>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
