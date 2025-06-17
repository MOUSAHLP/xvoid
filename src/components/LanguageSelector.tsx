import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const getTogglePath = () => {
    const currentPath = location.pathname;
    return language === 'en'
      ? `/ar${currentPath === '/' ? '' : currentPath}`
      : currentPath.replace(/^\/ar/, '') || '/';
  };

  const handleToggle = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    navigate(getTogglePath());
  };

  const targetLang = language === 'en' ? 'ar' : 'en';
  const targetHref = getTogglePath();

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        handleToggle();
      }}
      href={targetHref}
      hrefLang={targetLang}
      lang={targetLang}
      className="flex items-center gap-2 text-white/80 hover:text-cosmic-blue transition-colors"
      aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </a>
  );
};

export default LanguageSelector;
