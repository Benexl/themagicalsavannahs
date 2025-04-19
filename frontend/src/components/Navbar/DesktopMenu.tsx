"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react"; // Import ChevronDownIcon
import { navLinks, NavItem } from "@/config/navbar";

// Helper function to render dropdown items or nested submenus
const renderDropdownItems = (items: NavItem[]): React.ReactNode => {
  return items.map((item) => {
    // Case 1: Item has children -> Render as a Submenu
    if (item.children && item.children.length > 0) {
      return (
        <DropdownMenuSub key={item.title}>
          <DropdownMenuSubTrigger>
            {/* If the parent itself is clickable, wrap in Link, otherwise just text */}
            {item.href ? (
              <Link href={item.href} className="w-full text-left">
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {renderDropdownItems(item.children)}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }
    // Case 2: Item has NO children (leaf node) -> Render as a standard DropdownMenuItem
    else {
      return (
        <DropdownMenuItem key={item.title} asChild>
          <Link href={item.href || "#"}>{item.title}</Link>
        </DropdownMenuItem>
      );
    }
  });
};

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-4 items-center"> {/* Align items center */}
      {navLinks.map((link) => (
        <DropdownMenu key={link.title}>
          <DropdownMenuTrigger asChild>
            {/* Use a div with text and icon, add underline animation */}
            <div
              className={cn(
                "group relative flex items-center gap-1 cursor-pointer text-base font-medium outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm", // Changed text-sm to text-base
                // Underline animation styles
                "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-hunter-green", // Underline element
                "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ease-out", // Initial state (hidden)
                "hover:after:scale-x-100", // Hover state (visible)
                link.triggerClassName // Reuse trigger class names for text styling (e.g., text color on hover)
              )}
              tabIndex={0} // Make it focusable
            >
              {link.title}
              {/* Add transition and rotation based on group state */}
              <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn("w-56", link.contentClassName)} // Reuse content class names if applicable
            align="start"
          >
            {link.children && renderDropdownItems(link.children)}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};

export default DesktopMenu;

