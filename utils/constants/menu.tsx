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
    description: "Apprentice",
    href: "#testimonial"
  }
]

const menuProduct = [
  {
    header: "Platform",
    href: "/Platform"
  },
  {
    header: "Integration",
    href: "/#integration"
  }
]

const menuCompany = [
  {
    header: "About",
    description: "Team, story, principles",
    href: "/About"
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
    href: "/Contact"
  }
]

export const navigation = [
  { name: "Use Cases", subMenu: menuUseCases },
  { name: "Product", subMenu: menuProduct },
  { name: "Company", subMenu: menuCompany },
  { name: "Resources", subMenu: menuResources },
  { name: "Contact Us", subMenu: contactResources }
];

export const navigationFooter = [
  { name: 'About', href: "/About" },
  { name: 'Platform', href: '/Platform' },
  { name: 'Careers', href: "/Careers" },
  { name: 'Press', href: '#' },
]