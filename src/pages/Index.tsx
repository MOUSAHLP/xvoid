import React from "react";
import StarBackground from "@/components/StarBackground";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, BrainCircuit, ArrowRight, Users, Globe, Shield, Clock } from "lucide-react";
import TechnologiesSection from "../components/TechnologiesSection";
import { useLanguage } from "@/context/LanguageContext";
import { useLocation } from "react-router-dom";
import servicesData from "@/data/services.json";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TechStackCarousel from "@/components/TechStackCarousel";
import technologiesData from "@/data/technologies.json";
import SpaceTravelBackground from "@/components/SpaceTravelBackground";
import projectsData from "@/data/projects.json";
import FAQSection from "@/components/FAQSection";

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  
  // Get first 3 services based on language
  const allServices = isArabic ? servicesData.ar : servicesData.en;
  const services = allServices.slice(0, 3);
  
  // Icons mapping for services
  const iconComponents = {
    "Monitor": <Monitor className="w-7 h-7 text-cosmic-blue" />,
    "Smartphone": <Smartphone className="w-7 h-7 text-cosmic-purple" />,
    "BrainCircuit": <BrainCircuit className="w-7 h-7 text-cosmic-pink" />
  };
  
  // Color mapping for services
  const colorMapping = {
    1: "blue" as const,
    2: "purple" as const,
    3: "pink" as const
  };
  
  // Replace the mock projects data with this
  const allProjects = language === 'en' ? projectsData.en : projectsData.ar;
  // Get first 4 projects for the homepage
  const projects = allProjects.slice(0, 4);
  
  // Stats data
  const stats = [
    { id: 1, value: "20+", label: isArabic ? "مشروع منجز" : "Projects Completed" },
    { id: 2, value: "10+", label: isArabic ? "عضو في الفريق" : "Team Members" },
    { id: 3, value: "15+", label: isArabic ? "دولة مخدومة" : "Countries Served" },
    { id: 4, value: "5", label: isArabic ? "سنوات من التميز" : "Years of Excellence" }
  ];
  
  // Testimonials data
  const testimonials = projects.map(project => ({
    id: project.id,
    quote: project.testimonial.quote,
    author: project.testimonial.author,
    position: project.testimonial.position,
    avatar: project.image
  })).filter(t => t.quote && t.author && t.position);
  
  // Process technologies data for the carousel
  const flattenedTechnologies = technologiesData.categories.flatMap((category, categoryIndex) => {
    return category.technologies.map((tech, techIndex) => ({
      id: categoryIndex * 100 + techIndex,
      name: tech.name,
      icon: tech.icon,
      category: category.name[language]
    }));
  });
  
  return (
    <main className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Space Travel Background */}
      <SpaceTravelBackground />
      
      <div className="container mx-auto relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Hero Content */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-display-large font-bold mb-6 leading-tight">
              {isArabic ? (
                <>نبني <span className="text-glow">عوالم</span> رقمية <span className="text-glow-purple">مذهلة</span></>
              ) : (
                <><span className="text-glow">Crafting</span> Digital <span className="text-glow-purple">Universes</span></>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {isArabic
                ? "نبني تطبيقات ويب وجوال متطورة تتجاوز الحدود وتستكشف آفاقًا تكنولوجية جديدة."
                : "We build cutting-edge web and mobile applications that transcend boundaries and explore new technological frontiers."
              }
            </p>
            
            <div className="flex flex-col items-center">
              <Link to={`${baseUrl}/contact`} className="cosmic-button group">
                <span className="flex items-center justify-center">
                  {isArabic ? "أطلق مشروعك" : "Launch Your Project"}
                  <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-5 h-5 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
              </Link>
              
              {/* Scroll indicator moved here */}
              <div className="flex flex-col items-center mt-10">
                <span className="text-white/50 text-sm mb-2">
                  {isArabic ? "استكشف عالمنا" : "Explore our space"}
                </span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                  <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full mt-2 animate-star-wave"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              {isArabic ? "خدماتنا" : "OUR SERVICES"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "حلول رقمية لكل احتياج" : "Digital Solutions for Every Need"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic 
                ? "نقدم مجموعة شاملة من الخدمات لمساعدة الشركات على التنقل في المشهد الرقمي وتحقيق أهدافها."
                : "We offer a comprehensive range of services to help businesses navigate the digital landscape and achieve their goals."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const iconKey = service.icon as keyof typeof iconComponents;
              return (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={iconComponents[iconKey] || iconComponents.Monitor}
                  color={colorMapping[service.id as keyof typeof colorMapping] || "blue"}
                  delay={index}
                />
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to={`${baseUrl}/services`} className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 group">
              {isArabic ? "عرض جميع الخدمات" : "View All Services"}
              <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-4 h-4 transform transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-cosmic-dark/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-glow">
                  {stat.value}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              {isArabic ? "لماذا تختارنا" : "WHY CHOOSE US"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "نهجنا نحو التميز" : "Our Approach to Excellence"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "نحن نجمع بين الخبرة التقنية والتفكير الإبداعي لتقديم حلول تفوق التوقعات."
                : "We combine technical expertise with creative thinking to deliver solutions that exceed expectations."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isArabic ? "فريق خبير" : "Expert Team"}</h3>
              <p className="text-white/70">{isArabic ? "محترفون مهرة ذوو معرفة عميقة بالصناعة." : "Skilled professionals with deep industry knowledge."}</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-cosmic-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isArabic ? "وصول عالمي" : "Global Reach"}</h3>
              <p className="text-white/70">{isArabic ? "خدمة العملاء عبر القارات بحلول مخصصة." : "Serving clients across continents with tailored solutions."}</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cosmic-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isArabic ? "تركيز على الأمان" : "Security Focus"}</h3>
              <p className="text-white/70">{isArabic ? "أمان مدمج لراحة البال والامتثال." : "Built-in security for peace of mind and compliance."}</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isArabic ? "تسليم في الوقت المحدد" : "Timely Delivery"}</h3>
              <p className="text-white/70">{isArabic ? "الالتزام بالمواعيد النهائية دون المساس بالجودة." : "Meeting deadlines without compromising on quality."}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              {isArabic ? "أعمالنا" : "OUR WORK"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "مشاريع مميزة" : "Featured Projects"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "استكشف محفظتنا من الحلول الرقمية المبتكرة التي ساعدت الشركات على تحقيق أهدافها."
                : "Explore our portfolio of innovative digital solutions that have helped businesses achieve their goals."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                delay={index}
                demoUrl={project.demoLink}
                youtubeUrl={project.videoLink}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to={`${baseUrl}/portfolio`} className="cosmic-button group">
              <span className="flex items-center">
                {isArabic ? "عرض جميع المشاريع" : "View All Projects"}
                <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-5 h-5 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Updated to use carousel */}
      <section className="py-20 relative bg-cosmic-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              {isArabic ? "الشهادات" : "TESTIMONIALS"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "لا تأخذ كلمتنا فقط. اسمع ما يقوله عملاؤنا عن العمل معنا."
                : "Don't just take our word for it. Hear what our clients have to say about working with us."
              }
            </p>
          </div>
          
          {/* Testimonials Carousel */}
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
      
      {/* Technologies Section - Now using carousel */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              {isArabic ? "التقنيات" : "TECHNOLOGIES"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "مجموعة تقنياتنا" : "Our Tech Stack"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "نستخدم مجموعة من أحدث التقنيات لبناء حلول رقمية قوية ومستدامة."
                : "We use a range of cutting-edge technologies to build robust and sustainable digital solutions."
              }
            </p>
          </div>
          
          {/* Tech Stack Carousel */}
          <TechStackCarousel technologies={flattenedTechnologies} />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              {isArabic ? "الأسئلة الشائعة" : "FAQ"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "الأسئلة المتكررة" : "Common Questions"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {isArabic
                ? "اعثر على إجابات لأكثر الأسئلة شيوعًا حول خدماتنا"
                : "Find answers to the most common questions about our services"
              }
            </p>
          </div>
          
          <FAQSection />
          
          <div className="text-center mt-12">
            <Link to={`${baseUrl}/faq`} className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 group">
              {isArabic ? "عرض جميع الأسئلة" : "View All Questions"}
              <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-4 h-4 transform transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isArabic 
                ? <>هل أنت جاهز لإطلاق <span className="text-glow">رحلتك الرقمية</span>؟</>
                : <>Ready to Launch Your <span className="text-glow">Digital Journey</span>?</>
              }
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {isArabic
                ? "دعنا نبتكر شيئًا استثنائيًا معًا. فريقنا جاهز لإحياء رؤيتك."
                : "Let's create something extraordinary together. Our team is ready to bring your vision to life."
              }
            </p>
            <Link to={`${baseUrl}/contact`} className="cosmic-button group">
              <span className="flex items-center">
                {isArabic ? "ابدأ اليوم" : "Get Started Today"}
                <ArrowRight className={`${isArabic ? 'mr-2 transform rotate-180' : 'ml-2'} w-5 h-5 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
