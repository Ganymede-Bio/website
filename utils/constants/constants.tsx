import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export const darkMode: boolean = true;

export const navigation = [
  { name: "Features", href: "Features", current: false },
  { name: "Platform", href: "Platform", current: false },
  { name: "About", href: "About", current: false },
  { name: "Contact", href: "Contact", current: false },
];

export const features = [
  {
    name: "Simple UI-based data mapping",
    description:
      "Visualize your integrations’ data structure for easy point-and-click mapping, or write code for more complex mappings. Build an entire DAG as you go. ",
    icon: GlobeAltIcon,
  },
  {
    name: "Biologically-aware types and connectors",
    description:
      "Quickly organize data into bio objects through powerful types, and out-of-the-box connectors to LIMS like Benchling or data formats like FASTA.",
    icon: ScaleIcon,
  },
  {
    name: "Never lose data or history",
    description:
      "Quickly revert changes or imports if your data format breaks. Store everything all the time for auditing and debugging experiments.",
    icon: LightningBoltIcon,
  },
  {
    name: "Powerful lab-as-code tooling for engineers",
    description:
      "Ganymede offers a declarative library of high-level automation tools and bioinformatic functions so you don’t have to reinvent the wheel.",
    icon: AnnotationIcon,
  },
  {
    name: "An ORM over your integrations",
    description:
      "Virtualize your integrations to build using their internal schema within Ganymede. Inherit structure from apps, open public databases, ontologies, etc.",
    icon: AnnotationIcon,
  },
  {
    name: "Build entire applications",
    description:
      "Simple persistence within Ganymede allows for rapidly building apps, no other backend needed. Turn any interface into a CRUD form for your users.",
    icon: AnnotationIcon,
  },
];

export const people = [
  {
    name: "Nathan Clark",
    role: "Co-Founder",
    imageUrl: "/people/headshot_nathan_clark.png",
    linkedinUrl: "https://www.linkedin.com/in/nathan-clark-4b850134",
    githubUrl: "https://github.com/nathanwjclark",
  },
  {
    name: "Benson Lee",
    role: "Co-Founder",
    imageUrl: "/people/headshot_benson_lee.png",
    linkedinUrl: "https://www.linkedin.com/in/benson-lee-69980745",
    githubUrl: "https://github.com/bensonlee5",
  },
];
