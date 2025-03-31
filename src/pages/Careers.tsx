import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import CareerForm from '@/components/CareerForm';

const Careers: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');

  return (
    <main className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
            {isArabic ? "الوظائف" : "CAREERS"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? "انضم إلى فريقنا" : "Join Our Team"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {isArabic
              ? "نحن نبحث دائمًا عن المواهب المتميزة للانضمام إلى فريقنا المتنامي"
              : "We're always looking for exceptional talent to join our growing team"
            }
          </p>
        </div>
        
        <CareerForm />
      </div>
    </main>
  );
};

export default Careers; 