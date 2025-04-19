# Homepage Component Plan

This document outlines a component‑based breakdown for the homepage using Next.js (app router), React, TypeScript, Tailwind CSS, Radix UI primitives, CVA, and clsx.

## Folder Structure

.project/home/
  ├── navbar/
  ├── hero-section/
  ├── emotion-discovery/
  ├── featured-experiences/
  ├── top-destinations/
  ├── stories/
  ├── group-travel/
  ├── business-section/
  ├── newsletter/
  ├── trust-signals/
  └── footer/

## Components and Responsibilities

- **navbar**: site branding, desktop & mobile menus (flowbite or Radix dropdowns)
- **hero-section**: background image, headline, CTAs, mini search
- **emotion-discovery**: emotion‑based trip selectors
- **featured-experiences**: grid of experience cards with hover interactions
- **top-destinations**: carousel using Flowbite/Radix
- **stories**: story of the month + list of recent stories
- **group-travel**: community modules & reviews section
- **business-section**: corporate offerings list
- **newsletter**: email signup form
- **trust-signals**: payment icons & certifications grid
- **footer**: footer CTA, main links, legal & social

Each folder should contain:
- An `index.tsx` entry component
- Sub‑folders or files for any nested UI pieces
- A styles or variants file using Tailwind CSS & CVA conventions
- Props types definition (`.types.ts`)
