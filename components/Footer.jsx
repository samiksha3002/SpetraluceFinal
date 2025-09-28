"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

// --- Helper Components ---

// 1. Magnetic Button for "Back to Top"
const MagneticButton = ({ children, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
      aria-label="Back to top"
    >
      {children}
    </motion.button>
  );
};

// 2. Reusable Social Icon
const SocialIcon = ({ href, children }) => (
  <motion.a
    href={href} target="_blank" rel="noopener noreferrer"
    className="text-gray-500 hover:text-white" aria-label="Social Media Link"
    whileHover={{ y: -3, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.a>
);

// 3. Reusable Animated Link Column
const AnimatedLinkColumn = ({ title, links, variants }) => (
  <motion.div variants={variants}>
    <h3 className="font-serif text-base font-semibold text-white tracking-wider">{title}</h3>
    <ul className="mt-4 space-y-3 text-sm">
      {links.map(link => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-white transition-colors duration-300 relative group">
            <span>{link.label}</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-spetra-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- Redesigned Footer Component ---
export const Footer = () => {
  const canvasRef = useRef(null);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // --- 1. Animated Constellation Background Effect ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let particles = [];
    const particleCount = Math.floor(canvas.width / 40);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5,
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 152, 0, 0.5)'; // Orange dots
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 152, 0, ${1 - dist / 100})`; // Fading orange lines
                    ctx.stroke();
                }
            }
        }
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // --- 2. Interactive Newsletter Form Logic ---
  const handleNewsletterSubmit = (e) => {
      e.preventDefault();
      setFormState({ status: 'submitting', message: '' });
      setTimeout(() => {
          setFormState({ status: 'success', message: 'Thank you for subscribing!' });
      }, 1500);
  };

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const linkColumns = [
      { title: 'Products', links: [{ href: "/products/indoor", label: "Indoor" }, { href: "/products/outdoor", label: "Outdoor" }, { href: "/products/industrial", label: "Industrial" }] },
      { title: 'Company', links: [{ href: "/studio", label: "About Us" }, { href: "/services", label: "Our Services" }, { href: "/contact", label: "Contact Us" }] },
      { title: 'Get in Touch', links: [{ href: "mailto:info@spetraluce.com", label: "Email Us" }, { href: "/faq", label: "FAQ" }, { href: "/warranty", label: "Warranty" }] }
  ];

  return (
    <motion.footer 
      className="bg-neutral-950 text-gray-400 font-sans border-t border-gray-800/50 relative overflow-hidden"
      variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-40"></canvas>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-24 lg:py-32">

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <a href="/" className="inline-block mb-6"><img src="/Logo.png" alt="Spetraluce Logo" width={180} height={40} className="w-auto h-10" /></a>
            <p className="text-base max-w-sm text-gray-400 leading-relaxed mt-4">Experience the art of illumination. Sign up for our newsletter for exclusive insights and previews.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-sm h-16">
              <AnimatePresence mode="wait">
                {formState.status !== 'success' ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="group flex items-center border-b border-gray-700 focus-within:border-spetra-orange-500 transition-colors">
                      <input type="email" placeholder="Enter your email" required className="w-full bg-transparent text-white placeholder-gray-500 py-3 focus:outline-none" />
                      <button type="submit" aria-label="Subscribe" className="p-2 -mr-2" disabled={formState.status === 'submitting'}>
                        <motion.svg whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 group-focus-within:text-spetra-orange-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </motion.svg>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-spetra-orange-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>{formState.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <div className="hidden lg:block lg:col-span-1"></div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkColumns.map(col => <AnimatedLinkColumn key={col.title} {...col} variants={itemVariants} />)}
          </div>
        </div>

        <div className="border-t border-gray-800/50 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Spetraluce. All Rights Reserved.</p>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <div className="flex space-x-6">
              <SocialIcon href="https://instagram.com"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."/></svg></SocialIcon>
              <SocialIcon href="https://twitter.com"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 ..."/></svg></SocialIcon>
            </div>
            {/* --- 3. Magnetic "Back to Top" Button --- */}
            <MagneticButton onClick={scrollToTop}>
                Back to Top
                <span className="group-hover:text-spetra-orange-500 transition-colors">↑</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
