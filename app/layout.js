import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google'; 
import { Providers } from '../providers';
import { ClientLayout } from '../components/ClientLayout'; // <-- IMPORT THE NEW WRAPPER

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'Spetraluce - Premium Modern Lighting',
  description: 'Elegant and aesthetic lighting for indoor, outdoor, and industrial spaces.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans
          bg-white text-gray-900 
          dark:bg-gray-900 dark:text-gray-100 
          transition-colors duration-300`}
      >
        <Providers>
          {/* ClientLayout now handles showing the Header, Footer, and Preloader */}
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}