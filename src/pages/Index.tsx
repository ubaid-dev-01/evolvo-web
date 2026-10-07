import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { CaseStudies } from "@/components/CaseStudies";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { FromIdeaToLaunchSection } from "@/components/FromIdeaToLaunchSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { EngagementModal } from "@/components/EngagementModal";

const Index = () => {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <LogoCloud />
        <CaseStudies />
        <StatsSection />
        <ServicesSection />
        <WhyPartnerSection />
        <IndustriesSection />
        <FromIdeaToLaunchSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
      <EngagementModal />
    </>
  );
};

export default Index;
