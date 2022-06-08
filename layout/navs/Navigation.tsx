import { navigation } from "../../utils/constants/menu";
import FlyoutMenu from "../../components/menus/FlyoutMenu";
import { IFlyoutMenu } from "../../types/MenuInterface";
import Image from "next/image";
import { Popover } from "@headlessui/react";
// import { MenuIcon } from "@heroicons/react/outline";
// import { IFlyoutMenu } from "../../types/MenuInterface"

// interface INavigation {
//   popover: boolean;
// }

export default function Navigation() {
  return (
    <Popover>
      <div className="fixed top-0 mt-3 left-0 w-full mx-auto px-4 sm:px-6 z-40 ">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto pt-2 relative">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <Image
                  src="/logo/ganymede_logo_white.png"
                  alt=""
                  width={139}
                  height={28}
                  quality={100}
                />
              </a>
              {/* <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-250 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-regal-purple">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" />
                </Popover.Button>
              </div> */}
            </div>
          </div>
          {
            navigation.map((menuItem: IFlyoutMenu) => (
              <div key={menuItem.name} className="block px-6 py-2 rounded-md text-base font-medium leading-relaxed text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                < FlyoutMenu name={menuItem.name} subMenu={menuItem.subMenu} />
              </div>
            ))
          }
        </nav>
      </div>
    </Popover>
  );
}
