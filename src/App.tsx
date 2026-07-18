/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import TestimonialsTeam from './components/TestimonialsTeam';
import FAQContact from './components/FAQContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-brand-text bg-brand-secondary selection:bg-brand-primary/20 selection:text-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Pricing />
      <TestimonialsTeam />
      <FAQContact />
      <Footer />
    </div>
  );
}
