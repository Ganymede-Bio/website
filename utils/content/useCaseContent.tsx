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

export const connectFeatures = [
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

export const apiFeatures = [
  {
    id: "api_feature_populate_eln_lims",
    name: "Populate your ELNs/LIMS systematically",
    description:
      "Automatically populate your ELN/LIMS with your experimental data in a structured way; we act as the backend glue for data management.",
    icon: ClipboardCopyIcon,
  },
  {
    id: "api_feature_bidirectional_communication",
    name: "Communicate bi-directionally between your ELN/LIMS and backend systems",
    description:
      "Update ELN entries as you gather instrument data.  Or enrich your observations with as you update ELN entries",
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

export const analysisFeatures = [
  {
    id: "analysis_features_bench_data_accessibility",
    name: "Free your trapped data",
    description:
      "All your bench side data is organized and available \"at your fingertips\" on your laptop, streamlining your analytical processes",
    icon: KeyIcon,
  },
  {
    id: "analysis_feature_data_sharing",
    name: "Share your results with corresponding raw data",
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

export const storageFeatures = [
  {
    id: "storage_feature_centralize_data",
    name: "Never lose track of your lab's raw data again.",
    description:
      "Automatically sync data and metadata from connected instruments and pipelines into a tabular form.",
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