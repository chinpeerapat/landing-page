import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2" role="radiogroup" aria-label="Select language">
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('th')}
        aria-pressed={language === 'th'}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'th'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-100'
        }`}
      >
        ไทย
      </button>
    </div>
  );
}
