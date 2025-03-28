
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { useLanguage } from "@/context/LanguageContext";

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const projects = language === 'en' ? projectsData.en : projectsData.ar;
  
  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const translatedAllText = t('portfolio.filters.all');
  
  // Filter projects by category
  const filteredProjects = activeCategory && activeCategory !== translatedAllText
    ? projects.filter(project => project.category === activeCategory)
    : projects;

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
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              {t('portfolio.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>استكشف <span className="text-glow-purple">محفظتنا</span></>
              ) : (
                <>Explore Our <span className="text-glow-purple">Portfolio</span></>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('portfolio.description')}
            </p>
          </motion.div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === "All" || category === translatedAllText ? null : category)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  (category === "All" || category === translatedAllText) && !activeCategory || category === activeCategory
                    ? "bg-cosmic-blue/20 border-cosmic-blue/50 text-cosmic-blue"
                    : "border-white/10 hover:border-cosmic-blue/30 text-white/70 hover:text-white"
                }`}
              >
                {category === "All" ? translatedAllText : category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={Number(project.id)} // Converted to number
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
