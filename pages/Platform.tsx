import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import Header from "./headers/Header";
import ProductSection from "./section/ProductSection";
import ContactSection from './section/ContactSection'
import FooterSection from "./section/FooterSection";

export default function Platform() {
  return (
    <>
      <Header />
      <MoleculeStarsBackground>
        <div className="pb-36">
          <ProductSection />
        </div>
        <ContactSection />
        <div id="footer" className="pt-12">
          <FooterSection />
        </div>
      </MoleculeStarsBackground>
    </>
  );
}
