
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { ArrowLeft, Globe, Github, ExternalLink, Calendar, Tag, User } from "lucide-react";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock projects data - in a real app this would come from an API or context
  const projects = [
    {
      id: "1",
      title: "Nebula Finance Dashboard",
      description: "A comprehensive financial dashboard with real-time data visualization and AI-powered insights. This platform helps businesses track their financial performance, analyze trends, and make data-driven decisions. The dashboard features interactive charts, customizable widgets, and automated reporting capabilities.",
      fullDescription: "Nebula Finance Dashboard is a state-of-the-art financial analytics platform designed for modern businesses. It leverages advanced data visualization techniques and machine learning algorithms to provide actionable insights into company finances. The system processes large volumes of financial data in real-time, presenting it through an intuitive interface that makes complex information accessible to users regardless of their technical background.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Web Application",
      technologies: ["React", "Node.js", "D3.js", "TensorFlow", "MongoDB"],
      client: "FinTech Solutions Inc.",
      completionDate: "March 2023",
      features: [
        "Real-time financial data visualization",
        "AI-powered trend analysis and predictions",
        "Customizable dashboard widgets",
        "Automated reporting system",
        "Multi-user access with role-based permissions"
      ],
      liveUrl: "https://example.com/nebula-finance",
      githubUrl: "https://github.com/example/nebula-finance",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
      ]
    },
    {
      id: "2",
      title: "Quantum Health Mobile App",
      description: "A health tracking application with personalized recommendations and seamless device integration.",
      fullDescription: "Quantum Health is a comprehensive mobile application designed to help users monitor and improve their health. It integrates with various wearable devices to track vital statistics, physical activity, and sleep patterns. The app analyzes this data to provide personalized health recommendations, workout routines, and nutrition plans tailored to individual goals and needs.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "HealthKit/Google Fit API", "TensorFlow Lite", "Node.js"],
      client: "HealthTech Innovations",
      completionDate: "November 2023",
      features: [
        "Wearable device integration",
        "Personalized health recommendations",
        "Custom workout and nutrition planning",
        "Health metrics visualization",
        "Progress tracking and goal setting"
      ],
      liveUrl: "https://example.com/quantum-health",
      githubUrl: "https://github.com/example/quantum-health",
      screenshots: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: "3",
      title: "Stellar E-commerce Platform",
      description: "A complete e-commerce solution with AI-powered product recommendations and analytics.",
      fullDescription: "Stellar is a cutting-edge e-commerce platform built to deliver exceptional shopping experiences. It features a sleek, responsive design optimized for conversions, along with advanced product recommendation engines powered by AI. The platform includes comprehensive inventory management, order processing, and customer relationship tools, all integrated with popular payment gateways for seamless transactions.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
      category: "Web Application",
      technologies: ["Next.js", "Stripe API", "TensorFlow", "PostgreSQL", "Redis"],
      client: "Global Retail Solutions",
      completionDate: "July 2023",
      features: [
        "AI-powered product recommendations",
        "Advanced search functionality",
        "Inventory management system",
        "Seamless payment processing",
        "Customer behavior analytics"
      ],
      liveUrl: "https://example.com/stellar-ecommerce",
      githubUrl: "https://github.com/example/stellar-ecommerce",
      screenshots: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: "4",
      title: "Cosmos Social Network",
      description: "A next-generation social platform with advanced privacy features and content curation.",
      fullDescription: "Cosmos is a social networking platform designed with user privacy and content quality at its core. Unlike traditional social networks, Cosmos gives users granular control over their data and employs advanced algorithms to curate content based on quality rather than engagement metrics alone. The platform features encrypted messaging, customizable privacy settings, and innovative community-building tools.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      category: "Web & Mobile",
      technologies: ["React", "React Native", "GraphQL", "PostgreSQL", "Redis", "TensorFlow"],
      client: "NextGen Social Media",
      completionDate: "October 2023",
      features: [
        "End-to-end encrypted messaging",
        "Advanced privacy controls",
        "Content quality curation algorithm",
        "Community-building tools",
        "Cross-platform synchronization"
      ],
      liveUrl: "https://example.com/cosmos-social",
      githubUrl: "https://github.com/example/cosmos-social",
      screenshots: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: "5",
      title: "Galactic Analytics",
      description: "Business intelligence platform with interactive dashboards and predictive analytics.",
      fullDescription: "Galactic Analytics is a comprehensive business intelligence platform that transforms raw data into actionable insights. The system features interactive dashboards, automated reporting, and advanced predictive analytics capabilities. It connects to multiple data sources, performs complex data processing operations, and presents results through intuitive visualizations that help businesses identify trends, opportunities, and potential issues.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "AI Solutions",
      technologies: ["Python", "Django", "React", "TensorFlow", "Apache Spark", "PostgreSQL"],
      client: "Data Insights Corporation",
      completionDate: "January 2024",
      features: [
        "Multi-source data integration",
        "Interactive data visualization dashboards",
        "Predictive analytics models",
        "Automated reporting system",
        "Custom KPI tracking"
      ],
      liveUrl: "https://example.com/galactic-analytics",
      githubUrl: "https://github.com/example/galactic-analytics",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: "6",
      title: "Orbit CRM",
      description: "Customer relationship management system with AI-powered insights and automation.",
      fullDescription: "Orbit CRM is a next-generation customer relationship management system designed to streamline sales processes and enhance customer engagement. It leverages AI to analyze customer interactions, predict needs, and automate routine tasks. The platform provides a 360-degree view of customer relationships, tracks sales pipelines, and generates detailed reports on team performance and business outcomes.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      category: "Web Application",
      technologies: ["Vue.js", "Node.js", "MongoDB", "TensorFlow", "Redis"],
      client: "SalesForce Solutions",
      completionDate: "December 2023",
      features: [
        "AI-powered customer insights",
        "Sales pipeline management",
        "Automated task scheduling",
        "Email integration and templates",
        "Performance analytics dashboard"
      ],
      liveUrl: "https://example.com/orbit-crm",
      githubUrl: "https://github.com/example/orbit-crm",
      screenshots: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      ]
    }
  ];
  
  // Find the current project
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="cosmic-button">
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/portfolio" className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <div className="relative rounded-xl overflow-hidden aspect-video mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="px-3 py-1 text-xs font-medium bg-cosmic-blue/20 backdrop-blur-sm border border-cosmic-blue/30 rounded-full text-cosmic-blue mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {project.title}
                </h1>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="cosmic-card mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-white/80 mb-6">
                    {project.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cosmic-blue mr-2">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button group"
                    >
                      <span className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Live Demo
                      </span>
                    </a>
                    
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg hover:border-cosmic-purple/50 text-white/80 hover:text-cosmic-purple transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </div>
                </div>
                
                {/* Screenshots */}
                <div className="cosmic-card">
                  <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <a 
                        key={index}
                        href={screenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-video rounded-lg overflow-hidden group"
                      >
                        <img 
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-cosmic-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <div className="cosmic-card">
                  <h3 className="text-xl font-bold mb-4">Project Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <User className="w-5 h-5 text-cosmic-blue mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-white/60">Client</p>
                        <p className="text-white">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-white/60">Completion Date</p>
                        <p className="text-white">{project.completionDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Tag className="w-5 h-5 text-cosmic-pink mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-white/60">Category</p>
                        <p className="text-white">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="cosmic-card">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="cosmic-card bg-gradient-to-br from-cosmic-dark to-cosmic-blue/20 border-cosmic-blue/30">
                  <h3 className="text-xl font-bold mb-3">Interested in a similar project?</h3>
                  <p className="text-white/80 mb-4">Let's discuss how we can bring your vision to life.</p>
                  <Link to="/contact" className="cosmic-button w-full flex justify-center items-center">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
