// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
// import Image from "next/image";

import DividerTitleLeft from "../components/dividers/DividerTitleLeft";
import HeaderDark from "./headers/HeaderDark";
// import Navigation from "../layout/navs/Navigation";
// import Starfield from "../layout/designs/Starfield";
import HeroSection from "./section/HeroSection";
// import FeaturesSection from "./section/FeaturesSection";
import AboutSection from "./About";
import ProductSection from "./section/ProductSection";
import ContactSection from "./section/ContactSection";
import HeroImageSection from "./section/HeroImageSection";
import TestimonialSection from "./section/TestimonialSection";
import IntegrationSection from "./section/IntegrationSection";

export default function Main() {
  return (
    <div className="">
      {/* <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full "
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-full translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={334}
            fill="none"
            viewBox="0 0 404 334"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div> */}

      <div className="relative">
        <HeaderDark />

        <div className="bg-repeat"
          style={{
            backgroundImage: `url('/molecule_stars.png')`,
            backgroundSize: '500px',
          }}>
          <div className="opacity-100">
            <div className="flex flex-row">
              <div className="basis-3/5">
                <HeroSection />
              </div>
              <div className="basis-1/3 mt-32">
                <HeroImageSection />
              </div>
            </div>
            <div id="integration" className="pt-6">
              {/* <DividerTitleLeft title="Integration" /> */}
              <IntegrationSection />
            </div>
            {/* <div id="product" className="pt-6">
              <DividerTitleLeft title="Product" />
              <ProductSection />
            </div> */}
            <div id="testimonial" className="pb-24 pt-6">
              <DividerTitleLeft title="Testimonials" />
              <TestimonialSection />
            </div>
            {/* <div>
              <DividerTitleLeft title="Features" />
              <FeaturesSection />
            </div> */}
            {/* <div>
              <DividerTitleLeft title="Platform" />
              <PlatformSection />
            </div> */}
            {/* <div>
              <DividerTitleLeft title="About Us" />
              <AboutSection />
            </div> */}
            {/* <div className="py-12">
              <DividerTitleLeft title="Contact" />
              <ContactSection />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
