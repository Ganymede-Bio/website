import Link from "next/link";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Platform", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "Contact" },
];

export default function Navigation() {
  return (
    <div className="hidden space-x-8 md:flex md:ml-10">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-base font-medium text-white hover:text-gray-300"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
