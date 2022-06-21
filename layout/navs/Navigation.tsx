import { navigation } from "../../utils/constants/menu";
import FlyoutMenu from "../../components/menus/FlyoutMenu";
import { IFlyoutMenu } from "../../types/MenuInterface";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import AnimateScale from "../../components/animations/AnimateScale";

export default function Navigation() {
  return (
    <Popover>

      <div className="flex items-center relative">
        <div className="pt-2">
          <AnimateScale scale={1.1}>
            <a href="/">
              {/* <span className="sr-only">Workflow</span> */}
              <Image
                src="/logo/ganymede_logo_white.png"
                alt=""
                width={139}
                height={28}
                quality={100}
              />
            </a>
          </AnimateScale>
        </div>
        <div className="relative fixed top-0 ml-16 w-full mx-auto z-40">
          <nav
            className="relative flex"
            aria-label="Global"
          >
            {
              navigation.map((menuItem: IFlyoutMenu) => (
                <div key={menuItem.name}
                  className="block px-6 rounded-md text-base font-medium leading-relaxed text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  < FlyoutMenu name={menuItem.name} subMenu={menuItem.subMenu} />
                </div>
              ))
            }
          </nav>
        </div>
      </div>
    </Popover>
  );
}