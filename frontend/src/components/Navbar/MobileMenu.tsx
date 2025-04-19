"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, NavItem } from "@/config/navbar";

// Helper component for mobile links to ensure Sheet closes on navigation
const MobileLink = ({ href, children, onClick, className, ...props }: { href: string; children: React.ReactNode; onClick: () => void; className?: string }) => (
  <SheetClose asChild>
    <Link
      href={href}
      className={`block px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-hunter-green/80 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  </SheetClose>
);

// Updated helper function to handle nested accordions
const renderMobileNavItems = (items: NavItem[], closeSheet: () => void, level = 0): React.ReactNode => {
  return items.map((item) => {
    const hasChildren = item.children && item.children.length > 0;
    const hasHref = !!item.href;

    // Case 1: Item has children (render as nested accordion)
    if (hasChildren) {
      return (
        <AccordionItem value={item.title} key={item.title} className="border-b-0">
          <AccordionTrigger className={`py-2 text-sm font-medium text-gray-700 hover:text-hunter-green hover:no-underline ${level > 0 ? 'pl-4' : ''}`}>
            {/* If the parent item itself has a link, render it */}
            {hasHref ? (
              <MobileLink href={item.href!} onClick={closeSheet} className="flex-1 text-left p-0 hover:bg-transparent hover:text-hunter-green">
                {item.title}
              </MobileLink>
            ) : (
              <span className="flex-1 text-left">{item.title}</span>
            )}
          </AccordionTrigger>
          <AccordionContent className="pl-4 space-y-1 pb-1">
            {/* Recursively render children, increasing the level */}
            {renderMobileNavItems(item.children!, closeSheet, level + 1)}
          </AccordionContent>
        </AccordionItem>
      );
    }
    // Case 2: Item has no children but has a link (render as simple link)
    else if (hasHref) {
      return (
        <MobileLink key={item.title} href={item.href!} onClick={closeSheet} className={`${level > 0 ? 'pl-4' : ''}`}>
          {item.title}
        </MobileLink>
      );
    }
    // Case 3: Item has no children and no link (shouldn't typically happen in nav config, but render nothing)
    return null;
  });
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 hover:text-hunter-green"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[350px] p-0 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <Logo />
          <SheetClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close menu" onClick={closeSheet}>
              <X className="h-6 w-6" />
            </Button>
          </SheetClose>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Use a single top-level Accordion */}
          <Accordion type="multiple" className="w-full">
            {/* Map through the main navLinks */}
            {navLinks.map((link) => (
              // Each top-level item with children becomes an AccordionItem
              link.children && link.children.length > 0 && (
                <AccordionItem value={link.title} key={link.title}>
                  <AccordionTrigger className="text-base font-medium text-gray-700 hover:text-hunter-green hover:no-underline">
                    {link.title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-0 space-y-1 pb-1"> {/* Remove pl-4 here */}
                    {/* Use Accordion for nested items if they exist */}
                    <Accordion type="multiple" className="w-full">
                      {renderMobileNavItems(link.children, closeSheet)}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              )
            ))}
          </Accordion>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t mt-auto">
          <div className="flex flex-col space-y-3">
            <MobileLink href="/auth" onClick={closeSheet} className="text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-hunter-green">
              Login / Sign Up
            </MobileLink>
            <Button asChild className="w-full bg-hunter-green text-white hover:bg-green-800" onClick={closeSheet}>
              <Link href="/booking">Book Today</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
