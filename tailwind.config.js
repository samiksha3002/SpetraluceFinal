/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. FONT FAMILY (Unchanged)
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },

      // 2. REFINED COLOR PALETTE
      colors: {
        'spetra-orange': {
          '50': '#fff8e1',
          '100': '#ffecb3',
          '200': '#ffd54f',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800', // Main Orange (Replace with your hex code)
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100',
        },
        // A custom, elegant neutral palette for our theme
        neutral: {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626', // Good for dark cards
          '900': '#171717', // Good for dark backgrounds
          '950': '#0a0a0a', // Almost pure black
        },
      },

      // 3. MORE ANIMATIONS
      keyframes: {
        // Old animations
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // New slide-in animations
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        // Old animations
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        // New animation utilities
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
        slideInFromRight: 'slideInFromRight 1s ease-out forwards',
      }
    },
  },
  plugins: [],
};