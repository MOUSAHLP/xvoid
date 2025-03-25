
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import TechnologiesSection from "@/components/TechnologiesSection";
import { useLocation } from "react-router-dom";

const Technologies: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.includes("/ar/") ? "ar" : "en";

  return (
    <>
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
              {language === "en" ? "TECH EXPERTISE" : "خبرة تقنية"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === "en" ? (
                <>Our <span className="text-glow">Technology</span> Stack</>
              ) : (
                <>مجموعة <span className="text-glow">التقنيات</span> لدينا</>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {language === "en" 
                ? "Explore the cutting-edge technologies we use to create powerful digital solutions for our clients."
                : "استكشف أحدث التقنيات التي نستخدمها لإنشاء حلول رقمية قوية لعملائنا."
              }
            </p>
          </motion.div>
          
          <TechnologiesSection showAll={true} language={language as "en" | "ar"} />
        </div>
      </section>
    </>
  );
};

export default Technologies;
