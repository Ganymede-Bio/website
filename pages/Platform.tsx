import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import Header from "./headers/Header";
import ProductSection from "./section/ProductSection";

export default function Platform() {
  return (
    <>
      <Header />
      <MoleculeStarsBackground>
        <ProductSection />
      </MoleculeStarsBackground>
    </>
  );
}
