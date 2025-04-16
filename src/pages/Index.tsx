
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster as SonnerToaster } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
      <SonnerToaster position="top-right" closeButton richColors />
      <Toaster />
      
      <div className="fixed bottom-6 right-6 z-50">
        <Link 
          to="/dark-theme" 
          className="bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center"
        >
          Try Dark Theme
        </Link>
      </div>
    </div>
  );
};

export default Index;
