
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import Technologies from "./pages/Technologies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component that will scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');
  
  // Create a page wrapper that adds the Arabic class if needed
  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={isArabic ? 'rtl' : 'ltr'}
    >
      {children}
    </motion.div>
  );
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* English Routes */}
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/service/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/project/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/sitemap" element={<PageWrapper><Sitemap /></PageWrapper>} />
        <Route path="/technologies" element={<PageWrapper><Technologies /></PageWrapper>} />
        
        {/* Arabic Routes */}
        <Route path="/ar" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/ar/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/ar/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/ar/service/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/ar/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/ar/project/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/ar/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/ar/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/ar/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/ar/sitemap" element={<PageWrapper><Sitemap /></PageWrapper>} />
        <Route path="/ar/technologies" element={<PageWrapper><Technologies /></PageWrapper>} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Toaster />
            <Sonner />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
