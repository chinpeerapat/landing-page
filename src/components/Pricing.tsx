import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Source Code Only',
      price: '$800 - $1,500',
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
      name: 'Source + Hosting + API',
      price: '$1,500 - $2,500',
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
      name: 'Full Package',
      price: '$2,500 - $3,500',
      description: 'Complete managed solution',
      features: [
        'All previous features',
        'Premium hosting',
        'Dedicated support',
        'Platform integration ($400-$600 each)',
        '5,000 messages/month',
        'Monthly maintenance included'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs with our flexible pricing options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t">
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 text-center rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
