
import React from "react";
import StarBackground from "@/components/StarBackground";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap 
} from "lucide-react";

const About: React.FC = () => {
  // Timeline data
  const timeline = [
    {
      year: "2016",
      title: "The Beginning",
      description: "X-POSITRON was founded with a vision to create innovative digital solutions."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Opened new offices and expanded our team to serve a growing client base."
    },
    {
      year: "2020",
      title: "Global Reach",
      description: "Started working with international clients and established a global presence."
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description: "Launched our innovation lab focused on emerging technologies."
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received multiple industry awards for our cutting-edge projects."
    },
  ];
  
  // Team data
  const team = [
    {
      name: "Alex Chen",
      position: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=12",
      description: "Visionary leader with 15+ years of tech experience."
    },
    {
      name: "Emma Rodriguez",
      position: "CTO",
      image: "https://i.pravatar.cc/300?img=10",
      description: "Technology expert specializing in AI and machine learning."
    },
    {
      name: "Michael Johnson",
      position: "Design Director",
      image: "https://i.pravatar.cc/300?img=11",
      description: "Award-winning designer with a passion for user experience."
    },
    {
      name: "Sarah Kim",
      position: "Development Lead",
      image: "https://i.pravatar.cc/300?img=9",
      description: "Full-stack developer with expertise in scalable applications."
    },
  ];
  
  return (
    <>
      <StarBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-glow">X-POSITRON</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              We are a team of passionate technologists, designers, and dreamers building digital solutions that transcend boundaries.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We build tech that travels beyond boundaries
              </h2>
              <p className="text-white/70 mb-6">
                At X-POSITRON, our mission is to empower businesses with innovative technology solutions that drive growth and transformation. We believe in pushing the boundaries of what's possible in the digital realm.
              </p>
              <p className="text-white/70">
                We're committed to excellence, continuous innovation, and delivering measurable results for our clients across the globe.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-cosmic-blue/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-cosmic-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Purpose-Driven</h3>
                    <p className="text-white/70 text-sm">Creating meaningful digital experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-cosmic-purple/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-cosmic-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">User-Focused</h3>
                    <p className="text-white/70 text-sm">Designing for human needs first</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full bg-cosmic-blue/5 backdrop-blur-xl border border-cosmic-blue/20 p-10 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-cosmic-blue animate-float" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-6 h-6 rounded-full bg-cosmic-blue/30 animate-orbit" style={{ top: '10%', left: '10%' }}></div>
                <div className="absolute w-4 h-4 rounded-full bg-cosmic-purple/30 animate-orbit" style={{ top: '70%', left: '20%', animationDelay: '-5s' }}></div>
                <div className="absolute w-5 h-5 rounded-full bg-cosmic-pink/30 animate-orbit" style={{ top: '40%', right: '10%', animationDelay: '-10s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cosmic-dark/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The X-POSITRON Story
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From humble beginnings to industry recognition, our journey has been one of continuous growth and innovation.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-pink"></div>
            
            {/* Timeline entries */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="cosmic-card"
                    >
                      <span className="inline-block text-glow font-bold mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="relative md:w-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cosmic-dark border-2 border-cosmic-blue flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-cosmic-blue rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guiding Principles
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our core values define who we are and guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cosmic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-white/70">We continuously explore new technologies and approaches to solve complex problems.</p>
            </div>
            
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-cosmic-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-white/70">We maintain the highest standards in everything we do, from code quality to client communication.</p>
            </div>
            
            <div className="cosmic-card text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-cosmic-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
              <p className="text-white/70">We embrace diversity of thought, culture, and experience in our solutions.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Cosmic Engineers
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Talented professionals dedicated to creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cosmic-card group"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent opacity-60"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cosmic-blue text-sm mb-3">{member.position}</p>
                <p className="text-white/70 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
