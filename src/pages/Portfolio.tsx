
import React, { useState } from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import ProjectCard from "@/components/ProjectCard";

const Portfolio: React.FC = () => {
  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Nebula Finance Dashboard",
      description: "A comprehensive financial dashboard with real-time data visualization and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Quantum Health Mobile App",
      description: "A health tracking application with personalized recommendations and seamless device integration.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Stellar E-commerce Platform",
      description: "A complete e-commerce solution with AI-powered product recommendations and analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
      category: "Web Application"
    },
    {
      id: 4,
      title: "Cosmos Social Network",
      description: "A next-generation social platform with advanced privacy features and content curation.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      category: "Web & Mobile"
    },
    {
      id: 5,
      title: "Galactic Analytics",
      description: "Business intelligence platform with interactive dashboards and predictive analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "AI Solutions"
    },
    {
      id: 6,
      title: "Orbit CRM",
      description: "Customer relationship management system with AI-powered insights and automation.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      category: "Web Application"
    }
  ];
  
  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filter projects by category
  const filteredProjects = activeCategory && activeCategory !== "All"
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  return (
    <>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-purple/10 rounded-full text-cosmic-purple mb-4">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our <span className="text-glow-purple">Portfolio</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our innovative digital solutions that have helped businesses across various industries.
            </p>
          </motion.div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === "All" ? null : category)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  (category === "All" && !activeCategory) || category === activeCategory
                    ? "bg-cosmic-blue/20 border-cosmic-blue/50 text-cosmic-blue"
                    : "border-white/10 hover:border-cosmic-blue/30 text-white/70 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
