// app/about/page.jsx
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AboutHero } from '../../components/AboutHero';
import { VisionMission } from '../../components/VisionMission';

// Corrected import: Capitalized and without curly braces for a default export
import ValuesSection from '../../components/ValuesSection';

// Import icons (not used in this section but good to have)
import { 
  SparklesIcon,
  CheckBadgeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />

      <main>
        <AboutHero />

        {/* --- 2. "Vision/Mission" Section --- */}
        <VisionMission />

        {/* Corrected: Use the capitalized component name */}
        <ValuesSection />
        
        {/* --- 4. Call to Action --- */}
        <section className="bg-white dark:bg-black py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Let's discuss how our team can help you create something truly exceptional.
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