// app/about/page.jsx
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AboutHero } from '../../components/AboutHero'; // <-- Changed to a named import

export default function About() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Footer />
    </main>
  );
}