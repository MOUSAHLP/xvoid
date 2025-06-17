
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Sitemap: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';

  const sitemapSections = [
    {
      title: isArabic ? "الصفحات الرئيسية" : "Main Pages",
      links: [
        { name: t('nav.home'), path: `${baseUrl}/` },
        { name: t('nav.services'), path: `${baseUrl}/services` },
        { name: t('nav.portfolio'), path: `${baseUrl}/portfolio` },
        { name: t('nav.about'), path: `${baseUrl}/about` },
        { name: t('nav.faq'), path: `${baseUrl}/faq` },
        { name: t('nav.careers'), path: `${baseUrl}/careers` },
        { name: t('nav.contact'), path: `${baseUrl}/contact` },
      ]
    },
    {
      title: isArabic ? "الصفحات القانونية" : "Legal Pages",
      links: [
        { name: t('footer.privacy'), path: `${baseUrl}/privacy-policy` },
        { name: t('footer.terms'), path: `${baseUrl}/terms-of-service` },
        { name: t('footer.sitemap'), path: `${baseUrl}/sitemap` },
      ]
    },
  ];

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">{t('sitemap.title')}</h1>
            
            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {sitemapSections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link 
                            to={link.path}
                            className="flex items-center hover:text-cosmic-blue transition-colors"
                          >
                            <ChevronRight className="h-4 w-4 mr-2" />
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
