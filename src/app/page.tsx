import HeroSection from "./components/herosection";
import AboutSection from "./components/about";
import PoweringSection from "./components/PoweringSection";
import Advertisement from "./components/Banner";
import OurServices from "./components/OurServices";
import OurImpact from "./components/OurImpact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PoweringSection />
      <AboutSection />
      <OurImpact/>
      <OurServices />
      <Advertisement />
    </div>
  );
}
