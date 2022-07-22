import React from 'react'
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import Header from "./headers/Header";
import UseCaseScientistSection from "./useCases/UseCaseScientistSection";

export default function UseCaseScientist() {
  return (
    <MoleculeStarsBackground>
      <Header />
      <UseCaseScientistSection />
    </MoleculeStarsBackground>
  );
}
