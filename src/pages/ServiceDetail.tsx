
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import servicesData from "@/data/services.json";
import { useLanguage } from "@/context/LanguageContext";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  const services = language === 'en' ? servicesData.en : servicesData.ar;
  const [service, setService] = useState(services.find(s => s.id === Number(id)));

  useEffect(() => {
    // Update service when language changes
    setService(services.find(s => s.id === Number(id)));
  }, [language, id, services]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {isArabic ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <p className="mb-4">
            {isArabic ? "عذراً، لم نتمكن من العثور على الخدمة التي تبحث عنها." : "Sorry, we couldn't find the service you're looking for."}
          </p>
          <Link to={`${baseUrl}/services`} className="cosmic-button">
            <span>
              {isArabic ? "العودة إلى الخدمات" : "Back to Services"}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const getIconComponent = (iconName: string) => {
    // This is a placeholder - in a real implementation, you would dynamically import the icons
    // For now, we'll use a placeholder div that shows the icon name
    return (
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
        <span className={`text-cosmic-${service.color}`}>{iconName}</span>
      </div>
    );
  };

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to={`${baseUrl}/services`} 
              className="inline-flex items-center text-white/70 hover:text-cosmic-blue transition-colors"
            >
              <ArrowLeft className={`${isArabic ? 'ml-2' : 'mr-2'} h-4 w-4`} />
              <span>{isArabic ? "العودة إلى الخدمات" : "Back to Services"}</span>
            </Link>
          </div>
          
          {/* Hero */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-white/70 text-lg mb-6 max-w-2xl">
                  {service.description}
                </p>
                
                <Link to={`${baseUrl}/contact`} className="cosmic-button">
                  <span>{t('buttons.launchProject')}</span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:ml-auto"
              >
                {getIconComponent(service.icon)}
              </motion.div>
            </div>
          </div>
          
          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="cosmic-card">
                <h2 className="text-2xl font-bold mb-6">
                  {isArabic ? "نظرة عامة على الخدمة" : "Service Overview"}
                </h2>
                <p className="text-white/80 mb-8">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic ? "ما نقدمه" : "What We Offer"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className={`${isArabic ? 'ml-3' : 'mr-3'} h-5 w-5 text-cosmic-${service.color} mt-0.5`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="cosmic-card text-center">
                <h2 className="text-2xl font-bold mb-6">
                  {isArabic ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
                </h2>
                <p className="text-white/80 mb-6">
                  {isArabic 
                    ? "اتصل بنا اليوم لمناقشة مشروعك ومعرفة كيف يمكننا مساعدتك في تحقيق أهدافك."
                    : "Contact us today to discuss your project and find out how we can help you achieve your goals."
                  }
                </p>
                <Link to={`${baseUrl}/contact`} className="cosmic-button w-full">
                  <span>{t('buttons.launchProject')}</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isArabic ? "عملية العمل لدينا" : "Our Process"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="cosmic-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cosmic-blue font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {isArabic ? "التخطيط والاستراتيجية" : "Planning & Strategy"}
                </h3>
                <p className="text-white/70 text-sm">
                  {isArabic 
                    ? "نقوم بتحليل احتياجاتك وتطوير استراتيجية لتلبية أهدافك."
                    : "We analyze your needs and develop a strategy to meet your objectives."
                  }
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="cosmic-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cosmic-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {isArabic ? "التصميم والتطوير" : "Design & Development"}
                </h3>
                <p className="text-white/70 text-sm">
                  {isArabic 
                    ? "نقوم بتصميم وبناء حلول مخصصة تلبي احتياجاتك الفريدة."
                    : "We design and build custom solutions tailored to your unique needs."
                  }
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="cosmic-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cosmic-pink font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {isArabic ? "الاختبار والتنفيذ" : "Testing & Deployment"}
                </h3>
                <p className="text-white/70 text-sm">
                  {isArabic 
                    ? "نضمن أن كل شيء يعمل بشكل مثالي قبل الإطلاق."
                    : "We ensure everything works flawlessly before launch."
                  }
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="cosmic-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cosmic-blue font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {isArabic ? "الدعم والتحسين" : "Support & Optimization"}
                </h3>
                <p className="text-white/70 text-sm">
                  {isArabic 
                    ? "نقدم دعمًا مستمرًا ونبحث باستمرار عن طرق للتحسين."
                    : "We provide ongoing support and continuously look for ways to improve."
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
