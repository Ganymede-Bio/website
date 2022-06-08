import Header from "./headers/Header";
import ContactSection from "./section/ContactSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="pt-10">
        <ContactSection />
      </div>
    </>
  );
}
