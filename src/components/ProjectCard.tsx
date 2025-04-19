import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
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
  id = "1",
  demoUrl,
  youtubeUrl
}) => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  return (
    <Link
      to={`/project/${id}`}
      className="block w-full"
      aria-label={`View ${title} details`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className="group relative overflow-hidden rounded-xl bg-card h-full hover:transform hover:scale-[1.02] transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-cosmic-blue/20 text-cosmic-blue rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 group-hover:text-glow transition-colors duration-300 line-clamp-1">
            {title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2 h-10">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-cosmic-blue flex items-center">
              <ExternalLink className="mx-1.5 w-3.5 h-3.5" />
              <span className="text-xs">{isArabic ?
                "التفاصيل" :
                "View Project"
              }</span>
            </span>

            {(demoUrl || youtubeUrl) && (
              <div className="flex items-center space-x-3">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    className="flex items-center text-xs text-white/70 hover:text-cosmic-blue transition-colors duration-300"
                    aria-label={`View ${title} demo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye className="mx-1 w-3.5 h-3.5" />
                    {isArabic ?
                      "ديمو" :
                      "Demo"
                    }
                  </a>
                )}

                {youtubeUrl && (
                  <a
                    href={youtubeUrl}
                    className="flex items-center text-xs text-white/70 hover:text-cosmic-purple transition-colors duration-300"
                    aria-label={`Watch ${title} video`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Youtube className="mx-1 w-3.5 h-3.5" />
                    {isArabic ?
                      "فيديو" :
                      "Video"
                    }
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
