
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarBackground from "@/components/StarBackground";

const Sitemap: React.FC = () => {
  // Define site structure
  const siteStructure = [
    {
      section: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" }
      ]
    },
    {
      section: "Services",
      links: [
        { title: "Web Development", path: "/service/web-development" },
        { title: "Mobile Applications", path: "/service/mobile-applications" },
        { title: "AI Solutions", path: "/service/ai-solutions" },
        { title: "UI/UX Design", path: "/service/ui-ux-design" },
        { title: "Digital Marketing", path: "/service/digital-marketing" }
      ]
    },
    {
      section: "Legal",
      links: [
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Terms of Service", path: "/terms-of-service" }
      ]
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
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Sitemap</h1>
            
            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section) => (
                  <div key={section.section}>
                    <h2 className="text-xl font-bold mb-4 text-glow">{section.section}</h2>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.path}>
                          <Link 
                            to={link.path}
                            className="text-white/70 hover:text-cosmic-blue transition-colors duration-300 flex items-center"
                          >
                            <span className="mr-2">•</span>
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
