import {
  DesktopComputerIcon,
  BeakerIcon,
  BriefcaseIcon,
  RefreshIcon,
  DatabaseIcon,
  GlobeIcon,
  SwitchVerticalIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export const uiFeatures = [
  {
    id: "ui_feature_simple_ui_based_data_mapping",
    name: "The easiest UI for writing business logic",
    description:
      "Engineers code integrations' skeletons, then visualize them in an automatically-generated UI for scientists to review and write business logic. Build an entire DAG as you go. ",
    icon: RefreshIcon,
  },
  {
    id: "ui_feature_biologically_aware_types_and_connectors",
    name: "Biologically-aware types and connectors",
    description:
      "Quickly organize data into bio objects through powerful types, and out-of-the-box connectors to your hardware and software.",
    icon: BeakerIcon,
  },
  {
    id: "ui_feature_never_lose_data_or_history",
    name: "Never lose data or history",
    description:
      "Quickly revert changes or imports if your data format breaks. Store everything all the time for auditing and debugging experiments.",
    icon: BriefcaseIcon,
  },
];

export const apiFeatures = [
  {
    id: "api_feature_powerful_lab_as_code_tooling_for_engineers",
    name: "Powerful Terraform-like lab-as-code tooling",
    description:
      "Ganymede offers a declarative library of high-level automation tools and bioinformatic functions so you don’t have to reinvent the wheel.",
    icon: DesktopComputerIcon,
  },
  {
    id: "api_feature_an_orm_over_your_integrations",
    name: "An ORM over your integrations",
    description:
      "Virtualize your integrations to build using their internal schema within Ganymede. Inherit structure from apps, open public databases, ontologies, etc.",
    icon: DatabaseIcon,
  },
  {
    id: "api_feature_build_entire_applications",
    name: "Build entire applications",
    description:
      "Simple persistence within Ganymede allows for rapidly building apps, no other backend needed. Turn any interface into a CRUD form for your users.",
    icon: GlobeIcon,
  },
];

export const transfersFeatures = [
  {
    id: "transfer_feature_never_do_data_entry_again",
    name: "Never do data entry again",
    description:
      "Automate ingestion by OCR-ing your PDFs into JSON key:value pairs, parse chart images into tables, and infer data types from CSV contents.",
    icon: SwitchVerticalIcon,
  },
  {
    id: "transfer_feature_self_serve_human_in_the_loop_tooling",
    name: "Self-serve human-in-the-loop tooling",
    description:
      "Empower scientists and analysts to self-serve fix broken data imports by changing lines of code through a simple web interface.",
    icon: UserIcon,
  },
  {
    id: "ml_powered_data_cleaning",
    name: "ML-powered data cleaning",
    description:
      "Automatically check for errors, fat-fingers, and scientific process issues with easy out-of-the-box ML tools for file cleaning and monitoring.",
    icon: TrashIcon,
  },
];