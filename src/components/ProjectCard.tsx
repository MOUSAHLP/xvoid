
import React from "react";
import { motion } from "framer-motion";
import { Eye, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay: number;
  id?: string;
  demoUrl?: string;
  youtubeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  delay,
  id = "1", // Default ID if none provided
  demoUrl,
  youtubeUrl
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-card"
    >
      {/* Image Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-cosmic-blue/20 backdrop-blur-sm border border-cosmic-blue/30 rounded-full text-cosmic-blue">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="flex items-center text-sm text-white/70 hover:text-cosmic-blue transition-colors duration-300"
              aria-label={`View ${title} demo`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="mr-1 w-4 h-4" />
              Demo
            </a>
          )}
          
          {youtubeUrl && (
            <a 
              href={youtubeUrl} 
              className="flex items-center text-sm text-white/70 hover:text-cosmic-purple transition-colors duration-300"
              aria-label={`Watch ${title} video`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-1 w-4 h-4" />
              Video
            </a>
          )}
          
          <Link 
            to={`/project/${id}`}
            className="flex items-center text-sm text-white/70 hover:text-cosmic-pink transition-colors duration-300 ml-auto"
            aria-label={`View ${title} details`}
          >
            Details
            <ExternalLink className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
