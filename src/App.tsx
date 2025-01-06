import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import { SEO } from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <SEO />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Features />
            <Pricing />
            <Contact />
          </main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; {new Date().getFullYear()} AI ChatBot Pro. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
