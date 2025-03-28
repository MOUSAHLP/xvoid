
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SpaceTravelBackground from "./SpaceTravelBackground";
import { useLanguage } from "@/context/LanguageContext";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Space Travel Background */}
      <SpaceTravelBackground />
      
      <div className="container mx-auto relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Hero Content */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-display-large font-bold mb-6 leading-tight">
              {isArabic ? (
                <>نبني <span className="text-glow">عوالم</span> رقمية <span className="text-glow-purple">مذهلة</span></>
              ) : (
                <><span className="text-glow">Crafting</span> Digital <span className="text-glow-purple">Universes</span></>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {isArabic
                ? "نبني تطبيقات ويب وجوال متطورة تتجاوز الحدود وتستكشف آفاقًا تكنولوجية جديدة."
                : "We build cutting-edge web and mobile applications that transcend boundaries and explore new technological frontiers."
              }
            </p>
            
            <div className="flex flex-col items-center">
              <Link to={`${baseUrl}/contact`} className="cosmic-button group">
                <span className="flex items-center justify-center">
                  {isArabic ? "أطلق مشروعك" : "Launch Your Project"}
                  <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-5 h-5 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
              </Link>
              
              {/* Scroll indicator moved here */}
              <div className="flex flex-col items-center mt-10">
                <span className="text-white/50 text-sm mb-2">
                  {isArabic ? "استكشف عالمنا" : "Explore our space"}
                </span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                  <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full mt-2 animate-star-wave"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
