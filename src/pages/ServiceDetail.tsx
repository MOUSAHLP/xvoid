import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { ArrowLeft, CheckCircle2, Users, Monitor, Lightbulb, BarChart, Zap } from "lucide-react";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock services data
  const services = {
    "web-development": {
      title: "Web Development",
      description: "We create modern, responsive websites and web applications that deliver exceptional user experiences across all devices.",
      banner: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      icon: Monitor,
      benefits: [
        "Custom, responsive design that works on all devices",
        "Optimized for speed and performance",
        "Search engine friendly architecture",
        "Accessible interfaces for all users",
        "Scalable solutions that grow with your business"
      ],
      process: [
        "Discovery and Requirements Analysis",
        "UX/UI Design and Prototyping",
        "Front-end Development",
        "Back-end Development",
        "Testing and Quality Assurance",
        "Deployment and Maintenance"
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"]
    },
    "mobile-applications": {
      title: "Mobile Applications",
      description: "We develop feature-rich, intuitive mobile applications for iOS and Android platforms that engage users and drive results.",
      banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      icon: Zap,
      benefits: [
        "Native and cross-platform app development",
        "Intuitive, user-friendly interfaces",
        "Offline capabilities and synchronization",
        "Push notification integration",
        "App store optimization for visibility"
      ],
      process: [
        "Market Research and Concept Validation",
        "UX/UI Design for Mobile",
        "Native or Cross-platform Development",
        "API Integration",
        "Testing on Multiple Devices",
        "Deployment and Ongoing Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "App Store Connect", "Google Play Console"]
    },
    "ai-solutions": {
      title: "AI Solutions",
      description: "We harness the power of artificial intelligence to build intelligent systems that provide actionable insights and automation.",
      banner: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
      icon: Lightbulb,
      benefits: [
        "Custom AI models tailored to your business needs",
        "Process automation for increased efficiency",
        "Predictive analytics for data-driven decisions",
        "Natural language processing capabilities",
        "Computer vision and image recognition"
      ],
      process: [
        "Data Collection and Preparation",
        "Model Selection and Training",
        "Algorithm Development",
        "Integration with Existing Systems",
        "Testing and Validation",
        "Deployment and Continuous Learning"
      ],
      technologies: ["TensorFlow", "PyTorch", "scikit-learn", "NLTK", "OpenCV", "Azure ML", "AWS SageMaker", "Google AI Platform"]
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description: "We craft intuitive user interfaces and seamless experiences that delight users and achieve your business objectives.",
      banner: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
      icon: Users,
      benefits: [
        "User-centered design approach",
        "Improved user satisfaction and engagement",
        "Reduced user frustration and support costs",
        "Consistent brand experience across platforms",
        "Data-driven design decisions"
      ],
      process: [
        "User Research and Persona Development",
        "Information Architecture",
        "Wireframing and Prototyping",
        "Visual Design",
        "Usability Testing",
        "Handoff to Development"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Miro", "UsabilityHub", "Hotjar"]
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description: "We implement strategic digital marketing campaigns that increase your online presence and drive qualified leads to your business.",
      banner: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
      icon: BarChart,
      benefits: [
        "Increased online visibility and brand awareness",
        "Targeted campaigns to reach your ideal audience",
        "Higher conversion rates and ROI",
        "Data-driven marketing strategies",
        "Consistent brand messaging across channels"
      ],
      process: [
        "Market and Competitor Analysis",
        "Strategy Development",
        "Content Creation",
        "Campaign Execution",
        "Performance Monitoring",
        "Optimization and Reporting"
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Meta Business Suite", "Google Ads", "LinkedIn Campaign Manager"]
    }
  };
  
  const service = services[id as keyof typeof services];
  const IconComponent = service?.icon || Monitor;
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="cosmic-button">
            <span>Back to Services</span>
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
          <Link to="/services" className="inline-flex items-center text-cosmic-blue hover:text-glow transition-colors duration-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <div className="relative rounded-xl overflow-hidden aspect-video mb-8">
              <img 
                src={service.banner} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-cosmic-blue/20 backdrop-blur-sm border border-cosmic-blue/30 rounded-full p-3 inline-block mb-4">
                  <IconComponent className="h-8 w-8 text-cosmic-blue" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {service.title}
                </h1>
              </div>
            </div>
            
            {/* Service Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="cosmic-card mb-8">
                  <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                  <p className="text-white/80 mb-8">
                    {service.description}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-cosmic-blue mr-3 mt-0.5 shrink-0" />
                        <span className="text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">Our Process</h3>
                  <div className="space-y-4 mb-8">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-cosmic-blue/20 rounded-full w-8 h-8 flex items-center justify-center text-cosmic-blue font-bold mr-4 shrink-0">
                          {index + 1}
                        </div>
                        <div className="bg-white/5 rounded-lg px-4 py-3 w-full border border-white/10">
                          <span className="text-white/80">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="cosmic-button group">
                    <span className="flex items-center justify-center">
                      Discuss Your Project
                      <ArrowLeft className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rotate-180" />
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies Used */}
                <div className="cosmic-card">
                  <h3 className="text-xl font-bold mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
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
                  <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                  <p className="text-white/80 mb-4">Let's discuss how our {service.title.toLowerCase()} services can help your business grow.</p>
                  <Link to="/contact" className="cosmic-button w-full flex justify-center items-center">
                    <span>Contact Us</span>
                  </Link>
                </div>
                
                {/* Other Services */}
                <div className="cosmic-card">
                  <h3 className="text-xl font-bold mb-4">Explore Other Services</h3>
                  <ul className="space-y-2">
                    {Object.entries(services)
                      .filter(([key]) => key !== id)
                      .map(([key, service]) => (
                        <li key={key}>
                          <Link
                            to={`/service/${key}`}
                            className="text-white/70 hover:text-cosmic-purple transition-colors duration-300 flex items-center py-2"
                          >
                            <span className="mr-2">•</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
