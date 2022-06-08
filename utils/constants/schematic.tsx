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

export const schematicBeforeFeatures = [
  {
    id: "schematic_feature_metadata_lost",
    name: "Metadata is lost",
    description:
      "Metadata such as instrument settings, last date of service, which user performed the analysis, and experiment time is not tracked",
    icon: SwitchVerticalIcon,
  },
  {
    id: "schematic_feature_raw_data_lost",
    name: "Raw data is lost",
    description:
      "Raw data is lost; analyses cannot be modified later or re-run without substantial effort.",
    icon: UserIcon,
  },
  {
    id: "schematic_time_is_lost",
    name: "Process scaling is time-consuming",
    description:
      "Lack of traceability and automation makes meta-analyses and process scaling time-consuming.",
    icon: TrashIcon,
  },
];

export const schematicAfterFeatures = [
  {
    id: "schematic_data_mapped_versioned",
    name: "Raw and analyzed data are mapped and versioned",
    description:
      "Raw and analyzed data are versioned and mapped; for each analysis, you know who ran what instrument to product what result when.",
    icon: SwitchVerticalIcon,
  },
  {
    id: "schematic_apps_synced",
    name: "Sources of truth are synced",
    description:
      "Apps like ELN/LIMS or analytical databases are synced so they remain the source of truth.",
    icon: UserIcon,
  },
  {
    id: "schematic_rerun_analysis",
    name: "Analysis can be readily revisited",
    description:
      "Rerun, debug, or reconfigure analysis as needed by observing data in their captured state",
    icon: TrashIcon,
  },
];