import { navigation } from "../../utils/constants/constants";
import Link from "next/link";

interface INavigation {
  popover: boolean;
}

export default function Navigation({ popover }: INavigation) {
  return (
    <>
      {popover
        ? navigation.map((item) => (
            <div className="font-medium text-gray-500 hover:text-gray-900">
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            </div>
          ))
        : navigation.map((item) => (
            <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            </div>
          ))}
    </>
  );
}
