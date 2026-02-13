import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import SolutionsSection from "@/components/SolutionsSection";
import VideoSection from "@/components/VideoSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ROISection from "@/components/ROISection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <ProblemSection />
      <WorkflowSection />
      <SolutionsSection />
      <VideoSection />
      <DifferentiatorsSection />
      <ROISection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
};

export default Index;
