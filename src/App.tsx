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
import FAQ from './pages/FAQ';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Careers from './pages/Careers';

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
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* English Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        
        {/* Arabic Routes */}
        <Route path="/ar" element={<Index />} />
        <Route path="/ar/about" element={<About />} />
        <Route path="/ar/services" element={<Services />} />
        <Route path="/ar/service/:id" element={<ServiceDetail />} />
        <Route path="/ar/portfolio" element={<Portfolio />} />
        <Route path="/ar/project/:id" element={<ProjectDetail />} />
        <Route path="/ar/contact" element={<Contact />} />
        <Route path="/ar/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ar/terms-of-service" element={<TermsOfService />} />
        <Route path="/ar/sitemap" element={<Sitemap />} />
        <Route path="/ar/faq" element={<FAQ />} />
        <Route path="/ar/careers" element={<Careers />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

// App component with proper provider nesting
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <LanguageProvider>
            <ScrollToTop />
            <Navbar />
            <Toaster />
            <Sonner />
            <AnimatedRoutes />
            <Footer />
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
