import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CeoMessageSection from "@/components/sections/CeoMessageSection";
import OrgChartSection from "@/components/sections/OrgChartSection";
import StatsSection from "@/components/sections/StatsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import ValuesSection from "@/components/sections/ValuesSection";
import AccessSection from "@/components/sections/AccessSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CeoMessageSection />
      <OrgChartSection />
      <StatsSection />
      <BenefitsSection />
      <CompanyInfoSection />
      <ValuesSection />
      <AccessSection />
      <ContactCtaSection />
    </>
  );
}
