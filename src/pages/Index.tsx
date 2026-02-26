import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import SolutionsSection from "@/components/SolutionsSection";
import VideoSection from "@/components/VideoSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ROISection from "@/components/ROISection";
import MediaSection from "@/components/MediaSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ClientsCarousel />
      <ProblemSection />
      <WorkflowSection />
      <SolutionsSection />
      <VideoSection />
      <DifferentiatorsSection />
      <ROISection />
      <MediaSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default Index;
