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
    name: "Bring all of your instrument data online",
    description:
      "We can bring any instrument online, from scales to sequencers to flow cytometers, and everything in between.",
    icon: CloudUploadIcon,
  },
  {
    id: "connect_feature_data_upload",
    name: "Upload and process data reliably and scalably",
    description:
      "Trigger scalable, event-driven data processing jobs you control by uploading your instrument data via our web-based interface",
    icon: UploadIcon,
  },
  {
    id: "connect_feature_data_tracking",
    name: "Never lose data or history",
    description:
      "Instrument settings, user metadata, and experimental conditions are stored in tables, linked with corresponding experimental data collected",
    icon: ArchiveIcon,
  },
];

export const apiFeaturesScientist = [
  {
    id: "api_feature_populate_eln_lims",
    name: "Populate your ELNs/LIMS systematically",
    description:
      "Automatically populate your ELN/LIMS with your experimental data in a structured way; we act as the backend glue for data management",
    icon: ClipboardCopyIcon,
  },
  {
    id: "api_feature_bidirectional_communication",
    name: "Communicate bi-directionally between your ELN/LIMS and backend systems",
    description:
      "Update ELN entries as you gather instrument data.  Or enrich your observations with your existing ELN entries",
    icon: SwitchHorizontalIcon,
  },
  {
    id: "api_feature_tooling_flexibility",
    name: "Maintain tooling flexibility for the future",
    description:
      "Have trouble settling on one ELN/LIMS?  We can flexibly support different data/analysis software, system architectures, and network topologies.",
    icon: BookOpenIcon,
  },
];

export const analysisFeaturesScientist = [
  {
    id: "analysis_features_bench_data_accessibility",
    name: "Free your trapped data",
    description:
      "All your bench side data is organized and available \"at your fingertips\" on your laptop, streamlining your analytical processes",
    icon: KeyIcon,
  },
  {
    id: "analysis_feature_data_sharing",
    name: "Crowdsource your results and analytics",
    description:
      "Make data and analysis accessible among your team, expanding your capability to innovate and ideate collaboratively",
    icon: ChatAlt2Icon,
  },
  {
    id: "analysis_feature_analytical_iteration",
    name: "Iterate on your pipelined data processing",
    description:
      "Debug and customize automated workflows in a notebook environment to iterate quickly on analytical infrastructure.",
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
      "Whether we\’re connecting a single instrument or integrating your entire lab data infrastructure, we can address a wide range of data challenges and offer end-to-end installation of our platform.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_bridge_physical_lab_and_lims",
    name: "Bridge the gaps between physical lab operations and LIMS",
    description:
      "We can bring any device online, from scales to sequencers, connecting them with existing data pipelines and LIMS to unify your infrastructure and increase your hardware and software ROI.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_eliminate_data_bottleneck",
    name: "Eliminate data processing bottlenecks",
    description:
      "Fully automate data capture, metadata generation, storage, and movement of data into and out of existing analytics platforms, LIMS, and databases, reducing manual input, delays, and costly mistakes.",
    icon: AnnotationIcon,
  },
];

export const structuredDataUseCaseManagement = [
  {
    id: "management_use_case_data_availability",
    name: "Make lab data readily available to all of your team",
    description:
      "Store versioned raw data, associated metadata, code, and processed output in one cloud environment that all team members can access.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_integrate_data_from_outside_orgs",
    name: "Easily integrate data from outside organizations",
    description:
      "Tired of getting emailed data files from CROs? Connect your data pipeline to your collaborators directly for ensuring consistency in data presentation.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_ml_ready",
    name: "Make your data machine learning ready",
    description:
      "Structure your data so that it’s queryable and clean, so that you can incorporate popular statistics and machine learning libraries to expand your lab's analytical capabilities.",
    icon: AnnotationIcon,
  },
];

export const dataIntegrityUseCaseManagement = [
  {
    id: "management_use_case_change_documentation",
    name: "If someone touches the data, it will be documented",
    description:
      "Maintain complete, searchable data provenance by automating synchronization of all raw data generated, personnel metadata, and versioning from connected instruments and pipelines across your lab operations.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_compliance_checkpoints",
    name: "Built-in compliance checkpoints for your processes",
    description:
      "Install fully customizable institutional controls like e-signatures at any stage of data processing.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_limit_manual_mistake",
    name: "Limit manual mistakes via data automation",
    description:
      "Reduce your organization’s risk of human error and non-compliance by automating lab data management.",
    icon: AnnotationIcon,
  },
];

export const scalabilityUseCaseManagement = [
  {
    id: "management_use_case_productionalization",
    name: "Straightforward and customizable coding environment",
    description:
      "Intuitive low-code platform that requires limited training to productionalize data processes.",
    icon: SupportIcon,
  },
  {
    id: "management_use_case_reduce_human_effort",
    name: "Get around critical staffing shortages",
    description:
      "The power and flexibility of lab-as-code circumvents the chronic shortage of data scientists and software engineers.",
    icon: SearchIcon,
  },
  {
    id: "management_use_case_employee_productivity",
    name: "Greater scale and higher employee productivity",
    description:
      "Data automation and the resulting efficiency enables employees to generate and handle larger data volume in less time.",
    icon: AnnotationIcon,
  },
];