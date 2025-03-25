
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
            
            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-white/80">
                    At X-POSITRON, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website or use our services. Please read this policy carefully. 
                    If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-white/80 mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Register for our services</li>
                    <li>Express an interest in obtaining information about us or our products and services</li>
                    <li>Participate in activities on our website</li>
                    <li>Contact us</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-white/80 mb-3">
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Providing, maintaining, and improving our services</li>
                    <li>Communicating with you about our services</li>
                    <li>Responding to your inquiries</li>
                    <li>Monitoring and analyzing trends, usage, and activities</li>
                    <li>Detecting, preventing, and addressing technical issues</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-white/80">
                    We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our 
                    website and improve your experience. When you access our website, your personal information is not collected 
                    through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or 
                    reject cookies, but be aware that such action could affect the availability and functionality of the website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                  <p className="text-white/80">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-cosmic-blue mt-2">info@xpositron.tech</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
