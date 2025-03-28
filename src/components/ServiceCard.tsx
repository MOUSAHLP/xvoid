
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "purple" | "pink";
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  color,
  delay,
}) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  const navigate = useNavigate();
  
  const cardColors = {
    blue: "from-cosmic-blue/10 to-cosmic-blue/5 hover:border-cosmic-blue/40",
    purple: "from-cosmic-purple/10 to-cosmic-purple/5 hover:border-cosmic-purple/40",
    pink: "from-cosmic-pink/10 to-cosmic-pink/5 hover:border-cosmic-pink/40",
  };
  
  const handleClick = () => {
    navigate(`${baseUrl}/service/${id}`);
  };
  
  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`cosmic-card bg-gradient-to-bl ${cardColors[color]} cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 group`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4 line-clamp-3">{description}</p>
      <button
        className={`text-sm font-medium ${
          color === "blue" 
            ? "text-cosmic-blue hover:text-cosmic-blue-light" 
            : color === "purple" 
              ? "text-cosmic-purple hover:text-cosmic-purple-light" 
              : "text-cosmic-pink hover:text-cosmic-pink-light"
        } transition-colors flex items-center`}
      >
        {isArabic ? "معرفة المزيد" : "Learn More"}
        <motion.span
          className="ml-1"
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {isArabic ? "←" : "→"}
        </motion.span>
      </button>
    </motion.div>
  );
};

export default ServiceCard;
