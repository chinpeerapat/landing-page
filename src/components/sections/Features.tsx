import React from 'react';
import { MessageSquare, Globe, BarChart } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('features.multiPlatform.title'),
      description: t('features.multiPlatform.description'),
      benefits: [t('features.multiPlatform.benefit1'), t('features.multiPlatform.benefit2'), t('features.multiPlatform.benefit3')]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('features.availability.title'),
      description: t('features.availability.description'),
      benefits: [t('features.availability.benefit1'), t('features.availability.benefit2'), t('features.availability.benefit3')]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      benefits: [t('features.analytics.benefit1'), t('features.analytics.benefit2'), t('features.analytics.benefit3')]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>{t('features.title')}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
