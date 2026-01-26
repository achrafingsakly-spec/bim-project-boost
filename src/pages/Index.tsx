import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesPreviewSection from "@/components/ServicesPreviewSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import CredibilitySection from "@/components/CredibilitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <ProblemsSection />
        <SolutionSection />
        <ServicesPreviewSection />
        <ValuePropositionSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
