import Header from "./headers/Header";
import ContactSection from "./section/ContactSection";
import FooterSection from "./section/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="bg-repeat pt-10"
        style={{
          backgroundImage: `url('/molecule_stars.png')`,
          backgroundSize: '500px',
        }}>
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}
