import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={`px-2 py-1 rounded ${
          language === 'th'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600'
        }`}
      >
        ไทย
      </button>
    </div>
  );
}
