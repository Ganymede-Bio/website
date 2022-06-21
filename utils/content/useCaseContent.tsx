import {
  UploadIcon,
  BookOpenIcon,
  SwitchHorizontalIcon,
  ChatAlt2Icon,
  ArchiveIcon,
  CloudUploadIcon,
  ClipboardCopyIcon,
  KeyIcon,
  SupportIcon,
  SearchIcon,
  AnnotationIcon,
  BeakerIcon
} from "@heroicons/react/outline";

export const connectFeaturesScientist = [
  {
    id: "connect_feature_instrument_online",
    name: "Connect any instrument or data source",
    description:
      "Bring any instrument online to sync its data into Ganymede or your apps, from sequencers to flow cytometers, and everything in between.",
    icon: CloudUploadIcon,
  },
  {
    id: "connect_feature_data_upload",
    name: "Upload and analyze data automatically",
    description:
      "Ganymede can automatically process files in the cloud with easy file uploads, entering the result into your ELN or LIMS for you while performing validation and analysis along the way.",
    icon: UploadIcon,
  },
  {
    id: "connect_feature_data_tracking",
    name: "Never lose data or history",
    description:
      "We save a copy of everything we see into a cloud database for you, so you have a traceable and versioned record of all data, experiment results, code, and metadata in your lab, wherever they live.",
    icon: ArchiveIcon,
  },
];

export const apiFeaturesScientist = [
  {
    id: "api_feature_populate_eln_lims",
    name: "Populate any app automatically",
    description:
      "Automatically populate any application, from your ELN/LIMS, to analysis software like JMP/Graphpad, to web apps like Airtable or Notion.  Ganymede acts as the backend glue for data management so you can let each app do what it does best with your data.",
    icon: ClipboardCopyIcon,
  },
  {
    id: "api_feature_control_eln_directly",
    name: "Directly control your ELN",
    description:
      "Automatically enter data directly into ELN entries with Ganymede.  Save time on working with data, avoid human error, and capture more data than ever before.",
    icon: SwitchHorizontalIcon,
  }
];

export const analysisFeaturesScientist = [
  {
    id: "analysis_features_bench_data_accessibility",
    name: "Free your trapped data",
    description:
      "All your bench side data is organized and available at your fingertips, streamlining your analytical processes, no matter what app or instrument it lives in.  Ganymede can even ingest data directly from open public databases or CRO partners, as long as there's some data it can see.",
    icon: KeyIcon,
  },
  {
    id: "analysis_feature_data_sharing",
    name: "Crowdsource your results and analytics",
    description:
      "Make data and analysis to anyone, expanding your capability to innovate and ideate collaboratively.  Share data from any source using completely customizable permissioning, within your team or outside your company.",
    icon: ChatAlt2Icon,
  },
  {
    id: "analysis_feature_analytical_iteration",
    name: "Process your lab data as easily as your bioinformatics",
    description:
      "Debug and customize your automation logic in a Jupyter notebook-like environment to iterate quickly on your analyses and data movement.",
    icon: BeakerIcon,
  },
];

export const storageFeaturesScientist = [
  {
    id: "storage_feature_centralize_data",
    name: "Never lose track of your lab's raw data again.",
    description:
      "Automatically sync all data and metadata from connected instruments and pipelines into a tabular form.",
    icon: SupportIcon,
  },
  {
    id: "storage_feature_rollback",
    name: "Easily compare results between different experiment iterations",
    description:
      "Toggle workflow pipelines to flexibly process data collected on a given instrument over different experimental runs.",
    icon: SearchIcon,
  },
  {
    id: "storage_feature_crossreferencing",
    name: "Cross-reference external data sources",
    description:
      "Cross-reference your findings with data queried from public databases and received from CROs.",
    icon: AnnotationIcon,
  },
];

export const costEfficiencyUseCaseManagement = [
  {
    id: "management_use_case_end_to_end",
    name: "Fully customized and fully implemented solutions",
    description:
      "Whether integrating a single instrument into your LIMS, or automating your entire lab data infrastructure, we can address a wide range of data challenges and offer end-to-end installation of our platform.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_bridge_physical_lab_and_lims",
    name: "Bridge gaps between physical lab operations and ELN/LIMS",
    description:
      "We can bring any device online, from scales to sequencers, connecting them with existing data pipelines and LIMS to unify your infrastructure and increase your hardware and software ROI.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_eliminate_data_bottleneck",
    name: "Eliminate data processing bottlenecks",
    description:
      "Fully automate data capture, metadata generation, storage, and movement of data into and out of existing analytics platforms, LIMS, and databases, reducing manual input, delays, and costly mistakes.  Save time and improve compliance together.",
    icon: AnnotationIcon,
  },
];

export const structuredDataUseCaseManagement = [
  {
    id: "management_use_case_data_availability",
    name: "Make lab data readily available to all of your team",
    description:
      "Store versioned raw data, associated metadata, code, and processed analysis output in one cloud environment that team members can access, all with powerfully customizable code-based permissioning.  Ganymede's database is fully open and transparent to you to build on - think of it as a database we host on your behalf",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_integrate_data_from_outside_orgs",
    name: "Easily integrate data from outside organizations",
    description:
      "Tired of getting emailed data files from CROs? Connect your data pipeline to your collaborators directly to allow them to directly upload data into any app via Ganymede.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_ml_ready",
    name: "Make your data machine learning ready",
    description:
      "Structure your data so that it’s queryable and clean, so that you can rapidly incorporate popular statistics and machine learning libraries to expand your lab's analytical insights and efficiencies.",
    icon: AnnotationIcon,
  },
];

export const dataIntegrityUseCaseManagement = [
  {
    id: "management_use_case_change_documentation",
    name: "If someone touches the data, it will be documented",
    description:
      "Ganymede maintains complete, searchable data provenance by synchronizing all raw data generated, personnel metadata, and versioning from connected instruments and pipelines across your lab operations.  We save everything forever - not just audit logs, but all data state before and after every change.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_compliance_checkpoints",
    name: "Built-in compliance checkpoints for your processes",
    description:
      "Automatically lock and version your data, processes, and analyses piped into your preferred ELN or LIMS.  Maintain traceability between the data's source and destination.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_limit_manual_mistake",
    name: "Limit manual mistakes via data automation",
    description:
      "Reduce your organization’s risk of human error and non-compliance by automating lab data management.  Capture more data, more reliably than ever before.",
    icon: AnnotationIcon,
  },
];

export const scalabilityUseCaseManagement = [
  {
    id: "management_use_case_productionalization",
    name: "Straightforward and customizable coding environment",
    description:
      "Ganymede's low-code platform requires limited training to operationalize data processing or analysis.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_reduce_human_effort",
    name: "Get around critical staffing shortages",
    description:
      "Give your bench scientists superpowers to move faster, handle larger datasets, and avoid wasting time carting around files on USB sticks or doing repetitive analyses.  The power and flexibility of lab-as-code circumvents the chronic shortage of data scientists and software engineers.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_employee_productivity",
    name: "Scale to commercial success",
    description:
      "Sail through each stage of drug development faster and faster by having a robust data platform from the start.  Ganymede partners with clients from the earliest days of R&D up through GMP-level manufacturing.",
    icon: AnnotationIcon,
  },
];