import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

import DividerTitleLeft from "../components/dividers/DividerTitleLeft";
import Navigation from "../layout/navs/Navigation";
import Starfield from "../layout/designs/Starfield";
import FeaturesSection from "./section/FeaturesSection";
import AboutSection from "./section/AboutSection";
import PlatformSection from "./section/PlatformSection";
import ContactSection from "./section/ContactSection";

export default function Main() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
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
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="fixed top-0 pb-1 pt-2 border left-0 w-full mx-auto px-4 sm:px-6 z-40 bg-gray-100">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto pt-1">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <Image
                      src="/logo/ganymede_logo_new.svg"
                      alt=""
                      width={136}
                      height={35}
                      quality={100}
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-250 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-regal-purple">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6"/>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="fixed hidden md:flex md:space-x-10">
                <Navigation popover={false} />
              </div>
              {/* <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-regal-purple bg-white hover:bg-gray-50 hidden"
                  >
                    Log in
                  </a>
                </span>
              </div> */}
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              // focus
              className="fixed z-30 top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-12 flex items-center justify-between">
                  <div className="-mr-2">
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <Navigation popover={true} />
                </div>
                {/* <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-regal-purple bg-gray-50 hover:bg-gray-100 hidden"
                >
                  Log in
                </a> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>


        <main className = "z-20 pb-80">
          <div className="pt-40 mx-auto max-w-7xl sm:pt-64 px-4 align-middle">
            <div className="text-center">
              <h1 className="text-4xl tracking-normal font-extrabold z-20 text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block sm:ml-28 sm:mr-28 ml-4 mr-4">
                  <span className="inline xl:inline text-nathan-orange">
                    Integrate
                  </span>{" "}
                  <span className="inline xl:inline">
                    apps, data, and hardware
                  </span>
                  <span className="inline xl:inline"> in one</span>{" "}
                  <span className="inline xl:inline text-nathan-orange">
                    lab-as-code
                  </span>{" "}
                  <span className="inline xl:inline">platform</span>
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Ganymede is the first PaaS for laboratory software engineering.
                Quickly connect hardware, integrate apps, transform data using a
                powerful bio-aware low-code platform.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 pt-8">
                <div className="rounded-md shadow">
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-regal-purple-dark hover:bg-regal-purple md:py-4 md:text-lg md:px-10">
                    <Link href="#features-section ">Learn More</Link>
                  </div>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#contact-section"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-regal-purple bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="starfield" className = "z-10 absolute top-0 w-full">
            <Starfield />
          </div> */}

        </main>

        <div>
          <DividerTitleLeft title="Features" />
          <FeaturesSection />
        </div>
        <div>
          <DividerTitleLeft title="Platform"/>
          <PlatformSection />
        </div>
        <div>
          <DividerTitleLeft title="About Us" />
          <AboutSection />
        </div>
        <DividerTitleLeft title="Contact" />
        <div className="pt-10">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
