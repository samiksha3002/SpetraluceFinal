// app/services/page.jsx
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/ServiceHero';
import { ServiceCard } from '../../components/ServiceCard'; 
import { WhoWeServe } from '../../components/WhoWeServe';
import { PremiumServiceCard } from '../../components/PremiumServiceCard';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// --- 1. IMPORT YOUR ICONS ---
// We import the icons we need from Heroicons
import { 
  CpuChipIcon,  // For Production
  PencilSquareIcon, // For Design
  WrenchScrewdriverIcon, // For Assistance
  LightBulbIcon, // For Lighting Projects
  BuildingOffice2Icon, // For Sales
  ChatBubbleLeftRightIcon // For Advice
} from '@heroicons/react/24/outline';

export default function ServicesPage() {

  // --- 2. UPDATE THE DATA ARRAY ---
  // We've replaced 'iconSrc' (a string) with 'Icon' (the component)
  const servicesData = [
    {
      Icon: CpuChipIcon, 
      title: 'Production',
      description: 'The automated internal production for the manufacturing process ensures high-quality and consistent output for every product.',
    },
    {
      Icon: PencilSquareIcon,
      title: 'Design',
      description: 'We design, make prototypes, and manufacture every product with meticulous attention to detail and innovation.',
    },
    {
      Icon: WrenchScrewdriverIcon,
      title: 'Assistance',
      description: 'Our after-sales assistance supports you with expert guidance and technical support throughout the product lifecycle.',
    },
    {
      Icon: LightBulbIcon,
      title: 'Lighting Projects',
      description: 'Our technical department handles every aspect from concept to installation to ensure optimal lighting solutions.',
    },
    {
      Icon: BuildingOffice2Icon,
      title: 'Sales',
      description: 'We strive to make our innovative products accessible to a wide range of clients and markets through our commercial presence.',
    },
    {
      Icon: ChatBubbleLeftRightIcon,
      title: 'Advice to Professionals',
      description: 'Consulting service in the lighting market. We provide expert advice to help professionals make informed decisions.',
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />

      <main>
        {/* --- Hero Section (Unchanged) --- */}
      <ServiceHero />
        {/* --- The Elegant Services Grid --- */}
        <section className="bg-white dark:bg-black py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* --- 3. UPDATE THE MAPPED PROP --- */}
              {/* We now pass 'Icon' instead of 'iconSrc' */}
              {servicesData.map((service, index) => (
                <ServiceCard 
                  key={index}
                  Icon={service.Icon} 
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>
       
        <WhoWeServe />

        {/* --- Call to Action Section (Unchanged) --- */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Illuminate Your Vision?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Contact us today to discuss your project and discover how our expertise can bring your ideas to light.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-gray-900 text-white
                         dark:bg-white dark:text-gray-900 font-semibold text-base 
                         uppercase tracking-wider rounded-md shadow-lg 
                         hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300"
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