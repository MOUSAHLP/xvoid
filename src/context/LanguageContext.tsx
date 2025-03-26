
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import translations from '../data/translations.json';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>(
    location.pathname.startsWith('/ar') ? 'ar' : 'en'
  );

  useEffect(() => {
    // Update language based on URL changes
    const newLanguage = location.pathname.startsWith('/ar') ? 'ar' : 'en';
    if (language !== newLanguage) {
      setLanguage(newLanguage);
    }
  }, [location.pathname]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    
    // Don't navigate if we're already on the right path
    const currentIsArabic = location.pathname.startsWith('/ar');
    if ((lang === 'ar' && !currentIsArabic) || (lang === 'en' && currentIsArabic)) {
      const newPath = getTogglePath(location.pathname, lang);
      navigate(newPath);
    }
  };

  const getTogglePath = (path: string, targetLang: Language): string => {
    if (targetLang === 'ar' && !path.startsWith('/ar')) {
      return `/ar${path === '/' ? '' : path}`;
    } else if (targetLang === 'en' && path.startsWith('/ar')) {
      return path.replace('/ar', '') || '/';
    }
    return path;
  };

  const t = (key: string): string => {
    const parts = key.split('.');
    let result = translations[language] as any;
    
    for (const part of parts) {
      if (result && result[part] !== undefined) {
        result = result[part];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
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
