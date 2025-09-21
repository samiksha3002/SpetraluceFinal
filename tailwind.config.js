// tailwind.config.js
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
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        'spetra-orange': {
          DEFAULT: '#FF5733', // <-- REPLACE with your main orange
          300: '#FF8A65',
          400: '#FF7043',
          500: '#FF5733',
          600: '#F4511E',
        },
        'spetra-blue': {
          DEFAULT: '#2196F3', // <-- REPLACE with your main blue
          500: '#2196F3',
          800: '#1565C0',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      }
    },
  },
  plugins: [],
};