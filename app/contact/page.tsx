// app/contact/page.jsx

import { Header } from '../../components/Header'; // Using ../ to go up one level
import { Footer } from '../../components/Footer'; // Using ../ to go up one level
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { ContactHero } from '../../components/ContactHero'
import { OfficeCards } from '../../components/OfficeCards';
import { MapSection } from '../../components/MapSection';
import { GeneralContactForm } from '../../components/GeneralContactForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <OfficeCards />
        <GeneralContactForm />
        <MapSection />
       
      </main>
      <Footer />
    </>
  );
}