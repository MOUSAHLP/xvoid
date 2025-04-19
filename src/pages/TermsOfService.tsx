
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { useLanguage } from "@/context/LanguageContext";

const TermsOfService: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8 text-center">{t('terms.title')}</h1>

            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Content will be added here from the JSON files when translations are available */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "1. المقدمة" : "1. Introduction"}
                  </h2>
                  <p className="text-white/80">
                    {isArabic
                      ? "مرحبًا بك في X-VOID. باستخدام موقعنا الإلكتروني وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام."
                      : "Welcome to X-VOID. By using our website and services, you agree to comply with these terms and conditions."
                    }
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "2. استخدام الخدمات" : "2. Use of Services"}
                  </h2>
                  <p className="text-white/80">
                    {isArabic
                      ? "أنت توافق على استخدام خدماتنا للأغراض القانونية فقط وبطريقة لا تنتهك حقوق أي طرف ثالث."
                      : "You agree to use our services for lawful purposes only and in a manner that does not infringe upon the rights of any third party."
                    }
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "3. حقوق الملكية الفكرية" : "3. Intellectual Property Rights"}
                  </h2>
                  <p className="text-white/80">
                    {isArabic
                      ? "جميع المحتويات والمواد والعلامات التجارية والشعارات الموجودة على موقعنا هي ملك لنا أو مرخصة لنا."
                      : "All content, materials, trademarks, and logos displayed on our website are owned by or licensed to us."
                    }
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "4. تعديلات الشروط" : "4. Modifications to Terms"}
                  </h2>
                  <p className="text-white/80">
                    {isArabic
                      ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية المفعول فور نشرها على موقعنا."
                      : "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website."
                    }
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "5. اتصل بنا" : "5. Contact Us"}
                  </h2>
                  <p className="text-white/80">
                    {isArabic
                      ? "إذا كانت لديك أي أسئلة حول شروط الخدمة الخاصة بنا، يرجى الاتصال بنا على:"
                      : "If you have any questions about our Terms of Service, please contact us at:"
                    }
                  </p>
                  <a href={`tel:${t('contact.phone1')}`} className="text-cosmic-blue mt-2 block hover:underline">
                    {t('contact.phone1_display')}
                  </a>
                  <a href={`tel:${t('contact.phone2')}`} className="text-cosmic-blue mt-2 block hover:underline">
                    {t('contact.phone2_display')}
                  </a>
                  <a href={`mailto:${t('contact.email')}`} className="text-cosmic-blue mt-2 block hover:underline">
                    {t('contact.email')}
                  </a>                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
