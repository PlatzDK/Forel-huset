import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50">
        <Header />
        <Hero />
        <About />
        <Gallery />
        <Activities />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;