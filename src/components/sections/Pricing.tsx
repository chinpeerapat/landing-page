import React from 'react';
import { Check, Star } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.sourceCode'),
      price: '$800',
      range: t('pricing.from') + ' $800 - $1,500',
      description: 'Perfect for DIY implementation',
      features: [
        'Complete source code access',
        'Basic documentation',
        'Platform integration ($200-$400 each)',
        'Optional post-launch support',
        '5,000 messages/month',
        'Self-hosted solution'
      ]
    },
    {
      name: t('pricing.business'),
      price: '$1,500',
      range: t('pricing.from') + ' $1,500 - $2,500',
      popular: true,
      description: 'Most popular choice for SMEs',
      features: [
        'All Source Code features',
        'Managed hosting solution',
        'LLM API integration',
        'Platform integration ($300-$500 each)',
        '5,000 messages/month',
        'Basic support included'
      ]
    },
    {
      name: t('pricing.enterprise'),
      price: '$2,500',
      range: t('pricing.from') + ' $2,500 - $3,500',
      description: 'Complete managed solution',
      features: [
        'All Business features',
        'Premium hosting',
        'Dedicated support',
        'Platform integration ($400-$600 each)',
        '5,000 messages/month',
        'Monthly maintenance included'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge>Flexible Pricing</Badge>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            <GradientText>{t('pricing.title')}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl ${
                plan.popular
                  ? 'shadow-2xl ring-2 ring-indigo-600 scale-105'
                  : 'shadow-xl hover:shadow-2xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> {t('pricing.popular')}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">starting price</span>
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <p className="text-sm text-gray-500 mb-6">{plan.range}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 text-center rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {t('pricing.cta')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
