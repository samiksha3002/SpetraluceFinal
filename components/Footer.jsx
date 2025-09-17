// app/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

// A small, reusable component for social media icons
const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    // We'll add a top border to separate it from the content above
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      
      {/* 1. MAIN SECTION */}
      {/* Increased padding for a more 'premium' feel */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        
        {/* Main 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">

          {/* 1. LEFT: Brand & Contact (40% width) */}
          <div className="lg:w-2/5 flex-shrink-0">
            {/* Replace the text with the Image component for the logo */}
            <Link href="/" className="inline-block">
              {/* --- IMPORTANT ---
              Add your logo image to /public and update this path.
              Adjust width and height as needed. */}
              <Image 
                src="/Logo.png" 
                alt="Spetraluce Logo"
                width={200} // Adjust width
                height={70} // Adjust height
                className="h-10 w-auto" // Tailwind classes for sizing
              />
            </Link>
            <p className="mt-6 text-base max-w-sm">
             Shaping spaces with light — premium architectural lighting crafted to enhance modern living.
Blending design and function, we create luminous environments that elevate comfort and style.
            </p>
            {/* Larger font for contact info */}
            <div className="mt-8">
              <a href="mailto:info@spetraluce.com" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">
                info@spetraluce.com
              </a>
              {/* === PERFECTED MOBILE NUMBERS === */}
              <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                <a href="tel:+393455882002" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">
                  +39 345 588 2002
                </a>
                <a href="tel:+96566612349" className="text-lg font-medium text-white hover:text-gray-300 transition-colors md:mt-0 mt-2">
                  +965 6661 2349
                </a>
                <a href="tel:+96598518951" className="text-lg font-medium text-white hover:text-gray-300 transition-colors md:mt-0 mt-2">
                  +965 9851 8951
                </a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="mt-8 flex space-x-5">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947C21.727 2.69 19.306.273 14.947.072 13.667.014 13.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* 2. RIGHT: Link Grids (60% width) */}
          <div className="lg:w-3/5">
            {/* A 3-column grid for the links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Products */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Products
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><a href="/products/indoor" className="hover:text-white transition-colors">Indoor</a></li>
                  <li><a href="/products/outdoor" className="hover:text-white transition-colors">Outdoor</a></li>
                  <li><a href="/products/industrial" className="hover:text-white transition-colors">Industrial</a></li>
                  
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Links
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><a href="/studio" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="/careers" className="hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/press" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Support
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                  <li><a href="/warranty" className="hover:text-white transition-colors">Warranty</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. SUB-FOOTER */}
      <div className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Spetraluce. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-500 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};