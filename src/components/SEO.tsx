import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  const { language } = useLanguage();
  
  const defaultTitle = language === 'en' ? 'AI ChatBot Pro - Intelligent Customer Service Solutions' : 'AI ChatBot Pro - โซลูชันบริการลูกค้าอัจฉริยะ';
  const defaultDescription = language === 'en' 
    ? 'Transform your customer service with AI-powered chatbots. 24/7 support, multi-platform integration, and smart analytics.'
    : 'ยกระดับการบริการลูกค้าด้วย AI chatbot ให้บริการตลอด 24 ชั่วโมง รองรับหลายแพลตฟอร์ม พร้อมการวิเคราะห์อัจฉริยะ';

  return (
    <Helmet>
      <html lang={language} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
}
