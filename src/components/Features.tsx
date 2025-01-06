import React from 'react';
import { MessageSquare, Globe, BarChart, Clock, Database, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Multi-Platform Integration',
      description: 'Deploy on website, Facebook Messenger, LINE, and WhatsApp'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '24/7 Availability',
      description: 'Continuous automated support for your customers'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Analytics Lite',
      description: 'Track and analyze customer interactions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Development',
      description: '3-5 weeks from concept to deployment'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'API Integration',
      description: 'Connect with your existing business systems'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Scalable Solution',
      description: 'Grows with your business needs'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI chatbots come packed with essential features designed to enhance
            customer engagement and streamline operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:border-indigo-600 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
