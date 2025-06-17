
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import TechnologiesSection from "@/components/TechnologiesSection";
import { useLanguage } from "@/context/LanguageContext";
import technologiesData from "@/data/technologies.json";

const Technologies: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              {t('technologies.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>مجموعة <span className="text-glow">التقنيات</span> لدينا</>
              ) : (
                <>Our <span className="text-glow">Technology</span> Stack</>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('technologies.description')}
            </p>
          </motion.div>
          
          {/* Display technologies by category */}
          {technologiesData.categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {category.name[language]}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="cosmic-card p-4 text-center hover:border-cosmic-blue/50 transition-all"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={tech.icon}
                        alt={tech.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description[language]}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
