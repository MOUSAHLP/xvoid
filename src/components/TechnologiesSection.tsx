
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    icon: "/lovable-uploads/f7f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Building interactive user interfaces with React's component-based architecture"
  },
  {
    name: "Node.js",
    icon: "/lovable-uploads/a2f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Powerful backend solutions with JavaScript runtime environment"
  },
  {
    name: "TensorFlow",
    icon: "/lovable-uploads/b3f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Advanced machine learning and AI model development and deployment"
  },
  {
    name: "MongoDB",
    icon: "/lovable-uploads/c4f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Scalable NoSQL database solutions for modern applications"
  },
  {
    name: "AWS",
    icon: "/lovable-uploads/d5f4b5c7-9f4b-4c5e-9d8e-5f3a7e8a1c5d.png",
    description: "Cloud infrastructure and services for reliable application hosting"
  }
];

const TechnologiesSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies We <span className="text-glow">Use</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cosmic-card hover:border-cosmic-blue/30 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/5 rounded-full">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-white/70 text-sm">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
