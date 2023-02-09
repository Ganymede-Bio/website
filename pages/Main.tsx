import React from 'react'
import dynamic from "next/dynamic";

import Header from "./headers/Header";
import HeroText from "./section/hero/HeroText";

import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import ContactSection from './section/ContactSection'

import HeroVideoSection from "./section/hero/HeroVideoSection";
import Announcement from './headers/Announcement';
import GanymedeTitle from '../components/titles/GanymedeTitle';
const ProductSection = dynamic(() => import("./section/ProductSection"), {
  suspense: true
});
const IntegrationSection = dynamic(() => import("./section/IntegrationSection"), { suspense: true });
const FooterSection = dynamic(() => import("./section/FooterSection"), { suspense: true });

export default function Main() {
  return (
    <>
      <GanymedeTitle title='Comprehensive Instrument, Data, and Lab Integration Platform' />
      <div className="relative">
        <Announcement />
        <Header />
        <MoleculeStarsBackground>
          <div className="opacity-100 pt-24 xs:pt-12 md:pt-24">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-10 md:pt-24 xl:pt-36">
                <HeroText />
              </div>
              <div className="mx-10 md:mt-24">
                <HeroVideoSection />
              </div>

            </div>
            <div id="integration">
              <IntegrationSection />
            </div>
            <div id="product" className="pb-24">
              <ProductSection />
            </div>

            <div id="contact-us" className="pb-12">
              <ContactSection />
            </div>
            <FooterSection />
          </div>
        </MoleculeStarsBackground>
      </div>
    </>
  );
}
