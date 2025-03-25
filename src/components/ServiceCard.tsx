
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "purple" | "pink";
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  color,
  delay
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    blue: {
      glow: "shadow-neon",
      textGlow: "text-glow",
      border: "border-cosmic-blue/30",
      bg: "from-cosmic-blue/20 to-transparent"
    },
    purple: {
      glow: "shadow-neon-purple",
      textGlow: "text-glow-purple",
      border: "border-cosmic-purple/30",
      bg: "from-cosmic-purple/20 to-transparent"
    },
    pink: {
      glow: "shadow-neon-pink",
      textGlow: "text-glow-pink",
      border: "border-cosmic-pink/30",
      bg: "from-cosmic-pink/20 to-transparent"
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={`cosmic-card ${colorClasses[color].border} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${colorClasses[color].bg} rounded-xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500`} 
      />
      
      {/* Planet icon */}
      <div className="relative mb-6">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center 
                    bg-white/5 backdrop-blur-sm ${isHovered ? colorClasses[color].glow : ''}
                    transition-all duration-500`}
        >
          {icon}
        </div>
        
        {/* Orbiting particle */}
        <div 
          className={`absolute w-2 h-2 rounded-full bg-cosmic-${color === 'blue' ? 'blue' : color === 'purple' ? 'purple' : 'pink'} 
                     top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{
            animation: isHovered ? 'orbit 8s linear infinite' : 'none',
            transformOrigin: '8px 8px'
          }}
        />
      </div>
      
      {/* Content */}
      <h3 className={`text-xl font-bold mb-3 ${colorClasses[color].textGlow}`}>
        {title}
      </h3>
      
      <p className="text-white/70 mb-4">
        {description}
      </p>
      
      <a 
        href="#" 
        className={`inline-flex items-center text-sm font-medium ${colorClasses[color].textGlow} group-hover:underline`}
      >
        Learn more
        <ExternalLink className="ml-1 w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
