import {
  ArrowUpOnSquareIcon,
  ArrowsRightLeftIcon,
  ChatBubbleOvalLeftIcon,
  ArchiveBoxIcon,
  CloudArrowUpIcon,
  ClipboardDocumentIcon,
  KeyIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  BeakerIcon,
  MapIcon,
  BuildingLibraryIcon,
  ServerIcon,
  InboxArrowDownIcon,
  InboxStackIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  ClockIcon,
  SparklesIcon,
  CloudIcon,
  FingerPrintIcon,
  IdentificationIcon,
  ClipboardIcon,
  ArrowPathIcon,
  TableCellsIcon,
  CubeTransparentIcon,
  AdjustmentsVerticalIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  ViewColumnsIcon,
  UsersIcon,
  CommandLineIcon,
  SunIcon
} from "@heroicons/react/24/outline";


export const connectFeaturesScientist = [
  {
    id: "connect_feature_instrument_online",
    name: "Connect any instrument or data source",
    description:
      "Bring any instrument online to sync its data into Ganymede or your apps, from sequencers to flow cytometers, and everything in between.",
    icon: CloudArrowUpIcon,
  },
  {
    id: "connect_feature_data_upload",
    name: "Upload and analyze data automatically",
    description:
      "Ganymede can automatically process files in the cloud with easy file uploads, entering the result into your ELN or LIMS for you while performing validation and analysis along the way.",
    icon: ArrowUpOnSquareIcon,
  },
  {
    id: "connect_feature_data_tracking",
    name: "Never lose data or history",
    description:
      "We save a copy of everything we see into a cloud database for you, so you have a traceable and versioned record of all data, experiment results, code, and metadata in your lab, wherever they live.",
    icon: ArchiveBoxIcon,
  },
];

export const apiFeaturesScientist = [
  {
    id: "api_feature_populate_eln_lims",
    name: "Populate any app automatically",
    description:
      "Automatically populate any application, from your ELN/LIMS, to analysis software like JMP/Graphpad, to web apps like Airtable or Notion.  Ganymede acts as the backend glue for data management so you can let each app do what it does best with your data.",
    icon: ClipboardDocumentIcon,
  },
  {
    id: "api_feature_control_eln_directly",
    name: "Directly control your ELN",
    description:
      "Automatically enter data directly into ELN entries with Ganymede.  Save time on working with data, avoid human error, and capture more data than ever before.",
    icon: ArrowsRightLeftIcon,
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
    icon: ChatBubbleOvalLeftIcon,
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
    icon: InformationCircleIcon,
  },
  {
    id: "storage_feature_rollback",
    name: "Easily compare results between different experiment iterations",
    description:
      "Toggle workflow pipelines to flexibly process data collected on a given instrument over different experimental runs.",
    icon: MagnifyingGlassIcon,
  },
  {
    id: "storage_feature_crossreferencing",
    name: "Cross-reference external data sources",
    description:
      "Cross-reference your findings with data queried from public databases and received from CROs.",
    icon: PencilSquareIcon,
  },
];

export const costEfficiencyUseCaseManagement = [
  {
    id: "management_use_case_end_to_end",
    name: "Fully customized and fully implemented solutions",
    description:
      "Whether integrating a single instrument into your LIMS, or automating your entire lab data infrastructure, we can address a wide range of data challenges and offer end-to-end installation of our platform.",
    icon: BuildingLibraryIcon,
  },
  {
    id: "management_use_case_bridge_physical_lab_and_lims",
    name: "Bridge gaps between physical lab operations and ELN/LIMS",
    description:
      "We can bring any device online, from scales to sequencers, connecting them with existing data pipelines and LIMS to unify your infrastructure and increase your hardware and software ROI.",
    icon: ArrowsRightLeftIcon,
  },
  {
    id: "management_use_case_eliminate_data_bottleneck",
    name: "Eliminate data processing bottlenecks",
    description:
      "Fully automate data capture, metadata generation, storage, and movement of data into and out of existing analytics platforms, LIMS, and databases, reducing manual input, delays, and costly mistakes.  Save time and improve compliance together.",
    icon: ServerIcon,
  },
];

