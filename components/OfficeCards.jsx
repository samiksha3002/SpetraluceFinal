"use client";

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};


// --- Reusable Animated Card Component ---
const OfficeCard = ({ office }) => (
    <motion.div
        className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl shadow-2xl flex flex-col h-full"
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(251, 146, 60, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
            {office.country}
        </h3>
        <div className="space-y-3 flex-grow">
            <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                <div>
                    {office.addressLines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <p>{office.phone}</p>
            </div>
        </div>
        <a
            href={office.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-amber-500 font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
        >
            View on Map →
        </a>
    </motion.div>
);


// --- Main Section Component ---
export const OfficeCards = () => {
    const offices = [
        { country: "ITALY", addressLines: ["Via Monte Vettore n°5", "61122 Pesaro (PU) Italia"], phone: "+39 345 588 2002", mapLink: "#" },
        { country: "KUWAIT (LTG)", addressLines: ["LTG", "Othman Center", "Mezzanine M29", "Hawalli"], phone: "+965 66612349", mapLink: "#" },
        { country: "KUWAIT (TIMA POOLS)", addressLines: ["TIMA POOLS", "Shuwaikh Industrial", "Street 28, Shop No. 4"], phone: "+965 98518951", mapLink: "#" },
    ];

    return (
        <motion.section
            className="bg-black py-24 sm:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <motion.div className="max-w-2xl mx-auto text-center" variants={itemVariants}>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100">
                        Visit Our Showrooms
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We are a global company. Find the Spetraluce partner nearest to you.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto"
                    variants={containerVariants}
                >
                    {offices.map((office) => (
                        <OfficeCard key={office.country} office={office} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};
