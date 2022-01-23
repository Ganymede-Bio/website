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

export const cards = [
  {
    title: "Complimentary to your stack",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Pull from Ganymede’s APIs/library, push by connecting it to your database directly, or use it on its own as your backend.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Keep your data safe",
    href: "#",
    category: { name: "Testimonial", href: "#" },
    description:
      "Your data is secure and exclusively yours in the Ganymede platform. Strong user permissioning tools and network security help keep it that way.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Set your own pace",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Manage how quickly you need your backend to run and data to sync through our serverless architecture.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
