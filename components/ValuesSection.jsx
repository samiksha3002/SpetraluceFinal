// ValuesSection.jsx

import React from 'react';

// You will need to install and import your own icons.
// For this example, we'll use a placeholder.
// Example: import { FaCube, FaRocket, FaShieldAlt } from 'react-icons/fa';

// Placeholder Icon Components (replace with your actual icons)
const IconComponent1 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
const IconComponent2 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 6v12l9 5 9-5V6L12 1z" /></svg>;
const IconComponent3 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>;

// Data for the cards, including the image URLs
const valuesData = [
  {
    title: "Innovation",
    description: "We are committed to pushing boundaries and creating forward-thinking solutions.",
    Icon: IconComponent1,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Integrity",
    description: "Our principles guide every decision we make, from design to delivery.",
    Icon: IconComponent2,
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2727&auto=format&fit=crop"
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in every product and service we offer.",
    Icon: IconComponent3,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop"
  }
];

// The Card Component
const AboutCard = ({ Icon, title, description, image }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-8 bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-96 transform transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Card Content */}
      <div className="relative z-20 text-center text-white">
        <div className="mb-4">
          <Icon className="h-12 w-12 mx-auto text-white" />
        </div>
        <h3 className="font-serif text-3xl font-bold mb-2">{title}</h3>
        <p className="text-lg opacity-80">{description}</p>
      </div>
    </div>
  );
};

// The main section component
const ValuesSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What We Value
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our principles guide every decision we make, from design to delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valuesData.map((value) => (
            <AboutCard // ⬅️ Corrected component name here
              key={value.title}
              Icon={value.Icon}
              title={value.title}
              description={value.description}
              image={value.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; // ⬅️ Export the main component