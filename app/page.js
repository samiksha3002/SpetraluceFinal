"use client"; // Add this if you use client-specific hooks in this file, but since it doesn't, it's optional here.

import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CollectionGrid } from "../components/CollectionGrid";
import { Footer } from "../components/Footer";
import { WelcomeSection } from "../components/WelcomeSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";



export default function HomePage() {
  return (
    <>
      

    
  

      <main>
        <Header />
        <Hero />
        <CollectionGrid />
        <WelcomeSection />
        <WhyChooseUs />
        <Testimonials />
      </main>

      {/* Footer goes here */}
      <Footer />
    </>
  );
}
