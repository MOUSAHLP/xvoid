
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine the equivalent path in the other language
  const getTogglePath = () => {
    const currentPath = location.pathname;
    if (language === 'en') {
      // Switch to Arabic path
      return `/ar${currentPath === '/' ? '' : currentPath}`;
    } else {
      // Switch to English path
      return currentPath.replace('/ar', '') || '/';
    }
  };
  
  const handleToggle = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    navigate(getTogglePath());
  };
  
  return (
    <button 
      onClick={handleToggle}
      className="flex items-center gap-2 text-white/80 hover:text-cosmic-blue transition-colors"
      aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageSelector;
