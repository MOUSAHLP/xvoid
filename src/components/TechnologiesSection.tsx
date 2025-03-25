
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: "/lovable-uploads/f7f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Building interactive user interfaces with React's component-based architecture"
  },
  {
    name: "Node.js",
    icon: "/lovable-uploads/a2f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Powerful backend solutions with JavaScript runtime environment"
  },
  {
    name: "TensorFlow",
    icon: "/lovable-uploads/b3f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Advanced machine learning and AI model development and deployment"
  },
  {
    name: "MongoDB",
    icon: "/lovable-uploads/c4f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Scalable NoSQL database solutions for modern applications"
  },
  {
    name: "AWS",
    icon: "/lovable-uploads/d5f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Cloud infrastructure and services for reliable application hosting"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Versatile programming language for web, data science, and automation"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Containerization platform for consistent development and deployment"
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    description: "Query language for APIs that provides a more efficient alternative to REST"
  }
];

interface TechnologiesSectionProps {
  showAll?: boolean;
  language?: "en" | "ar";
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ 
  showAll = false, 
  language = "en" 
}) => {
  const techsToShow = showAll ? technologies : technologies.slice(0, 5);
  
  const translations = {
    en: {
      title: "Technologies We Use",
      subtitle: "We leverage cutting-edge technologies to build robust, scalable, and innovative digital solutions.",
      viewAll: "View All Technologies",
      sectionLabel: "OUR TECH STACK"
    },
    ar: {
      title: "التقنيات التي نستخدمها",
      subtitle: "نحن نستفيد من أحدث التقنيات لبناء حلول رقمية قوية وقابلة للتوسع ومبتكرة.",
      viewAll: "عرض جميع التقنيات",
      sectionLabel: "مجموعة التقنيات لدينا"
    }
  };

  const t = translations[language];
  
  return (
    <section className={`py-20 relative overflow-hidden ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title} <span className="text-glow">Tech Stack</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {techsToShow.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cosmic-card hover:border-cosmic-blue/30 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white/5 rounded-full">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-colors duration-300">
                  {tech.name}
                </h3>
                {showAll && (
                  <p className="text-white/70 text-sm">
                    {tech.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Link to="/technologies" className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 group">
              {t.viewAll}
              <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologiesSection;
