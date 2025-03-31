
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Contact: React.FC = () => {
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
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              {t('contact.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>أرسل لنا <span className="text-glow-pink">إرسالًا بين النجوم</span></>
              ) : (
                <>Send Us an <span className="text-glow-pink">Interstellar Transmission</span></>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cosmic-card"
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.subject')}</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      className="cosmic-input"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      className="cosmic-input"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-white/70 mb-2">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    className="cosmic-input"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="cosmic-input"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button type="submit" className="cosmic-button group w-full">
                  <span className="flex items-center justify-center">
                    {t('buttons.send')}
                    <Send className={`${isArabic ? 'mr-2' : 'ml-2'} w-4 h-4 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </span>
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="cosmic-card mb-8">
                <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                
                <div className="space-y-6">
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.email.title')}</h3>
                      <a href={`mailto:${t('contact.email1')}`} className="text-white/70 hover:text-cosmic-blue transition-colors">{t('contact.email1')}</a>
                    </div>
                  </div>  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.email.title')}</h3>
                      <a href={`mailto:${t('contact.email2')}`} className="text-white/70 hover:text-cosmic-blue transition-colors">{t('contact.email2')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-cosmic-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.phone.title')}</h3>
                      <a href={`tel:${t('contact.phone1')}`} className="text-white/70 hover:text-cosmic-pink transition-colors">{t('contact.phone1_display')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-cosmic-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.phone.title')}</h3>
                      <a href={`tel:${t('contact.phone2')}`} className="text-white/70 hover:text-cosmic-pink transition-colors">{t('contact.phone2_display')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.location.title')}</h3>
                      <a href={`https://maps.google.com/?q=${t('contact.address')}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cosmic-purple transition-colors">{t('contact.address')}</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="cosmic-card">
                <h2 className="text-2xl font-bold mb-6">{t('contact.hours.title')}</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span className="text-cosmic-blue">{t('contact.hours.weekdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span className="text-cosmic-purple">{t('contact.hours.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span className="text-cosmic-pink">{t('contact.hours.sundayHours')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
