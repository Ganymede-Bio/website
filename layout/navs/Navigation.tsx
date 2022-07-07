import { navigation } from "../../utils/constants/menu";
import FlyoutMenu from "../../components/menus/FlyoutMenu";
import { IFlyoutMenu } from "../../types/MenuInterface";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import AnimateScale from "../../components/animations/AnimateScale";
import Link from "next/link";

export default function Navigation() {
  return (
    <Popover>

      <div className="flex align-center justify-around">
        <div className="mt-2 pl-10 flex-shrink-0 z-20">
          <AnimateScale scale={1.04}>
            <Link href="/">
              <a>
                <Image
                  src="/logo/ganymede_logo_white.png"
                  alt="Ganymede main logo"
                  width={139}
                  height={28}
                  quality={100}
                />
              </a>
            </Link>
          </AnimateScale>
        </div>

        <div className="absolute mx-auto w-screen">
          <nav
            className="align-center flex justify-center"
            aria-label="Global"
          >
            {
              navigation.map((menuItem: IFlyoutMenu) => (
                <div key={menuItem.name}
                  className="block rounded-md text-base font-medium leading-relaxed text-gray-700">
                  < FlyoutMenu name={menuItem.name} subMenu={menuItem.subMenu} />
                </div>
              ))
            }
          </nav>
        </div>
      </div>

    </Popover >
  );
}