export const structuredDataUseCaseManagement = [
  {
    id: "management_use_case_data_availability",
    name: "Make lab data readily available to all of your team",
    description:
      "Store versioned raw data, associated metadata, code, and processed analysis output in one cloud environment that team members can access, all with powerfully customizable code-based permissioning.  Ganymede's database is fully open and transparent to you to build on - think of it as a database we host on your behalf",
    icon: MapIcon,
  },
  {
    id: "management_use_case_integrate_data_from_outside_orgs",
    name: "Easily integrate data from outside organizations",
    description:
      "Tired of getting emailed data files from CROs? Connect your data pipeline to your collaborators directly to allow them to directly upload data into any app via Ganymede.",
    icon: InboxArrowDownIcon,
  },
  {
    id: "management_use_case_ml_ready",
    name: "Make your data machine learning ready",
    description:
      "Structure your data so that it’s queryable and clean, so that you can rapidly incorporate popular statistics and machine learning libraries to expand your lab's analytical insights and efficiencies.",
    icon: InboxStackIcon,
  },
];

export const dataIntegrityUseCaseManagement = [
  {
    id: "management_use_case_change_documentation",
    name: "If someone touches the data, it will be documented",
    description:
      "Ganymede maintains complete, searchable data provenance by synchronizing all raw data generated, personnel metadata, and versioning from connected instruments and pipelines across your lab operations.  We save everything forever - not just audit logs, but all data state before and after every change.",
    icon: DocumentTextIcon,
  },
  {
    id: "management_use_case_compliance_checkpoints",
    name: "Built-in compliance checkpoints for your processes",
    description:
      "Automatically lock and version your data, processes, and analyses piped into your preferred ELN or LIMS.  Maintain traceability between the data's source and destination.",
    icon: BriefcaseIcon,
  },
  {
    id: "management_use_case_limit_manual_mistake",
    name: "Limit manual mistakes via data automation",
    description:
      "Reduce your organization’s risk of human error and non-compliance by automating lab data management.  Capture more data, more reliably than ever before.",
    icon: ClipboardDocumentCheckIcon,
  },
];

export const scalabilityUseCaseManagement = [
  {
    id: "management_use_case_productionalization",
    name: "Straightforward and customizable coding environment",
    description:
      "Ganymede's low-code platform requires limited training to operationalize data processing or analysis.",
    icon: CpuChipIcon,
  },
  {
    id: "management_use_case_reduce_human_effort",
    name: "Get around critical staffing shortages",
    description:
      "Give your bench scientists superpowers to move faster, handle larger datasets, and avoid wasting time carting around files on USB sticks or doing repetitive analyses.  The power and flexibility of lab-as-code circumvents the chronic shortage of data scientists and software engineers.",
    icon: ClockIcon,
  },
  {
    id: "management_use_case_employee_productivity",
    name: "Scale to commercial success",
    description:
      "Sail through each stage of drug development faster and faster by having a robust data platform from the start.  Ganymede partners with clients from the earliest days of R&D up through GMP-level manufacturing.",
    icon: SparklesIcon,
  },
];

export const storageUseCaseManufacturing = [
  {
    id: "manufacturing_use_case_data_historian",
    name: "Capture all raw data from your equipment, forever",
    description:
      "Ganymede captures and permanently saves all raw data and signals from your instruments, enabling you to go beyond audit logs in associating systems with processes.  Instead, just look at past state directly.",
    icon: FingerPrintIcon,
  },
  {
    id: "manufacturing_use_case_compliance",
    name: "Turn your non-compliant machines into compliant ones",
    description:
      "By storing instrument data, instrument configuration, user information, and even business logic, Ganymede makes compliance a breeze.  Associate raw data through drivers, analyses, and cleaning all the way down to final scientific results and QC checks.",
    icon: IdentificationIcon,
  },
  {
    id: "manufacturing_use_case_standardization",
    name: "Observe your data in a single queryable data lake",
    description:
      "Ganymede gathers metadata and data in a tabular form within a single environment, enabling you to quickly develop insights from data gathered across different data sources.",
    icon: TableCellsIcon,
  },
];

