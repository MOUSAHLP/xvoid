
import React from "react";
import { Link } from "react-router-dom";
import { 
  Github, 
  Youtube, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cosmic-dark relative overflow-hidden border-t border-white/5">
      {/* Star background */}
      <div className="absolute inset-0 bg-star-pattern bg-[length:20px_20px] opacity-10 pointer-events-none"></div>
      
      {/* Shooting star animation */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-cosmic-blue rounded-full opacity-0 animate-shooting-star"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/f93e34b3-842b-40c2-8f7b-54fae905ccd5.png"
                alt="X-POSITRON Logo"
                className="w-10 h-10"
              />
              <span className="font-orbitron text-lg font-bold text-white">
                X-POSITRON
              </span>
            </div>
            
            <p className="text-white/70 mb-6">
              Crafting digital universes and exploring new technological frontiers. We build tech that travels beyond boundaries.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cosmic-blue/20 transition-colors duration-300 border border-white/10 hover:border-cosmic-blue/30"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-cosmic-blue transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow-purple">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/service/web-development" className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/service/mobile-applications" className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/service/ai-solutions" className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/service/ui-ux-design" className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/service/digital-marketing" className="text-white/70 hover:text-cosmic-purple transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-glow-pink">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cosmic-pink shrink-0 mt-0.5" />
                <span className="text-white/70">
                  123 Tech Boulevard, Digital City, Universe 42
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cosmic-pink shrink-0" />
                <a href="mailto:info@xpositron.tech" className="text-white/70 hover:text-cosmic-pink transition-colors duration-300">
                  info@xpositron.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} X-POSITRON. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
