import HeroSection from "./components/herosection";
import AboutSection from "./components/about";
import PoweringSection from "./components/PoweringSection";
import OurServices from "./components/OurServices";
import ChairmanSection from "./components/ChairmanSection";
import ClientLogos from "./components/ClientLogos";
import Advertisement from "./components/Banner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PoweringSection/>
      <AboutSection />
      <OurServices/>
      <ChairmanSection/>
      <ClientLogos/>
      <Advertisement/>
    </div>
  );
}
