import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Video, ArrowUpRight, PlayCircle, Phone } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import projectsData from "@/data/projects.json";
import { useLanguage } from "@/context/LanguageContext";
import ImagePreview from '@/components/ImagePreview';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  const projects = language === 'en' ? projectsData.en : projectsData.ar;
  const [project, setProject] = useState(projects.find(p => p.id === id));
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                        {isArabic ? "الرابط" : "link"}
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

                  {project.googlePlayLink && (
                    <a 
                      href={project.googlePlayLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 bg-black/20 hover:bg-black/40 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.016 2.016 0 0 1-.497-1.307V3.121c0-.485.18-.954.497-1.307zm9.458 10.186l2.974-2.974 5.94 3.764c.651.337.651 1.196 0 1.533l-5.94 3.764-2.974-2.974 2.974-2.974-2.974-2.974zm-1.275 1.275L3.609 22.186c-.379-.151-.61-.52-.61-.914v-.063l8.793-8.793zm0-2.55L3.609 1.814c.379-.151.61-.52.61-.914v-.063l8.793 8.793z"/>
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-xs opacity-80">
                            {isArabic ? "احصل عليه على" : "GET IT ON"}
                          </span>
                          <span className="text-sm font-semibold">
                            {isArabic ? "جوجل بلاي" : "Google Play"}
                          </span>
                        </div>
                      </span>
                    </a>
                  )}

                  {project.appStoreLink && (
                    <a 
                      href={project.appStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 bg-black/20 hover:bg-black/40 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-xs opacity-80">
                            {isArabic ? "متوفر على" : "Download on the"}
                          </span>
                          <span className="text-sm font-semibold">
                            {isArabic ? "آب ستور" : "App Store"}
                          </span>
                        </div>
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
                  loading="lazy"
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
          
          {/* Project Screenshots Gallery */}
          {project.images && project.images.length > 0 && (
            <>
              <div className="cosmic-card mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  {isArabic ? "لقطات من المشروع" : "Project Screenshots"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.map((imageUrl, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsPreviewOpen(true);
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-300"
                        style={{
                          aspectRatio: imageUrl.toLowerCase().includes('mobile') ? '9/16' : '16/9',
                          objectFit: 'cover'
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="cosmic-button-secondary">
                          {isArabic ? "معاينة" : "Preview"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <ImagePreview
                images={project.images}
                currentIndex={currentImageIndex}
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                onNext={() => setCurrentImageIndex(prev => Math.min(prev + 1, project.images.length - 1))}
                onPrevious={() => setCurrentImageIndex(prev => Math.max(prev - 1, 0))}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
