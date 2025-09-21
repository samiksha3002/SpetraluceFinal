// app/components/WhoWeServe.jsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

// --- 1. DEFINE YOUR DATA ---
// We put all your text and images in an object to keep the code clean.
// You can easily edit this text or your image paths.
const tabsData = {
  designer: {
    title: "For the Light Designer",
    description: "Are you working to design a new building and have you identified an interesting product on our catalogue or using the online configurator?",
    features: [
      "A team of light artists for new technologies.",
      "Unique and custom-made LED lighting solutions.",
      "Develop and visualize your project in a short time.",
    ],
    image: "/work1.png" // <-- Replace with your image path
  },
  engineer: {
    title: "For the Light Engineer",
    description: "Do you have to design a new installation and have you got one selected specific product from our online catalogue?",
    features: [
      "Masters of light with a strong propensity for new tech.",
      "Made in Italy (LED) projects to guarantee flexible design.",
      "Visualize your lighting project very quickly.",
    ],
     image: "/work2.png" // <-- Replace with your image path
  },
  architect: {
    title: "For the Architect",
    description: "Spetraluce has got a team of light artists with a strong propensity for new technologies. Unlike other manufacturers, we are able to create unique and custom-made LED lighting solutions.",
    features: [
      "Develop custom projects together with our team.",
      "Flexible design and production.",
      "Made in Italy for lighting professionals.",
    ],
    image: "/work3.png" // <-- Add a new image for this
  }
};

// --- 2. OUR ELEGANT TAB BUTTON (from ProductBrowser) ---
const ElegantTabButton = ({ label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative text-xl font-serif tracking-wide transition-colors pb-2
                 ${isActive 
                   ? 'text-gray-900 dark:text-white' 
                   : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-white"></span>
      )}
    </button>
  );
};

// --- 3. THE MAIN COMPONENT ---
export const WhoWeServe = () => {
  // 'designer' is the default active tab
  const [activeTab, setActiveTab] = useState('designer');
  const activeContent = tabsData[activeTab];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            We Work With
          </h2>
        </div>
        
        {/* Elegant Tab Filters */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          <ElegantTabButton 
            label="Light Designers" 
            isActive={activeTab === 'designer'} 
            onClick={() => setActiveTab('designer')} 
          />
          <ElegantTabButton 
            label="Light Engineers" 
            isActive={activeTab === 'engineer'} 
            onClick={() => setActiveTab('engineer')} 
          />
          <ElegantTabButton 
            label="Architects" 
            isActive={activeTab === 'architect'} 
            onClick={() => setActiveTab('architect')} 
          />
        </div>

        {/* Tab Content (2-column split) */}
        <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fadeIn">
          
          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={activeContent.image} 
              alt={activeContent.title} 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
          
          {/* Text Column */}
          <div className="lg:pl-8">
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {activeContent.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {activeContent.description}
            </p>
            
            {/* Elegant Checkmark List */}
            <ul className="space-y-4">
              {activeContent.features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-900 dark:text-gray-100 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* We need to add a simple fade-in animation to tailwind.config.js */}
    </section>
  );
};