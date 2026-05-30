import Nav from "@/components/nav/Nav";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyNoblePath from "@/components/sections/WhyNoblePath";
import Capabilities from "@/components/sections/Capabilities";
import TherapeuticFocus from "@/components/sections/TherapeuticFocus";
import NetworkSites from "@/components/sections/NetworkSites";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import Academy from "@/components/sections/Academy";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <WhyNoblePath />
      <Capabilities />
      <TherapeuticFocus />
      <NetworkSites />
      <Services />
      <HowWeWork />
      <Academy />
      <BottomCTA />
      <Footer />
    </>
  );
}
