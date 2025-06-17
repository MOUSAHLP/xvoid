
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPolicy: React.FC = () => {
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
          >
            <h1 className="text-4xl font-bold mb-8 text-center">{t('privacyPolicy.title')}</h1>

            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">{t('privacyPolicy.sections.intro.title')}</h2>
                  <p className="text-white/80">
                    {t('privacyPolicy.sections.intro.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{t('privacyPolicy.sections.collection.title')}</h2>
                  <p className="text-white/80 mb-3">
                    {t('privacyPolicy.sections.collection.content')}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    {language === 'en' ? (
                      <>
                        <li>Register for our services</li>
                        <li>Express an interest in obtaining information about us or our products and services</li>
                        <li>Participate in activities on our website</li>
                        <li>Contact us</li>
                      </>
                    ) : (
                      <>
                        <li>التسجيل في خدماتنا</li>
                        <li>التعبير عن اهتمامك بالحصول على معلومات عنا أو عن منتجاتنا وخدماتنا</li>
                        <li>المشاركة في الأنشطة على موقعنا</li>
                        <li>الاتصال بنا</li>
                      </>
                    )}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{t('privacyPolicy.sections.usage.title')}</h2>
                  <p className="text-white/80 mb-3">
                    {t('privacyPolicy.sections.usage.content')}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    {language === 'en' ? (
                      <>
                        <li>Providing, maintaining, and improving our services</li>
                        <li>Communicating with you about our services</li>
                        <li>Responding to your inquiries</li>
                        <li>Monitoring and analyzing trends, usage, and activities</li>
                        <li>Detecting, preventing, and addressing technical issues</li>
                      </>
                    ) : (
                      <>
                        <li>توفير وصيانة وتحسين خدماتنا</li>
                        <li>التواصل معك بخصوص خدماتنا</li>
                        <li>الرد على استفساراتك</li>
                        <li>مراقبة وتحليل الاتجاهات والاستخدام والأنشطة</li>
                        <li>اكتشاف ومنع ومعالجة المشكلات التقنية</li>
                      </>
                    )}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{t('privacyPolicy.sections.cookies.title')}</h2>
                  <p className="text-white/80">
                    {t('privacyPolicy.sections.cookies.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{t('privacyPolicy.sections.contact.title')}</h2>
                  <p className="text-white/80">
                    {t('privacyPolicy.sections.contact.content')}
                  </p>
                  <a href={`tel:${t('contact.phone')}`} className="text-cosmic-blue ltr mt-2 block hover:underline">
                    {t('contact.phone_display')}
                  </a>
                  <a href={`mailto:${t('contact.email')}`} className="text-cosmic-blue mt-2 block hover:underline">
                    {t('contact.email')}
                  </a>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
