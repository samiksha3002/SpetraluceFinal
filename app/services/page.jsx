"use client";

import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/ServiceHero';
import { WhoWeServe } from '../../components/WhoWeServe';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// --- 1. ICONS (Unchanged) ---
import {
    CpuChipIcon,
    PencilSquareIcon,
    WrenchScrewdriverIcon,
    LightBulbIcon,
    BuildingOffice2Icon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';


// --- 2. PREMIUM SERVICE CARD COMPONENT ---
// I've created a new, premium card component for this section.
const PremiumServiceCard = ({ Icon, title, description }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <motion.div
            className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(251, 146, 60, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
            {/* Orange glow effect on hover */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex-grow">
                <div className="mb-6">
                    <Icon className="h-10 w-10 text-amber-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-100 mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
             <div className="relative z-10 mt-6">
                 <a href="#" className="flex items-center text-amber-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     Learn More
                     <ArrowRightIcon className="w-4 h-4 ml-2" />
                 </a>
            </div>
        </motion.div>
    );
};


export default function ServicesPage() {
    const servicesData = [
        { Icon: CpuChipIcon, title: 'Production', description: 'Our automated internal production ensures high-quality and consistent output for every single product.' },
        { Icon: PencilSquareIcon, title: 'Design', description: 'We design, make prototypes, and manufacture every product with meticulous attention to detail and innovation.' },
        { Icon: WrenchScrewdriverIcon, title: 'Assistance', description: 'Our after-sales assistance supports you with expert guidance and technical support throughout the product lifecycle.' },
        { Icon: LightBulbIcon, title: 'Lighting Projects', description: 'Our technical department handles every aspect from concept to installation to ensure optimal lighting solutions.' },
        { Icon: BuildingOffice2Icon, title: 'Sales', description: 'We make our innovative products accessible to a wide range of clients through a strong commercial presence.' },
        { Icon: ChatBubbleLeftRightIcon, title: 'Advice to Professionals', description: 'We provide expert advice to help lighting professionals make informed and effective decisions in the market.' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="bg-black min-h-screen">
            <Header />

            <main>
                <ServiceHero />
                
                {/* --- PREMIUM SERVICES GRID --- */}
                <motion.section 
                    className="bg-black py-24 sm:py-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                             <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100">
                                Our Expertise
                            </h2>
                            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                                From initial concept to final installation, we provide a complete range of services to ensure your vision is realized to perfection.
                            </p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {servicesData.map((service, index) => (
                                <PremiumServiceCard
                                    key={index}
                                    Icon={service.Icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
                
                <WhoWeServe />

                {/* --- CALL TO ACTION SECTION (THEMED) --- */}
                <section className="bg-gray-900/50 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Illuminate Your Vision?
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                            Contact us today to discuss your project and discover how our expertise can bring your ideas to light.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 bg-amber-500 text-black font-semibold text-base 
                                       uppercase tracking-wider rounded-md shadow-lg 
                                       hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
