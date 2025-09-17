// app/products/page.jsx
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductHero } from '../../components/ProductHero';
import { ProductBrowser } from '../../components/ProductBrowser'; // <-- IMPORT OUR NEW "BRAIN"

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
        <ProductBrowser /> {/* <-- This one component now runs your whole page content */}
      </main>
      <Footer />
    </>
  );
}