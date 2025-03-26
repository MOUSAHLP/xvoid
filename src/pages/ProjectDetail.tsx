
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Video, ArrowUpRight } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import projectsData from "@/data/projects.json";
import { useLanguage } from "@/context/LanguageContext";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  const projects = language === 'en' ? projectsData.en : projectsData.ar;
  const [project, setProject] = useState(projects.find(p => p.id === id));

  useEffect(() => {
    // Update project when language changes
    setProject(projects.find(p => p.id === id));
  }, [language, id, projects]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {isArabic ? "المشروع غير موجود" : "Project Not Found"}
          </h1>
          <p className="mb-4">
            {isArabic ? "عذراً، لم نتمكن من العثور على المشروع الذي تبحث عنه." : "Sorry, we couldn't find the project you're looking for."}
          </p>
          <Link to={`${baseUrl}/portfolio`} className="cosmic-button">
            <span>
              {isArabic ? "العودة إلى المشاريع" : "Back to Portfolio"}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to={`${baseUrl}/portfolio`} 
              className="inline-flex items-center text-white/70 hover:text-cosmic-blue transition-colors"
            >
              <ArrowLeft className={`${isArabic ? 'ml-2' : 'mr-2'} h-4 w-4`} />
              <span>{isArabic ? "العودة إلى المشاريع" : "Back to Portfolio"}</span>
            </Link>
          </div>
          
          {/* Hero */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-white/70 text-lg mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cosmic-button"
                    >
                      <span className="flex items-center">
                        <Globe className={`${isArabic ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                        {isArabic ? "مشاهدة العرض" : "See Demo"}
                        <ArrowUpRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                      </span>
                    </a>
                  )}
                  
                  {project.videoLink && (
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cosmic-button-secondary"
                    >
                      <span className="flex items-center">
                        <Video className={`${isArabic ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                        {isArabic ? "مشاهدة الفيديو" : "Watch Video"}
                        <ArrowUpRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="cosmic-card">
                <h2 className="text-2xl font-bold mb-6">
                  {isArabic ? "نظرة عامة على المشروع" : "Project Overview"}
                </h2>
                <p className="text-white/80 mb-6">{project.fullDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {isArabic ? "التحدي" : "The Challenge"}
                  </h3>
                  <p className="text-white/80">{project.challenge}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {isArabic ? "الحل" : "Our Solution"}
                  </h3>
                  <p className="text-white/80">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {isArabic ? "النتائج" : "The Results"}
                  </h3>
                  <p className="text-white/80">{project.results}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="cosmic-card mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  {isArabic ? "التقنيات المستخدمة" : "Technologies Used"}
                </h2>
                <ul className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cosmic-blue mr-3"></div>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.testimonial && (
                <div className="cosmic-card">
                  <h2 className="text-2xl font-bold mb-6">
                    {isArabic ? "شهادة العميل" : "Client Testimonial"}
                  </h2>
                  <blockquote className="italic text-white/80 mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <strong className="block">{project.testimonial.author}</strong>
                      <span className="text-sm text-white/70">{project.testimonial.position}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Projects placeholder - you can implement this if needed */}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
