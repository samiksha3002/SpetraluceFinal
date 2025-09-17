// app/layout.jsx
import './globals.css';
// We add 'Playfair_Display' for the elegant headings
import { Inter, Playfair_Display } from 'next/font/google'; 
import { Providers } from '../providers';

// Setup the fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' // We assign it a variable name
});
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair' // We assign it a variable name
});

export const metadata = {
  title: 'Spetraluce - Premium Modern Lighting',
  description: 'Elegant and aesthetic lighting for indoor, outdoor, and industrial spaces.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body 
        // We add the font variables to the body
        className={`${inter.variable} ${playfair.variable} font-sans
          bg-white text-gray-900 
          dark:bg-gray-900 dark:text-gray-100 
          transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}