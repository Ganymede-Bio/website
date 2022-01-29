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
            <div key={item.name}  className="scroll-smooth font-medium pt-2 text-gray-500 hover:text-gray-900">
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))
        : navigation.map((item) => (
            <div key={item.name} className="block px-6 py-2 rounded-md text-base font-medium leading-relaxed text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
    </>
  );
}
