
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SpaceTravelBackground from "./SpaceTravelBackground";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Space Travel Background */}
      <SpaceTravelBackground />
      
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
          
          {/* Right side - intentionally empty */}
          <div className="lg:w-1/2"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Explore our space</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full mt-2 animate-star-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
