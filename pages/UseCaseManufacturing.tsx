import React from 'react'
import Header from "./headers/Header";
import UseCaseManufacturingSection from "./useCases/UseCaseManufacturingSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import GanymedeTitle from '../components/titles/GanymedeTitle';

export default function UseCaseManufacturing() {
  return (
    <MoleculeStarsBackground>
      <GanymedeTitle title="For Manufacturing" />
      <Header />
      <UseCaseManufacturingSection />
    </MoleculeStarsBackground>
  );
}
