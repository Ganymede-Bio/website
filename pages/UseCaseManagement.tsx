import Header from "./headers/Header";
import UseCaseManagementSection from "./useCases/UseCaseManagementSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";

export default function UseCaseManagement() {
  return (
    <MoleculeStarsBackground>
      <Header />
      <UseCaseManagementSection />
    </MoleculeStarsBackground>
  );
}
