
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
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
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Send Us an <span className="text-glow-pink">Interstellar Transmission</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ready to start your digital journey? We're here to help bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cosmic-card"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="cosmic-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="cosmic-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-white/70 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="cosmic-input"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="cosmic-input"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button type="submit" className="cosmic-button group w-full">
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="cosmic-card mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-white/70">contact@xpositron.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <p className="text-white/70">123 Tech Boulevard, Silicon Valley, CA 94024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-cosmic-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="cosmic-card">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-cosmic-blue">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-cosmic-purple">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-cosmic-pink">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
