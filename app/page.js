// app/page.tsx
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CollectionGrid } from '../components/CollectionGrid';
import { Footer } from '../components/Footer';
import { WelcomeSection } from '../components/WelcomeSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';



export default function HomePage() {
  return (
    <>
      {/* The Header is outside of <main> because it's a global UI element.
      */}
      <Header />

      <main>
        <Hero />
        
        <CollectionGrid />
        <WelcomeSection />
        <WhyChooseUs />
        <Testimonials />
        <Footer />

      </main>

      {/* We'll build the footer next.
        <Footer /> 
      */}
    </>
  );
}