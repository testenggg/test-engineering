import HeroSection from "./components/herosection";
import AboutSection from "./components/about";
import PoweringSection from "./components/PoweringSection";
import ClientLogos from "./components/ClientLogos";
import Advertisement from "./components/Banner";
import ServicesOverview from "./components/ServicesOverview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <PoweringSection />
      <AboutSection />

      <ClientLogos />
      <Advertisement />
    </div>
  );
}
