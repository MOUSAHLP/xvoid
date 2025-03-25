
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import StarBackground from "@/components/StarBackground";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, BrainCircuit, ArrowRight, Users, Globe, Shield, Clock } from "lucide-react";

const Index: React.FC = () => {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create responsive, fast and secure web applications using cutting-edge technologies.",
      icon: <Monitor className="w-7 h-7 text-cosmic-blue" />,
      color: "blue" as const
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: <Smartphone className="w-7 h-7 text-cosmic-purple" />,
      color: "purple" as const
    },
    {
      id: 3,
      title: "AI Solutions",
      description: "Intelligent systems and machine learning solutions to automate and optimize processes.",
      icon: <BrainCircuit className="w-7 h-7 text-cosmic-pink" />,
      color: "pink" as const
    }
  ];
  
  // Mock data for projects
  const projects = [
    {
      id: "1",
      title: "Nebula Finance Dashboard",
      description: "A comprehensive financial dashboard with real-time data visualization and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Web Application"
    },
    {
      id: "2",
      title: "Quantum Health Mobile App",
      description: "A health tracking application with personalized recommendations and seamless device integration.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      category: "Mobile App"
    },
    {
      id: "3",
      title: "Stellar E-commerce Platform",
      description: "A complete e-commerce solution with AI-powered product recommendations and analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
      category: "Web Application"
    },
    {
      id: "4",
      title: "Cosmos Social Network",
      description: "A next-generation social platform with advanced privacy features and content curation.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      category: "Web & Mobile"
    }
  ];
  
  // Stats data
  const stats = [
    { id: 1, value: "200+", label: "Projects Completed" },
    { id: 2, value: "50+", label: "Team Members" },
    { id: 3, value: "15+", label: "Countries Served" },
    { id: 4, value: "8", label: "Years of Excellence" }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "X-POSITRON transformed our business with their innovative solutions. Their attention to detail and dedication to excellence is unmatched.",
      author: "Sarah Johnson",
      position: "CEO, TechFusion",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      quote: "Working with the X-POSITRON team was a game-changer for our startup. They delivered beyond our expectations and within our timeline.",
      author: "Michael Chen",
      position: "Founder, NexGen",
      avatar: "https://i.pravatar.cc/150?img=2"
    }
  ];
  
  return (
    <>
      <StarBackground />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Solutions for Every Need
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer a comprehensive range of services to help businesses navigate the digital landscape and achieve their goals.
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
            <Link to="/services" className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 group">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
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
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach to Excellence
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-white/70">Skilled professionals with deep industry knowledge.</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-cosmic-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-white/70">Serving clients across continents with tailored solutions.</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cosmic-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Focus</h3>
              <p className="text-white/70">Built-in security for peace of mind and compliance.</p>
            </div>
            
            <div className="cosmic-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-white/70">Meeting deadlines without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              OUR WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions that have helped businesses achieve their goals.
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
            <Link to="/portfolio" className="cosmic-button group">
              <span className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="cosmic-card">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
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
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your <span className="text-glow">Digital Journey</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let's create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact" className="cosmic-button group">
              <span className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
