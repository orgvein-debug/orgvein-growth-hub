import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyOrgvein from "@/components/home/WhyOrgvein";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <WhyOrgvein />
      <IndustriesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
