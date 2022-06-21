import Header from "./headers/Header";
import HeroSection from "./section/HeroSection";
import HeroImageSection from "./section/HeroImageSection";
import TestimonialSection from "./section/TestimonialSection";
import IntegrationSection from "./section/IntegrationSection";
import FooterSection from "./section/FooterSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";

export default function Main() {
  return (
    <div className="relative">
      <Header />
      <MoleculeStarsBackground>
        <div className="opacity-100">
          <div className="flex flex-row">
            <div className="basis-3/5">
              <HeroSection />
            </div>
            <div className="basis-1/3 mt-32">
              <HeroImageSection />
            </div>
          </div>
          <div id="integration" className="pt-6">
            <IntegrationSection />
          </div>
          <div id="testimonial" className="pb-24 pt-6">
            <TestimonialSection />
          </div>
          <div id="footer">
            <FooterSection />
          </div>
        </div>
      </MoleculeStarsBackground>
    </div>
  );
}
