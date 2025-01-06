import React from 'react';
import { Bot, MessageCircle, Zap } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '24/7 Support',
      description: t('features.availability.description')
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('features.multiPlatform.title'),
      description: t('features.multiPlatform.description')
    }
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div ref={ref} className={`relative max-w-4xl mx-auto text-center fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <Badge variant="secondary">New: Multi-Platform Support</Badge>
            
            <h1 className="mt-6 text-6xl font-bold leading-tight mb-8">
              <GradientText from="from-primary-600" to="to-secondary-500">
                {t('hero.title')}
              </GradientText>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button href="#pricing" withArrow>
                {t('hero.cta.start')}
              </Button>
              <Button href="#demo" variant="secondary">
                {t('hero.cta.demo')}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="card p-8 group hover:-translate-y-1"
                >
                  <div className="mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
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
