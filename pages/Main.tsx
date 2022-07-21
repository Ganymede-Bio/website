import dynamic from "next/dynamic";
import Header from "./headers/Header";
import HeroText from "./section/hero/HeroText";

import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";
import ContactSection from './section/ContactSection'

import HeroVideoSection from "./section/hero/HeroVideoSection";
const ProductSection = dynamic(() => import("./section/ProductSection"), {
  suspense: true
});
const IntegrationSection = dynamic(() => import("./section/IntegrationSection"), { suspense: true });
const FooterSection = dynamic(() => import("./section/FooterSection"), { suspense: true });

export default function Main() {
  return (
    <div className="relative">
      <Header />
      <MoleculeStarsBackground>
        <div className="opacity-100 pt-12 xs:pt-24 md:pt-30">
          <div className="flex flex-row align-middle">
            <div className="basis-7/12 mr-10 md:pt-18 xl:pt-24">
              <HeroText />
            </div>
            <div className="basis-5/12 mr-10 xl:mt-12">
              <HeroVideoSection />
            </div>

          </div>
          <div id="integration">
            {/* <Suspense fallback={""}> */}
            <IntegrationSection />
            {/* </Suspense> */}
          </div>
          <div id="product" className="pb-24">
            {/* <Suspense fallback={""}> */}
            <ProductSection />
            {/* </Suspense> */}
          </div>

          <div id="contact-us" className="pt-6 pb-12">
            {/* <Suspense fallback={""}> */}
            <ContactSection />
            {/* </Suspense> */}
          </div>
          <FooterSection />
        </div>
      </MoleculeStarsBackground>
    </div>
  );
}
