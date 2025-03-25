
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create translations object
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'home': 'Home',
    'services': 'Services',
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact',
    'technologies': 'Technologies',
    
    // Buttons
    'launchProject': 'Launch Your Project',
    'viewWork': 'View Our Work',
    'exploreSpace': 'Explore Our Space',
    'getStarted': 'Get Started Today',
    'details': 'View Details',
    
    // Sections
    'servicesTitle': 'Digital Solutions for Every Need',
    'portfolioTitle': 'Featured Projects',
    'testimonialTitle': 'What Our Clients Say',
    'techTitle': 'Technologies We Use',
    'readyToLaunch': 'Ready to Launch Your Digital Journey?',
    
    // Footer
    'allRights': 'All Rights Reserved',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'sitemap': 'Sitemap',
  },
  ar: {
    // Navigation
    'home': 'الرئيسية',
    'services': 'الخدمات',
    'portfolio': 'المشاريع',
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'technologies': 'التقنيات',
    
    // Buttons
    'launchProject': 'أطلق مشروعك',
    'viewWork': 'مشاهدة أعمالنا',
    'exploreSpace': 'استكشف الفضاء',
    'getStarted': 'ابدأ اليوم',
    'details': 'عرض التفاصيل',
    
    // Sections
    'servicesTitle': 'حلول رقمية لكل احتياجاتك',
    'portfolioTitle': 'مشاريع مميزة',
    'testimonialTitle': 'ماذا يقول عملاؤنا',
    'techTitle': 'التقنيات التي نستخدمها',
    'readyToLaunch': 'هل أنت جاهز لإطلاق رحلتك الرقمية؟',
    
    // Footer
    'allRights': 'جميع الحقوق محفوظة',
    'privacy': 'سياسة الخصوصية',
    'terms': 'شروط الخدمة',
    'sitemap': 'خريطة الموقع',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
