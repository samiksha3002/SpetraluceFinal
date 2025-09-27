"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop"
  }
};

const tabs = [tabsData.designer, tabsData.engineer, tabsData.architect];

// --- Animation Variants ---
const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
    },
    exit: { 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" }
    }
};

// --- 2. THE MAIN COMPONENT ---
export const WhoWeServe = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
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
        
        {/* Interactive Tab Filters */}
        <div className="flex justify-center border-b border-gray-700 mb-16">
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
                  className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center"
            >
                {/* Image Column */}
                <motion.div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl" variants={contentVariants}>
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="w-full h-full object-cover" 
                    />
                </motion.div>
                
                {/* Text Column */}
                <motion.div className="lg:pl-8" variants={contentVariants}>
                  <h3 className="font-serif text-3xl font-bold text-white mb-6">
                    {activeTab.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {activeTab.description}
                  </p>
                  
                  {/* Elegant Checkmark List */}
                  <ul className="space-y-4">
                    {activeTab.features.map(feature => (
                      <motion.li key={feature} className="flex items-start gap-3" variants={contentVariants}>
                        <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
    </section>
  );
};
