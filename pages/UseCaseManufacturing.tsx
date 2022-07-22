import React from 'react'
import Header from "./headers/Header";
import UseCaseManufacturingSection from "./useCases/UseCaseManufacturingSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";

export default function UseCaseManufacturing() {
  return (
    <MoleculeStarsBackground>
      <Header />
      <UseCaseManufacturingSection />
    </MoleculeStarsBackground>
  );
}
