import React, { LegacyRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link"
import AnimateScale from "../animations/AnimateScale";
import Image from "next/image";
import { imageHostURL } from "../../utils/constants/constants";
import FlyoutMenu from "../../components/menus/FlyoutMenu";
import { IFlyoutMenu } from "../../types/MenuInterface";

import { navigation } from "../../utils/constants/menu";
import MobileFlyoutMenu from "./MobileFlyoutMenu";
import { classNames } from "../../utils/util";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm fixed w-full bg-gray-800 bg-opacity-90">
      <div className="w-full">
        <div className="flex items-center h-16 w-full">
          <div className="flex items-center mx-10 justify-between w-full">
            <div className="justify-center items-center flex-shrink-0">
              <div className="absolute inset-y-4">
                <Link href="/">

                  <AnimateScale scale={1.04}>
                    <Image
                      src={`${imageHostURL}/logo/ganymede_logo_white.png`}
                      alt="Ganymede main logo"
                      priority={true}
                      loading={"eager"}
                      width={146}
                      height={30}
                      quality={100}
                    />
                  </AnimateScale>

                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                {
                  navigation.map((menuItem: IFlyoutMenu) => (
                    <div key={menuItem.name}
                      className="block rounded-md text-base font-medium leading-relaxed text-gray-700">
                      < FlyoutMenu name={menuItem.name} subMenu={menuItem.subMenu} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="mr-10 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={classNames("bg-regal-purple-light inline-flex items-center justify-center p-2 rounded-md text-white",
                "hover:bg-regal-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-regal-purple-dark",
                "focus:ring-white")}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      <Transition
        show={isOpen}
        enter="transition ease-out duration-50 transform"
        enterFrom="opacity-50 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-50 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-50 scale-95"
      >
        {(ref: LegacyRef<HTMLDivElement>) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white"
            >
              {
                navigation.map((menuItem: IFlyoutMenu) => (
                  <div key={menuItem.name}
                    className="block text-base font-medium leading-relaxed bg-gray-800 text-gray-200">
                    < MobileFlyoutMenu name={menuItem.name} subMenu={menuItem.subMenu} />
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
