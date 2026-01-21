import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ApproachSection from "@/components/ApproachSection";
import IndustriesSection from "@/components/IndustriesSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <IndustriesSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
