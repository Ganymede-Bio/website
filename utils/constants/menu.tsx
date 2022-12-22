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
    // description: "Team, story, principles",
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

export const contactLink = "/#contact-us"

const contactResources = [
  {
    header: "Contact",
    href: contactLink
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
  { name: 'Platform', href: '/#product' },
  { name: 'Privacy', href: '/Privacy' },
  { name: 'Careers', href: "/Careers" },
  // { name: 'Press', href: '#' },
]

export const announcements =
  { name: "Ganymede Bio Raises $12.75 Million in Series A Funding", href: "https://www.businesswire.com/news/home/20221220005248/en/Ganymede-Bio-the-Cloud-Provider-Purpose-Built-for-the-Life-Sciences-and-Manufacturing-Industries-Raises-12.75-Million-in-Series-A-Funding" }
