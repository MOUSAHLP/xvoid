
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  
  // Determine the equivalent path in the other language
  const getTogglePath = () => {
    const currentPath = location.pathname;
    if (language === 'en') {
      return `/ar${currentPath === '/' ? '' : currentPath}`;
    } else {
      return currentPath.replace('/ar', '') || '/';
    }
  };
  
  const handleToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <Link 
      to={getTogglePath()} 
      onClick={handleToggle}
      className="flex items-center gap-2 text-white/80 hover:text-cosmic-blue transition-colors"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </Link>
  );
};

export default LanguageSelector;
