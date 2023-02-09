import React from 'react'
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import GanymedeTitle from '../components/titles/GanymedeTitle';
import Header from "./headers/Header";
import UseCaseSoftwareEngineerSection from "./useCases/UseCaseSoftwareEngineerSection";

export default function UseCaseSoftwareEngineer() {
  return (
    <MoleculeStarsBackground>
      <GanymedeTitle title='For Developers and Engineers' />
      <Header />
      <UseCaseSoftwareEngineerSection />
    </MoleculeStarsBackground>
  );
}
