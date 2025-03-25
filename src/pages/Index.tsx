
import React from "react";
import Hero from "@/components/Hero";
import StarBackground from "@/components/StarBackground";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, BrainCircuit, ArrowRight, Users, Globe, Shield, Clock } from "lucide-react";
import TechnologiesSection from "../components/TechnologiesSection";
import { useLanguage } from "@/context/LanguageContext";
import { useLocation } from "react-router-dom";

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');
  const baseUrl = isArabic ? '/ar' : '';
  
  // Mock data for services
  const services = [
    {
      id: 1,
      title: isArabic ? "تطوير الويب" : "Web Development",
      description: isArabic ? "نقوم بإنشاء تطبيقات ويب سريعة وآمنة وسريعة الاستجابة باستخدام أحدث التقنيات." : "We create responsive, fast and secure web applications using cutting-edge technologies.",
      icon: <Monitor className="w-7 h-7 text-cosmic-blue" />,
      color: "blue" as const
    },
    {
      id: 2,
      title: isArabic ? "تطبيقات الموبايل" : "Mobile Applications",
      description: isArabic ? "تطبيقات الجوال الأصلية وعبر الأنظمة الأساسية التي توفر تجارب مستخدم استثنائية." : "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: <Smartphone className="w-7 h-7 text-cosmic-purple" />,
      color: "purple" as const
    },
    {
      id: 3,
      title: isArabic ? "حلول الذكاء الاصطناعي" : "AI Solutions",
      description: isArabic ? "أنظمة ذكية وحلول تعلم آلي لأتمتة العمليات وتحسينها." : "Intelligent systems and machine learning solutions to automate and optimize processes.",
      icon: <BrainCircuit className="w-7 h-7 text-cosmic-pink" />,
      color: "pink" as const
    }
  ];
  
  // Mock data for projects
  const projects = [
    {
      id: "1",
      title: isArabic ? "لوحة تحكم Nebula المالية" : "Nebula Finance Dashboard",
      description: isArabic ? "لوحة مالية شاملة مع تصور البيانات في الوقت الفعلي ورؤى مدعومة بالذكاء الاصطناعي." : "A comprehensive financial dashboard with real-time data visualization and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: isArabic ? "تطبيق ويب" : "Web Application"
    },
    {
      id: "2",
      title: isArabic ? "تطبيق Quantum Health للجوال" : "Quantum Health Mobile App",
      description: isArabic ? "تطبيق لتتبع الصحة مع توصيات شخصية وتكامل سلس مع الأجهزة." : "A health tracking application with personalized recommendations and seamless device integration.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      category: isArabic ? "تطبيق جوال" : "Mobile App"
    },
    {
      id: "3",
      title: isArabic ? "منصة Stellar للتجارة الإلكترونية" : "Stellar E-commerce Platform",
      description: isArabic ? "حل متكامل للتجارة الإلكترونية مع توصيات المنتجات المدعومة بالذكاء الاصطناعي والتحليلات." : "A complete e-commerce solution with AI-powered product recommendations and analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
      category: isArabic ? "تطبيق ويب" : "Web Application"
    },
    {
      id: "4",
      title: isArabic ? "شبكة Cosmos الاجتماعية" : "Cosmos Social Network",
      description: isArabic ? "منصة اجتماعية من الجيل التالي مع ميزات خصوصية متقدمة وتنسيق المحتوى." : "A next-generation social platform with advanced privacy features and content curation.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      category: isArabic ? "ويب وجوال" : "Web & Mobile"
    }
  ];
  
  // Stats data
  const stats = [
    { id: 1, value: "200+", label: isArabic ? "مشروع منجز" : "Projects Completed" },
    { id: 2, value: "50+", label: isArabic ? "عضو في الفريق" : "Team Members" },
    { id: 3, value: "15+", label: isArabic ? "دولة مخدومة" : "Countries Served" },
    { id: 4, value: "8", label: isArabic ? "سنوات من التميز" : "Years of Excellence" }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: isArabic ? "قامت X-POSITRON بتحويل أعمالنا من خلال حلولهم المبتكرة. اهتمامهم بالتفاصيل وتفانيهم في التميز لا مثيل له." : "X-POSITRON transformed our business with their innovative solutions. Their attention to detail and dedication to excellence is unmatched.",
      author: isArabic ? "سارة جونسون" : "Sarah Johnson",
      position: isArabic ? "الرئيس التنفيذي، TechFusion" : "CEO, TechFusion",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      quote: isArabic ? "كان العمل مع فريق X-POSITRON بمثابة نقلة نوعية لشركتنا الناشئة. لقد قدموا أكثر من توقعاتنا وضمن الجدول الزمني المحدد." : "Working with the X-POSITRON team was a game-changer for our startup. They delivered beyond our expectations and within our timeline.",
      author: isArabic ? "مايكل تشين" : "Michael Chen",
      position: isArabic ? "مؤسس، NexGen" : "Founder, NexGen",
      avatar: "https://i.pravatar.cc/150?img=2"
    }
  ];
  
  return (
    <main className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      
      {/* Hero Section */}
      <Hero />
      
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
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                delay={index}
              />
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                delay={index}
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
      
      {/* Testimonials Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="cosmic-card">
                <div className="flex items-start mb-4">
                  <div className={`${isArabic ? 'ml-4' : 'mr-4'}`}>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cosmic-blue">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.author}</h4>
                    <p className="text-white/70 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section - Now AFTER testimonials */}
      <TechnologiesSection language={isArabic ? "ar" : "en"} />
      
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
