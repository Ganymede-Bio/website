import React from 'react'
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import Header from "./headers/Header";
import UseCaseSoftwareEngineerSection from "./useCases/UseCaseSoftwareEngineerSection";

export default function UseCaseSoftwareEngineer() {
  return (
    <MoleculeStarsBackground>
      <Header />
      <UseCaseSoftwareEngineerSection />
    </MoleculeStarsBackground>
  );
}
