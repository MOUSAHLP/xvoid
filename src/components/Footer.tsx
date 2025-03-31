
import React from "react";
import { Link } from "react-router-dom";
import { 
  Github, 
  Youtube, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  
  return (
    <footer className={`bg-cosmic-dark relative overflow-hidden border-t border-white/5 ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Star background */}
      <div className="absolute inset-0 bg-star-pattern bg-[length:20px_20px] opacity-10 pointer-events-none"></div>
      
      {/* Shooting star animation */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-cosmic-blue rounded-full opacity-0 animate-shooting-star"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - removed text next to logo */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-24 h-24"
              />
            </div>
            
            <p className="text-white/70 mb-6">
              {t('footer.aboutText')}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow">{t('footer.about')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to={`${baseUrl}/`} className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/services`} className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/portfolio`} className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/about`} className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services - Fixed links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow-purple">{t('sections.services.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to={`${baseUrl}/service/1`} className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  {isArabic ? "تطوير الويب" : "Web Development"}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/service/2`} className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  {isArabic ? "تطبيقات الجوال" : "Mobile Applications"}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/service/3`} className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  {isArabic ? "حلول الذكاء الاصطناعي" : "AI Solutions"}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/service/4`} className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  {isArabic ? "تصميم واجهة المستخدم" : "UI/UX Design"}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/service/5`} className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  {isArabic ? "التسويق الرقمي" : "Digital Marketing"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow-pink">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cosmic-pink shrink-0 mt-0.5" />
                <span className="text-white/70">
                  {isArabic ? t('contact.address') : t('contact.address')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href={`tel:${t('contact.phone1')}`} className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  {isArabic ? t('contact.phone1_display') : t('contact.phone1_display')}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href={`tel:${t('contact.phone2')}`} className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  {isArabic ? t('contact.phone2_display') : t('contact.phone2_display')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href={`mailto:${t('contact.email1')}`} className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  {isArabic ? t('contact.email1') : t('contact.email1')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href={`mailto:${t('contact.email2')}`} className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  {isArabic ? t('contact.email2') : t('contact.email2')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2020 X-POSITRON. {t('footer.rights')}
          </p>
          
          {/* Add more space between Arabic text links */}
          <div className={`flex items-center ${isArabic ? 'space-x-0 space-x-reverse space-x-6' : 'space-x-6'}`}>
            <Link to={`${baseUrl}/privacy-policy`} className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              {t('footer.privacy')}
            </Link>
            <Link to={`${baseUrl}/terms-of-service`} className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              {t('footer.terms')}
            </Link>
            <Link to={`${baseUrl}/sitemap`} className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              {t('footer.sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
