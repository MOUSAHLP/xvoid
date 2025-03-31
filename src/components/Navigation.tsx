import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const baseUrl = process.env.PUBLIC_URL;
  const isArabic = t('language') === 'ar';

  const navLinks = [
    {
      path: `${baseUrl}/faq`,
      label: isArabic ? "الأسئلة الشائعة" : "FAQ",
    },
    {
      path: `${baseUrl}/careers`,
      label: isArabic ? "الوظائف" : "Careers",
    },
  ];

  return (
    <nav>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 