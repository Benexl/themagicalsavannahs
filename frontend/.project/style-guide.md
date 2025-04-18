# Project Style Guide

This document outlines the styling conventions and guidelines for the The Magical Savannahs frontend project.

## Philosophy

We primarily use **Tailwind CSS** for utility-first styling. Custom CSS is used sparingly for complex components, overrides, or global styles where necessary (e.g., CSS variables, base component styles).

## 1. Colors

Colors are defined as CSS variables in the main stylesheet and accessed via Tailwind utility classes or `var(--color-name)`.

### Primary Palette

*   **Hunter Green:** `var(--hunter-green)` / `#2C5F2D` (Used for primary actions, branding, headings) - Classes: `bg-hunter-green`, `text-hunter-green`
*   **Moonstone:** `var(--moonstone)` / `#69A2B0` (Used for secondary actions, accents, links) - Classes: `bg-moonstone`, `text-moonstone`

### Neutral Palette

*   **White:** `var(--white)` / `#F8F9FA` (Used for backgrounds, text on dark backgrounds) - Class: `bg-custom-white`
*   **Black (Overlay):** `var(--black)` / `#090909` (Used for image overlays, dark text) - Class: `bg-black`
*   **Gray (Tailwind):** Various shades of Tailwind's gray palette (`gray-100`, `gray-200`, `gray-600`, `gray-700`, etc.) are used for borders, text, and backgrounds.

### Accent Palette

*   **Pale Dogwood:** `var(--pale-dogwood)` / `#EDDCD2` (Used for specific sections like "Story of the Month") - Class: `bg-pale-dogwood`

## 2. Typography

*   **Font Family:** Default Tailwind `font-sans` stack.
*   **Base Size:** Tailwind's default base font size (usually 16px).
*   **Weights:** Primarily `font-medium`, `font-bold`.
*   **Sizes:** Utilize Tailwind's text size utilities (`text-sm`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-6xl`).

## 3. Spacing

*   Use Tailwind's spacing scale for margins (`m-*`, `mx-*`, `my-*`, `mt-*`, etc.) and padding (`p-*`, `px-*`, `py-*`, `pt-*`, etc.).
*   Maintain consistency in spacing between sections and elements. Standard section padding is often `py-16 px-4 sm:px-6 lg:px-8`.

## 4. Layout

*   **Container:** Use `max-w-7xl mx-auto` for centering main content sections. Other max-widths (`max-w-lg`, `max-w-2xl`, `max-w-4xl`, `max-w-6xl`) are used as needed.
*   **Grid & Flexbox:** Use Tailwind's grid (`grid`, `grid-cols-*`, `gap-*`) and flexbox (`flex`, `items-*`, `justify-*`) utilities for layout.

## 5. Components

### Buttons

*   **Primary:** `bg-hunter-green text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300` (Example: Book Today)
*   **Primary (Rounded):** `bg-hunter-green hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300` (Example: Start your Journey)
*   **Secondary (Rounded):** `bg-white text-hunter-green hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300` (Example: Surprise Me)
*   **Text Link Style:** `text-moonstone font-medium hover:underline` (Example: Explore ->)

### Cards

*   **Base:** `bg-white rounded-xl shadow-md overflow-hidden`
*   **Hover Effect (Experience Card):** `transition duration-300 experience-card` (Requires custom CSS for `transform` and `box-shadow` on hover).
*   **Padding:** Typically `p-6`.

### Navigation

*   **Desktop:** Fixed top, white background, bottom border. Dropdowns appear on hover. Links have an underline hover effect (`nav-link-desktop` class with custom CSS `::after` pseudo-element).
*   **Mobile:** Hamburger menu toggles a collapsible menu (`#mobile-menu`). Submenus are also collapsible (`mobile-menu-trigger`, `mobile-submenu`).

### Footer

*   Multi-tiered design.
*   Top Tier: Solid `bg-hunter-green`.
*   Middle/Bottom Tier: Background image with dark overlay (`footer-bg` class). Uses grid layout for links.

### Forms

*   **Input:** `w-full py-4 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green` (Example: Hero search)
*   **Input (Standard):** `flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hunter-green` (Example: Newsletter)

### Badges/Tags

*   Example: `bg-moonstone/80 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded` (Destination Carousel)
*   Example: `bg-moonstone text-white px-3 py-1 rounded-full text-sm font-bold` (Story of the Month)

## 6. Conventions

*   **CSS Variables:** Define core colors in `:root`.
*   **Custom Classes:** Use descriptive names (e.g., `hero-section`, `footer-bg`, `experience-card`, `nav-link-desktop`) when utility classes become too complex or for reusable component styles.
*   **Responsiveness:** Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) extensively.
*   **External Libraries:**
    *   Tailwind CSS (CDN)
    *   Flowbite (CDN & JS)
    *   Font Awesome (CDN)

## 7. Images

*   Use descriptive `alt` text for all images.
*   Optimize images for web use.
*   Utilize `object-cover` or `object-contain` as needed for image display within containers.
*   Background images often use `linear-gradient` overlays for text readability.

## 8. Accessibility

*   Use semantic HTML elements (`<nav>`, `<section>`, `<header>`, `<footer>`, `<button>`, `<a>`).
*   Provide `aria-` attributes where necessary (e.g., `aria-controls`, `aria-expanded`, `aria-label`).
*   Ensure sufficient color contrast.
*   Include `sr-only` text for icon-only buttons or elements.
