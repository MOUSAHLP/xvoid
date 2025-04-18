
import React from "react";
import StarBackground from "@/components/StarBackground";
import { motion } from "framer-motion";
import teamData from "@/data/team.json";
import { 
  Rocket, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import timelineData from "@/data/timeline.json";

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  // Get timeline data based on language
  const timeline = language === 'en' ? timelineData.en : timelineData.ar;
  
  // Team data with translations
  const team = language === 'en' ? teamData.en : teamData.ar;
  
  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {isArabic ? (
                <>عن <span className="text-glow">X-POSITRON</span></>
              ) : (
                <>About <span className="text-glow">X-POSITRON</span></>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              {isArabic ? 
                "نحن فريق من التقنيين والمصممين والحالمين الشغوفين نبني حلولاً رقمية تتجاوز الحدود." : 
                "We are a team of passionate technologists, designers, and dreamers building digital solutions that transcend boundaries."
              }
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
                {t('about.mission.title')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.mission.heading')}
              </h2>
              <p className="text-white/70 mb-6">
                {t('about.mission.description')}
              </p>
              <p className="text-white/70">
                {t('about.mission.description2')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-cosmic-blue/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-cosmic-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('about.purpose.title')}</h3>
                    <p className="text-white/70 text-sm">{t('about.purpose.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-cosmic-purple/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-cosmic-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('about.user.title')}</h3>
                    <p className="text-white/70 text-sm">{t('about.user.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full bg-cosmic-blue/5 backdrop-blur-xl border border-cosmic-blue/20 p-10 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-cosmic-blue animate-float" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-6 h-6 rounded-full bg-cosmic-blue/30 animate-orbit" style={{ top: '10%', left: '10%' }}></div>
                <div className="absolute w-4 h-4 rounded-full bg-cosmic-purple/30 animate-orbit" style={{ top: '70%', left: '20%', animationDelay: '-5s' }}></div>
                <div className="absolute w-5 h-5 rounded-full bg-cosmic-pink/30 animate-orbit" style={{ top: '40%', right: '10%', animationDelay: '-10s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              {t('about.journey.title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.journey.heading')}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('about.journey.description')}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-pink"></div>
            
            {/* Timeline entries */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="cosmic-card"
                    >
                      <span className="inline-block text-glow font-bold mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="relative md:w-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-cosmic-blue flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-cosmic-blue rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              {t('about.values.title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.values.heading')}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.values_list.innovation.title')}</h3>
              <p className="text-white/70">{t('about.values_list.innovation.description')}</p>
            </div>
            
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-cosmic-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.values_list.excellence.title')}</h3>
              <p className="text-white/70">{t('about.values_list.excellence.description')}</p>
            </div>
            
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-cosmic-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.values_list.global.title')}</h3>
              <p className="text-white/70">{t('about.values_list.global.description')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              {t('about.team.title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.team.heading')}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cosmic-card group"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent opacity-60"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cosmic-blue text-sm mb-3">{member.position}</p>
                <p className="text-white/70 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
