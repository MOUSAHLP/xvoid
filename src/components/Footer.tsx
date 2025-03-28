
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  
  const year = new Date().getFullYear();
  
  // Service links
  const serviceLinks = [
    { id: 1, name: isArabic ? "تطوير الويب" : "Web Development", path: `${baseUrl}/service/1` },
    { id: 2, name: isArabic ? "تطوير الجوال" : "Mobile Apps", path: `${baseUrl}/service/2` },
    { id: 3, name: isArabic ? "الذكاء الاصطناعي" : "AI Solutions", path: `${baseUrl}/service/3` },
  ];
  
  return (
    <footer className={`bg-cosmic-dark-lighter ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-white/70 mb-4">{t('footer.aboutText')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-cosmic-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cosmic-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cosmic-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cosmic-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cosmic-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.path} 
                    className="text-white/70 hover:text-cosmic-blue transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <strong>Email:</strong> info@xpositron.tech
              </li>
              <li className="text-white/70">
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li className="text-white/70">
                <strong>Address:</strong> 123 Tech Boulevard, Silicon Valley, CA 94024
              </li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={`${baseUrl}/sitemap`} 
                  className="text-white/70 hover:text-cosmic-blue transition-colors"
                >
                  {t('footer.sitemap')}
                </Link>
              </li>
              <li>
                <Link 
                  to={`${baseUrl}/privacy-policy`} 
                  className="text-white/70 hover:text-cosmic-blue transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li className={isArabic ? 'mt-3' : undefined}>
                <Link 
                  to={`${baseUrl}/terms-of-service`} 
                  className="text-white/70 hover:text-cosmic-blue transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cosmic-blue/10 text-center text-white/50 text-sm">
          © {year} X-POSITRON. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
