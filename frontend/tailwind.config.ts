\
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors for easier use in Tailwind classes if needed,
        // although using CSS variables directly (e.g., bg-[--hunter-green]) is also fine.
        'hunter-green': 'var(--hunter-green)',
        'moonstone': 'var(--moonstone)',
        'custom-white': 'var(--white)',
        'black-overlay': 'var(--black)',
        'pale-dogwood': 'var(--pale-dogwood)',
        // Include shadcn/ui colors if you are using its components
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          // foreground: 'hsl(var(--destructive-foreground))', // Assuming destructive foreground exists
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'], // Assuming you set up Geist Sans in layout.tsx
        mono: ['var(--font-geist-mono)'], // Assuming you set up Geist Mono in layout.tsx
      },
      // Add other theme extensions if needed
    },
  },
  plugins: [
    require('tw-animate-css'), // Ensure tw-animate-css plugin is included if used
    // Add other plugins like @tailwindcss/typography or @tailwindcss/forms if needed
  ],
}
export default config
