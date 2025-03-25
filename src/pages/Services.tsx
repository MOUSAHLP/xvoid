
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, Smartphone, BrainCircuit } from "lucide-react";

const Services: React.FC = () => {
  // Services data
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
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable, reliable, and secure cloud solutions for your business needs.",
      icon: <Monitor className="w-7 h-7 text-cosmic-blue" />,
      color: "blue" as const
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "User-centered design that delivers exceptional experiences across all platforms.",
      icon: <Smartphone className="w-7 h-7 text-cosmic-purple" />,
      color: "purple" as const
    },
    {
      id: 6,
      title: "DevOps",
      description: "Streamline your development and operations with our expert DevOps services.",
      icon: <BrainCircuit className="w-7 h-7 text-cosmic-pink" />,
      color: "pink" as const
    }
  ];

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
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-blue/10 rounded-full text-cosmic-blue mb-4">
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Solutions for <span className="text-glow">Every Need</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer a comprehensive range of services to help businesses navigate the digital landscape and achieve their goals.
            </p>
          </motion.div>
          
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
        </div>
      </section>
    </>
  );
};

export default Services;
