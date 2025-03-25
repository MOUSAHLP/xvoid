
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";

const TermsOfService: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
            
            <div className="cosmic-card max-w-4xl mx-auto">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                  <p className="text-white/80">
                    By accessing or using our services, you agree to be bound by these Terms of Service and all applicable 
                    laws and regulations. If you do not agree with any of these terms, you are prohibited from using or 
                    accessing this site.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                  <p className="text-white/80 mb-3">
                    Permission is granted to temporarily view the materials on X-POSITRON's website for personal, 
                    non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                  <p className="text-white/80">
                    The materials on X-POSITRON's website are provided on an 'as is' basis. X-POSITRON makes no warranties, 
                    expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                    of intellectual property or other violation of rights.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                  <p className="text-white/80">
                    In no event shall X-POSITRON or its suppliers be liable for any damages (including, without limitation, 
                    damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                    to use the materials on X-POSITRON's website, even if X-POSITRON or a X-POSITRON authorized representative 
                    has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                  <p className="text-white/80">
                    If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
