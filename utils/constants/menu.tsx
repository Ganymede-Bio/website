const menuUseCases = [
  {
    header: "For Scientists",
    description: ["Lab instruments", "ELN, LIMS, Analysis apps", "Databases"],
    href: "#"
  },
  {
    header: "For Software Engineers",
    href: "#"
  },
  {
    header: "For Manufacturing IoT",
    href: "#"
  },
  {
    header: "For Management",
    href: "#"
  },
  {
    header: "Client case studies",
    href: "#"
  }
]

const menuProduct = [
  {
    header: "Platform",
    href: "/#platform-section"
  },
  {
    header: "Integration",
    href: "#"
  }
]

const menuCompany = [
  {
    header: "About",
    description: "Team, story, principles",
    href: "/#about-section"
  },
  {
    header: "Careers",
    href: "/Careers"
  }
]

const menuResources = [
  {
    header: "Documentation",
    href: "#"
  },
  {
    header: "API",
    href: "#"
  },
  {
    header: "Help",
    href: "#"
  }
]

const contactResources = [
  {
    header: "Contact",
    href: "/#contact-section"
  }
]

export const navigation = [
  { name: "Use Cases", subMenu: menuUseCases },
  { name: "Product", subMenu: menuProduct },
  { name: "Company", subMenu: menuCompany },
  { name: "Resources", subMenu: menuResources },
  { name: "Contact Us", subMenu: contactResources }
];