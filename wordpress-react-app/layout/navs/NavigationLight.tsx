const navigation = [
  { name: "Features", href: "#" },
  { name: "Platform", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "Contact" },
];

export default function NavigationLight() {
  return (
    <div className="hidden space-x-8 md:flex md:ml-10">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-base font-medium text-black hover:text-gray-300"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
