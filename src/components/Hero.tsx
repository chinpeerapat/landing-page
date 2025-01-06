import React from 'react';
import { Bot, MessageCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Custom AI Chatbots for Your Growing Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enhance customer engagement with intelligent, affordable chatbot solutions tailored for SMEs and small businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              View Pricing
            </a>
            <a
              href="#process"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8 text-indigo-600" />,
                title: '24/7 Support',
                description: 'Automated customer service that never sleeps'
              },
              {
                icon: <Bot className="w-8 h-8 text-indigo-600" />,
                title: 'Custom Training',
                description: 'Tailored to your business needs and voice'
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: 'Quick Setup',
                description: 'Deploy within 3-5 weeks across platforms'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
