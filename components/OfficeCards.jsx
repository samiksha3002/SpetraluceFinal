// app/components/OfficeCards.jsx
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Reusable component for each office card
const OfficeCard = ({ office }) => (
  // Card is now white on a gray background
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
      {office.country}
    </h3>
    <div className="space-y-3 flex-grow">
      <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
        <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" />
        <div>
          {office.addressLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <PhoneIcon className="w-5 h-5 flex-shrink-0 text-gray-500" />
        <p>{office.phone}</p>
      </div>
    </div>
    <a 
      href={office.mapLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-6 inline-block text-gray-900 dark:text-white 
                 font-medium text-sm uppercase tracking-wider 
                 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
    >
      View on Map →
    </a>
  </div>
);

export const OfficeCards = () => {
  // Your office data
  const offices = [
    { country: "ITALY", addressLines: ["Via Monte Vettore n°5", "61122 Pesaro (PU) Italia"], phone: "+39 345 588 2002", mapLink: "#" },
    { country: "KUWAIT (LTG)", addressLines: ["LTG", "Othman Center", "Mezzanine M29", "Hawalli"], phone: "+965 66612349", mapLink: "#" },
    { country: "KUWAIT (TIMA POOLS)", addressLines: ["TIMA POOLS", "Shuwaikh Industrial", "Street 28, Shop No. 4"], phone: "+965 98518951", mapLink: "#" },
  ];

  return (
    // THIS SECTION IS NOW bg-gray-50 dark:bg-black
    <section className="bg-gray-50 dark:bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold 
                         text-gray-900 dark:text-gray-100">
            Visit Our Showrooms
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are a global company. Find the Spetraluce partner nearest to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {offices.map((office) => (
            <OfficeCard key={office.country} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
};