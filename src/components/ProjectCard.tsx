
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  delay: number;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  delay,
  demoUrl,
}) => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`${baseUrl}/project/${id}`);
  };
  
  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onClick={handleClick}
      className="cosmic-card h-full overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent opacity-70"></div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-cosmic-blue/30 backdrop-blur-sm rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-cosmic-blue transition-colors">
        {title}
      </h3>
      
      <p className="text-white/70 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <button
          className="text-sm font-medium text-cosmic-blue hover:text-cosmic-blue-light transition-colors"
        >
          {t('buttons.details')}
        </button>
        
        {demoUrl && (
          <button
            onClick={handleDemoClick}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center"
          >
            {t('buttons.seeDemo')}
            <ExternalLink className="ml-1 w-3 h-3" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
