
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Logo floating animation
    const logo = logoRef.current;
    if (!logo) return;
    
    let startY = 0;
    let animationFrameId: number;
    
    const floatAnimation = () => {
      const time = Date.now() * 0.001;
      const offset = Math.sin(time) * 15;
      logo.style.transform = `translateY(${startY + offset}px)`;
      animationFrameId = requestAnimationFrame(floatAnimation);
    };
    
    floatAnimation();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cosmic-dark bg-star-pattern bg-[length:20px_20px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-cosmic-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-display-large font-bold mb-6 leading-tight">
              <span className="text-glow">Crafting</span> Digital <span className="text-glow-purple">Universes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              We build cutting-edge web and mobile applications that transcend boundaries and explore new technological frontiers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="cosmic-button group">
                <span className="flex items-center">
                  Launch Your Project
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link to="/portfolio" className="text-cosmic-blue hover:text-glow transition-all duration-300 group flex items-center">
                View Our Work
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <img
              ref={logoRef}
              src="/lovable-uploads/f93e34b3-842b-40c2-8f7b-54fae905ccd5.png"
              alt="X-POSITRON Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            />
            
            {/* Orbiting particles */}
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="absolute w-4 h-4 rounded-full bg-cosmic-blue animate-orbit opacity-70 shadow-neon" style={{ animationDuration: '10s' }}></div>
              <div className="absolute w-3 h-3 rounded-full bg-cosmic-purple animate-orbit opacity-70 shadow-neon-purple" style={{ animationDuration: '15s', animationDelay: '-5s' }}></div>
              <div className="absolute w-2 h-2 rounded-full bg-cosmic-pink animate-orbit opacity-70 shadow-neon-pink" style={{ animationDuration: '20s', animationDelay: '-10s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full mt-2 animate-star-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
