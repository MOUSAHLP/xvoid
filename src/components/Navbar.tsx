
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cosmic-dark/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="X-POSITRON Home"
          >
            <img
              src="/lovable-uploads/f93e34b3-842b-40c2-8f7b-54fae905ccd5.png"
              alt="X-POSITRON Logo"
              className="w-12 h-12 animate-pulse"
            />
            <span className="font-orbitron text-xl font-bold tracking-wider text-glow">
              X-POSITRON
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-1 py-2 font-medium text-sm transition-colors duration-300 group ${
                  location.pathname === item.path
                    ? "text-glow"
                    : "text-white/80 hover:text-cosmic-blue"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-cosmic-blue transform transition-transform duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex cosmic-button"
          >
            <span>Launch Your Project</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cosmic-blue" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-cosmic-dark/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 border-b border-cosmic-blue/30" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 font-medium text-base ${
                location.pathname === item.path
                  ? "text-glow bg-white/5 rounded-lg"
                  : "text-white/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="cosmic-button mt-2 w-full flex justify-center"
          >
            <span>Launch Your Project</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
