import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { LanguageSwitch } from '../ui/LanguageSwitch';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              AI ChatBot Pro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitch />
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('nav.pricing')}
            </a>
            <Button href="#contact">
              {t('nav.getStarted')}
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <LanguageSwitch />
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </a>
              <Button href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
