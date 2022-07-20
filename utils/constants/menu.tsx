const menuUseCases = [
  {
    header: "For Scientists",
    // description: ["Lab instruments", "ELN, LIMS, Analysis apps", "Databases"],
    href: "/UseCaseScientist"
  },
  {
    header: "For Software Engineers",
    href: "/UseCaseSoftwareEngineer"
  },
  {
    header: "For Manufacturing IoT",
    href: "/UseCaseManufacturing"
  },
  {
    header: "For Management",
    href: "/UseCaseManagement"
  },
  // {
  //   header: "Client case studies",
  //   description: "Apprentice",
  //   href: "/#testimonial"
  // }
]

const menuProduct = [
  {
    header: "Platform",
    href: "/#product"
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
    href: "/#contact-us"
  }
]

export const navigation = [
  { name: "Use Cases", subMenu: menuUseCases },
  { name: "Product", subMenu: menuProduct },
  { name: "Company", subMenu: menuCompany },
  // { name: "Resources", subMenu: menuResources },
  { name: "Contact Us", subMenu: contactResources }
];

export const navigationFooter = [
  { name: 'About', href: "/About" },
  { name: 'Platform', href: '/Platform' },
  { name: 'Privacy', href: '/Privacy' },
  { name: 'Careers', href: "/Careers" },
  // { name: 'Press', href: '#' },
]