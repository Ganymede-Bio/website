import React from 'react'
import Header from "./headers/Header";
import UseCaseManagementSection from "./useCases/UseCaseManagementSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import GanymedeTitle from '../components/titles/GanymedeTitle';

export default function UseCaseManagement() {
  return (
    <MoleculeStarsBackground>
      <GanymedeTitle title="For Management" />
      <Header />
      <UseCaseManagementSection />
    </MoleculeStarsBackground>
  );
}
