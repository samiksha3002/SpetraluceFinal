// A reusable, styled social media icon link
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white transition-colors duration-300"
    aria-label="Social Media Link"
  >
    {children}
  </a>
);

// --- Redesigned Footer Component ---
export const Footer = () => {
  return (
    <footer 
      className="bg-black text-gray-400 font-sans border-t border-gray-800/50"
      // Adding a subtle radial gradient for a more premium background texture
      style={{
        backgroundImage: 'radial-gradient(circle at top, rgba(255, 255, 255, 0.02), transparent 40%)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section 1: Main Content Grid - Increased vertical padding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-24 lg:py-32">

          {/* Column 1: Brand & Newsletter (Spans 5 columns on large screens) */}
          <div className="lg:col-span-5">
            <a href="/" className="inline-block mb-6">
              <img
                src="/Logo.png"
                alt="Spetraluce Logo"
                width={180}
                height={40}
                className="w-auto h-10"
              />
            </a>
            <p className="text-base max-w-sm text-gray-400 leading-relaxed mt-4">
              Experience the art of illumination. Sign up for our newsletter to receive exclusive insights and new collection previews.
            </p>
            {/* Newsletter Form */}
            <form className="mt-8 max-w-sm">
              <div className="flex items-center border-b border-gray-700 focus-within:border-white transition-colors duration-300">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-transparent text-white placeholder-gray-500 py-3 focus:outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="p-2 -mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Spacer Column for visual separation on large screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Links Grid (Spans 6 columns) */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-base font-semibold text-white tracking-wider">
                Products
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/products/indoor" className="hover:text-white transition-colors">Indoor</a></li>
                <li><a href="/products/outdoor" className="hover:text-white transition-colors">Outdoor</a></li>
                <li><a href="/products/industrial" className="hover:text-white transition-colors">Industrial</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-white tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/studio" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-white tracking-wider">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="mailto:info@spetraluce.com" className="hover:text-white transition-colors">Email Us</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/warranty" className="hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Bottom Bar (Copyright & Socials) */}
        <div className="border-t border-gray-800/50 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Spetraluce. All Rights Reserved.
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            <SocialIcon href="https://instagram.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667 4.77 4.919 4.919 1.266-.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.689-.073 4.948s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.28.059 1.689.073 4.948.073s3.668-.014 4.948-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.948c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialIcon>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