export const integrationUseCaseManufacturing = [
  {
    id: "manufacturing_use_case_les_mes_integration",
    name: "Combine your LIMS data with your MES and LES",
    description: "Sync data between your lab and manufacturing systems, while maintaining the associations between raw data and end results.",
    icon: ArrowPathIcon
  },
  {
    id: "manufacturing_use_case_data_source_integration",
    name: "Integrate with your existing databases",
    description: "Flexibly transit data in and out of the Ganymede cloud to your databases, so you can maintain continuity with your existing processes and ensure flexibility with respect to future software infrastructure you choose to use.",
    icon: DocumentTextIcon
  },
  {
    id: "manufacturing_use_case_integration_choice",
    name: "Developed with your needs in mind",
    description: "The Ganymede cloud is modular, building upon popular open-source software packages to maximize compatibility with existing software systems.",
    icon: ClipboardIcon
  },
]

export const modernUseCaseManufacturing = [
  {
    id: "manufacturing_use_case_modern_infra",
    name: "Built on modern cloud-native infrastructure",
    description: "Ganymede is built upon Google Cloud Platform, primarily using serverless architecture.  This ensures resilience through the guarantees provided by GCP, such as its famous \"11 nines\" of data durability and ability to scale across any number of sites through autoscaling.",
    icon: CloudIcon
  },
  {
    id: "manufacturing_use_case_value_scale",
    name: "Spend more time on higher value-add efforts",
    description: "With one platform for monitoring and analysis, spend more time optimizing and less time operationalizing your processes.",
    icon: AcademicCapIcon
  },
  {
    id: "manufacturing_use_case_hands_on_hands_off",
    name: "As hands-on or hands-off as you would like",
    description: "Ganymede can consultatively implement cloud infrastructure and analytics for you, or provide the platform for your engineers to use.",
    icon: AdjustmentsVerticalIcon
  }
]

export const whatIsGanymedeUseCaseSoftware = [
  {
    id: "software_use_case_what_coding",
    name: "Programmatically interact with your ELN/LIMS",
    description: "Write sophisticated logic to associate your experimental results with ELN/LIMS context using configurable Python/SQL environments.",
    icon: CubeTransparentIcon
  },
  {
    id: "software_use_case_what_analysis",
    name: "Seamlessly scale your analytical jobs from analysis and pipelines",
    description: "Save Devops effort by using Ganymede to directly modify pipeline operators via a browser-based IDE.  Your code and pipeline changes are synced with a Git repo so you can move fast and make things happen.  View redlines of changed versions and roll back seamlessly.",
    icon: ArrowTrendingUpIcon
  },
  {
    id: "software_use_case_what_orchestration",
    name: "Lab-as-code data processing",
    description: "Monitor and orchestrate workflow pipelines via graphical interfaces, troubleshooting in a user-friendly environment.  Changes to pipelines are checked before they are committed, so a mis-typed column name won't bring your pipeline down.",
    icon: ViewColumnsIcon
  },
]

export const infraUseCaseSoftware = [
  {
    id: "software_use_case_communication",
    name: "Meld your dry and wet labs",
    description: "Feed your instrument metadata/data to your computational scientists, and empower your bench scientists to contextualize data.",
    icon: UsersIcon
  },
  {
    id: "software_use_case_infra_focus",
    name: "Write code for your experimental data, not your coding environment",
    description: "Manipulate your instrument and LIMS data in one computing environment.  Ganymede supplies serverless cloud infra tailored to your needs.",
    icon: CommandLineIcon
  },
  {
    id: "software_use_case_version_control",
    name: "Souped-up version control",
    description: "Ganymede cloud versions code, data pipelines, and raw data, so you can revisit what you need, when you need it.",
    icon: ArchiveBoxIcon
  }
]

export const principlesUseCaseSoftware = [
  {
    id: "software_use_case_open_source",
    name: "Built on open source",
    description: "Ganymede cloud builds upon established open source software to ensure its components are well-supported, long-lived, and maximally compatible with hardware and software in the life sciences.",
    icon: SunIcon
  },
  {
    id: "software_use_case_consistency",
    name: "Capture everything",
    description: "Capture and standardize all of your data/metadata as it's generated in a consistent form, so experimental context is fully preserved.",
    icon: CubeTransparentIcon
  },
  // {
  //   id: "software_use_case_ergonomics",
  //   name: "Developer and scientist-first ergonomics",
  //   description: "Ganymede strives to ",
  //   icon: SupportIcon
  // },
]
