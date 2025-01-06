import React from 'react';
import { Bot, MessageCircle, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlOGYyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
          
          <div ref={ref} className={`relative max-w-5xl mx-auto text-center fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h1 className="mt-6 text-6xl font-extrabold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button href="#pricing" size="large" withArrow>
                {t('hero.cta.start')}
              </Button>
              <Button href="#demo" variant="outline" size="large">
                {t('hero.cta.demo')}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="w-8 h-8 text-indigo-600" />,
                  title: '24/7 Support',
                  description: t('features.availability.description')
                },
                {
                  icon: <Bot className="w-8 h-8 text-purple-600" />,
                  title: t('features.analytics.title'),
                  description: t('features.analytics.description')
                },
                {
                  icon: <Zap className="w-8 h-8 text-pink-600" />,
                  title: t('features.multiPlatform.title'),
                  description: t('features.multiPlatform.description')
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-4 w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
