import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Contact />
        </main>
        <footer className="bg-gray-900 text-white py-12">
          {/* Footer content remains the same */}
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
