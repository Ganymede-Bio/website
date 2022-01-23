// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navigation from "../../layout/navs/Navigation";
import LoginButton from "../../components/buttons/LoginButton";

export default function HeaderDark() {
  return (
    <>
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 pb-4"
          aria-label="Global"
        >
          <Navigation />
          <LoginButton text="Log in" />
        </nav>
      </div>
    </>
  );
}
