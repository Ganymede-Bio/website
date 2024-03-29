import React from 'react'
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import GanymedeTitle from '../components/titles/GanymedeTitle';
import Header from "./headers/Header";
import UseCaseScientistSection from "./useCases/UseCaseScientistSection";

export default function UseCaseScientist() {
  return (
    <MoleculeStarsBackground>
      <GanymedeTitle title="For Scientists" />
      <Header />
      <UseCaseScientistSection />
    </MoleculeStarsBackground>
  );
}
