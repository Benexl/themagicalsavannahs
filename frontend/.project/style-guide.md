# Style Guide

This guide outlines design tokens and conventions for implementing consistent UI components using Next.js, React, TypeScript, Tailwind CSS, Radix UI, CVA, and clsx.

## Design Tokens

### Colors
- **hunter-green** (`#2C5F2D`)
- **moonstone** (`#69A2B0`)
- **custom-white** (`#F8F9FA`)
- **black** (`#090909`)
- **pale-dogwood** (`#EDDCD2`)

### Typography
- **Font family**: `font-sans` (default system sans-serif)
- **Heading scale**: 
  - H1: `text-6xl` (96px)  
  - H2: `text-4xl` (60px)  
  - H3: `text-2xl` (30px)  
  - H4: `text-xl` (24px)
- **Body text**: `text-base` (16px), line-height `leading-relaxed`
- **Captions & labels**: `text-sm` (14px)

### Spacing
- Use Tailwind’s spacing scale (unit = 4px)
- Common patterns:
  - Small gap: `gap-2` (8px)
  - Default padding: `p-4` (16px)
  - Section margins: `my-16` (64px)

## Component Variants
- Use CVA (class-variance-authority) to define reusable variant APIs
- Prefix component folders with kebab-case
- Expose a single `index.tsx` entry and `.types.ts` for props
- Variant files: `[component].variants.ts` for CVA definitions

## Layout & Structure
- Organize pages under `app/` using Next.js app router conventions
- Components under `src/components` grouped by domain
- Styles are applied via Tailwind utility classes and CVA

## Iconography & Illustrations
- Use `lucide-react` for UI icons
- Use Font Awesome for decorative or brand icons
- Maintain consistent icon size with `w-5 h-5` or as defined in variants

## Accessibility
- Always include `alt` text for images
- Ensure sufficient color contrast (WCAG AA)
- Use semantic HTML and `aria-` attributes for interactive elements

## Tailwind Config Extensions
- Extend `theme.colors` with custom tokens from design variables
- Configure `fontFamily.sans` as needed
- Enable JIT mode and purge unused styles in production

## Naming Conventions
- Files and folders: kebab-case
- Components: PascalCase
- Props types: `ComponentNameProps`
- Variant names: semantic names (e.g., `primary`, `secondary`)
