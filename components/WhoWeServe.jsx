"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// --- 1. YOUR DATA (with updated image paths for a premium look) ---
const tabsData = {
  designer: {
    id: 'designer',
    label: "Light Designers",
    title: "For the Light Designer",
    description: "Are you designing a new building and have you identified an interesting product on our catalogue or using the online configurator?",
    features: [
      "A team of light artists for new technologies.",
      "Unique and custom-made LED lighting solutions.",
      "Develop and visualize your project in a short time.",
    ],
    image: "/work1.png"
  },
  engineer: {
    id: 'engineer',
    label: "Light Engineers",
    title: "For the Light Engineer",
    description: "Do you have to design a new installation and have you got one selected specific product from our online catalogue?",
    features: [
      "Masters of light with a strong propensity for new tech.",
      "Made in Italy (LED) projects to guarantee flexible design.",
      "Visualize your lighting project very quickly.",
    ],
    image: "/work2.png"
  },
  architect: {
    id: 'architect',
    label: "Architects",
    title: "For the Architect",
    description: "Spetraluce has a team of light artists with a strong propensity for new technologies. We create unique and custom-made LED lighting solutions.",
    features: [
      "Develop custom projects together with our team.",
      "Flexible design and production.",
      "Made in Italy for lighting professionals.",
    ],
    image: "/AboutH.png" 
  }
};

const tabs = [tabsData.designer, tabsData.engineer, tabsData.architect];

// --- Helper component for the cinematic title animation ---
const AnimatedTitle = ({ title }) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [displayText, setDisplayText] = useState(title);
  
    useEffect(() => {
      let interval;
      let iteration = 0;
      clearInterval(interval);
  
      interval = setInterval(() => {
        setDisplayText(prev => 
            prev.split("")
            .map((letter, index) => {
              if(index < iteration) {
                return title[index];
              }
              return chars[Math.floor(Math.random() * 26)]
            })
            .join("")
        );
        if(iteration >= title.length){
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 40);
  
      return () => clearInterval(interval);
    }, [title]);
  
    return <h3 className="font-serif text-3xl font-bold text-white mb-6 h-10">{displayText}</h3>;
};


// --- 2. THE MAIN COMPONENT ---
export const WhoWeServe = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // --- Hooks for 3D Image Tilt Effect ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }},
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" }}
  };

  return (
    <motion.section 
        className="text-white py-24 sm:py-32 overflow-hidden relative"
        style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 152, 0, 0.1), #000000)'
        }}
        onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            We Work With
          </h2>
        </motion.div>
        
        <div className="flex justify-center border-b border-gray-700/50 mb-16">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`relative text-xl font-serif tracking-wide transition-colors py-4 px-6
                        ${activeTab.id === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {tab.label}
              {activeTab.id === tab.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-spetra-orange-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center"
            >
              <motion.div 
                style={{ rotateX, rotateY, perspective: 800 }} 
                className="relative w-full aspect-[4/3]"
              >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                    <AnimatePresence>
                        <motion.img 
                            key={activeTab.image}
                            src={activeTab.image} 
                            alt={activeTab.title} 
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </AnimatePresence>
                  </div>
              </motion.div>
              
              <motion.div className="lg:pl-8" variants={contentVariants}>
                <AnimatedTitle title={activeTab.title} />
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {activeTab.description}
                </p>
                <ul className="space-y-4">
                  {activeTab.features.map(feature => (
                    <motion.li key={feature} className="flex items-start gap-3" variants={contentVariants}>
                      <svg className="w-6 h-6 text-spetra-orange-500 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-base font-medium text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
