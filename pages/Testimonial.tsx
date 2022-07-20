import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import Header from "./headers/Header";
import FooterSection from "./section/FooterSection";
import TestimonialSection from "./section/TestimonialSection";

export default function Testimonial() {
  return (
    <>
      <Header />
      <MoleculeStarsBackground>
        <div id="testimonial" className="bg-repeat pt-10"
          style={{
            backgroundImage: `url('/molecule_stars.png')`,
            backgroundSize: '500px',
          }}>
          <TestimonialSection />
        </div>
      </MoleculeStarsBackground>
      <FooterSection />
    </>
  );
}
