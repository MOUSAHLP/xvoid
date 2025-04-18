
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, Smartphone, BrainCircuit, Palette, ShoppingCart, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import servicesData from "@/data/services.json";

const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  // Get services data based on language
  const services = isArabic ? servicesData.ar : servicesData.en;
  
  // Icons mapping for services
  const iconComponents = {
    "Monitor": <Monitor className="w-7 h-7 text-cosmic-blue" />,
    "Smartphone": <Smartphone className="w-7 h-7 text-cosmic-purple" />,
    "BrainCircuit": <BrainCircuit className="w-7 h-7 text-cosmic-pink" />,
    "Palette": <Palette className="w-7 h-7 text-cosmic-blue" />,
    "ShoppingCart": <ShoppingCart className="w-7 h-7 text-cosmic-purple" />,
    "TrendingUp": <TrendingUp className="w-7 h-7 text-cosmic-pink" />,
  };

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
              {isArabic ? "خبراتنا" : "OUR EXPERTISE"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>حلول رقمية <span className="text-glow">لكل احتياج</span></>
              ) : (
                <>Digital Solutions for <span className="text-glow">Every Need</span></>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "نقدم مجموعة شاملة من الخدمات لمساعدة الشركات على التنقل في المشهد الرقمي وتحقيق أهدافها."
                : "We offer a comprehensive range of services to help businesses navigate the digital landscape and achieve their goals."
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const iconKey = service.icon as keyof typeof iconComponents;
              return (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={iconComponents[iconKey] || iconComponents.Monitor}
                  color={service.color || "blue"}
                  delay={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
