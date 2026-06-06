import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CoursesSection from "@/components/CoursesSection";
import DemosSection from "@/components/DemosSection";
import AnecdotesSection from "@/components/AnecdotesSection";
import StatsSection from "@/components/StatsSection";
import AgenticSection from "@/components/AgenticSection";
import IndustrySection from "@/components/IndustrySection";
import PricingSection from "@/components/PricingSection";
import CheckoutSection from "@/components/CheckoutSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <HeroSection />
    <IntroSection />
    <CoursesSection />
    <DemosSection />
    <AnecdotesSection />
    <StatsSection />
    <AgenticSection />
    <IndustrySection />
    <PricingSection />
    <CheckoutSection />
    <ScheduleSection />
    <ContactSection />
    <RegisterSection />
    <Footer />
  </div>
);

export default Index;
