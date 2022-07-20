import Header from "./headers/Header";
import HeroText from "./section/hero/HeroText";
import HeroVideoSection from "./section/hero/HeroVideoSection";
// import TestimonialSection from "./section/TestimonialSection";
import ProductSection from "./section/ProductSection";
import IntegrationSection from "./section/IntegrationSection";
import FooterSection from "./section/FooterSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import ContactSection from './section/ContactSection'

export default function Main() {
  return (
    <div className="relative">
      <Header />
      <MoleculeStarsBackground>
        <div className="opacity-100 mt-12 xs:pt-24 md:pt-30">
          <div className="flex flex-row align-middle">
            <div className="basis-7/12 mr-10 md:mt-18 xl:mt-24">
              <HeroText />
            </div>
            <div className="basis-5/12 mr-10 xl:mt-12">
              <HeroVideoSection />
            </div>
            {/* <div className="basis-2/5 mr-10 sm:pt-24 xl:pt-42">
              <HeroImageSection />
            </div> */}
          </div>
          <div id="integration">
            <IntegrationSection />
          </div>
          <div id="product" className="pb-24">
            <ProductSection />
          </div>
          {/* <div id="testimonial" className="pb-24 pt-6">
            <TestimonialSection />
          </div> */}
          <div id="contact-us" className="pt-6">
            <ContactSection />
          </div>
          <div id="footer" className="pt-12">
            <FooterSection />
          </div>
        </div>
      </MoleculeStarsBackground>
    </div>
  );
}
