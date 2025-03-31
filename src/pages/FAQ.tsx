import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import StarBackground from '@/components/StarBackground';
import { useLocation } from 'react-router-dom';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');

  return (
    <main className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
            {isArabic ? "الأسئلة الشائعة" : "FAQ"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? "الأسئلة المتكررة" : "Frequently Asked Questions"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {isArabic
              ? "اعثر على إجابات للأسئلة الشائعة حول خدماتنا وعملياتنا"
              : "Find answers to common questions about our services and processes"
            }
          </p>
        </div>
        <FAQSection showAll={true} />
      </div>
    </main>
  );
};

export default FAQ; 