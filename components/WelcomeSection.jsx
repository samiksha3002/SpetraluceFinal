import React, { useEffect, useRef } from 'react';

// --- Helper Components for clarity ---

const CheckmarkIcon = () => (
    <svg 
      className="w-6 h-6 text-amber-400 flex-shrink-0 group-hover:text-amber-300 transition-colors duration-300" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const Feature = ({ text, delay }) => (
    <div 
      className="flex items-center gap-4 group animate-on-scroll"
      style={{ transitionDelay: delay }}
    >
      <CheckmarkIcon />
      <span className="text-sm font-medium uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </div>
);

// --- Main Welcome Section Component ---

export const WelcomeSection = () => {
    const features = [
        "Modern Lighting",
        "Innovation & Excellence",
        "Premium Materials",
        "Residential & Commercial"
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
        
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    // Custom styles for animations and premium fonts
    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap');
        
        .font-playfair {
            font-family: 'Playfair Display', serif;
        }
        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .image-animate {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .image-animate.is-visible {
            opacity: 1;
            transform: scale(1);
        }
    `;

    return (
        <>
            <style>{customStyles}</style>
            <section ref={sectionRef} className="bg-black text-white font-inter py-24 sm:py-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-0 items-center">
                        
                        {/* 1. Image Column with Enhanced Animation */}
                        <div className="relative w-full min-h-[450px] sm:min-h-[550px]">
                            {/* Larger background image */}
                            <div className="absolute top-0 left-0 w-4/5 sm:w-3/4 aspect-[4/3] image-animate animate-on-scroll">
                                <img
                                    src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop"
                                    alt="Elegant dining room with Spetraluce lighting"
                                    className="object-cover w-full h-full rounded-xl shadow-2xl shadow-amber-500/10 transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Smaller foreground image */}
                            <div 
                              className="absolute bottom-0 right-0 w-1/2 sm:w-3/5 aspect-square image-animate animate-on-scroll"
                              style={{ transitionDelay: '200ms' }}
                            >
                                <img
                                    src="/trial4.png"
                                    alt="Close-up of a modern Spetraluce light fixture"
                                    className="object-cover w-full h-full rounded-xl shadow-2xl shadow-black/60 border-4 border-gray-900 transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* 2. Text Column with Staggered Animation */}
                        <div>
                            <h2 
                              className="font-playfair text-4xl md:text-5xl font-bold text-gray-100 animate-on-scroll"
                              style={{ transitionDelay: '300ms' }}
                            >
                                Welcome to Spetraluce
                            </h2>
                            <p 
                              className="mt-6 text-lg text-gray-400 leading-relaxed animate-on-scroll"
                              style={{ transitionDelay: '400ms' }}
                            >
                                At Spetraluce, we merge Italian craftsmanship with modern technology to create premium architectural lighting. Our mission is to produce innovative solutions that transform residential, commercial, and hospitality spaces into works of art.
                            </p>
                            
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {features.map((feature, index) => (
                                    <Feature key={feature} text={feature} delay={`${500 + index * 100}ms`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
