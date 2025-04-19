/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '@custom-variant(dark)'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hunter-green': 'var(--hunter-green)',
        'black-overlay': 'var(--black-overlay)',
        'moonstone': 'var(--moonstone)',
        'custom-white': 'var(--custom-white)',
        'pale-dogwood': 'var(--pale-dogwood)',
      },
    },
  },
  plugins: [],
}