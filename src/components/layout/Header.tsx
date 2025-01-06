import React from 'react';
import { Bot, MessageSquare, Code, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AI ChatBot Pro</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600">Process</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
          </div>
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
