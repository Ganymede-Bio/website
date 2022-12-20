import {
  BeakerIcon,
  BriefcaseIcon,
  ArrowsUpDownIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const schematicBeforeFeatures = [
  {
    id: "schematic_feature_metadata_lost",
    name: "Metadata is lost",
    description:
      "Metadata such as instrument settings, last date of service, which user performed the analysis, and experiment time is not tracked",
    icon: ArrowsUpDownIcon,
  },
  {
    id: "schematic_feature_raw_data_lost",
    name: "Raw data is lost",
    description:
      "Raw data is lost; analyses cannot be modified or re-run without substantial effort. Lack of traceability makes meta-analyses difficult.",
    icon: UserIcon,
  },
  {
    id: "schematic_time_is_lost",
    name: "Data entry is time-consuming",
    description:
      "Even just entering the primary analysis results becomes a drag on scientists' productivity.",
    icon: TrashIcon,
  },
];

export const schematicAfterFeatures = [
  {
    id: "schematic_data_mapped_versioned",
    name: "Sync everything into the cloud automatically",
    description:
      "All your raw data, analyzed data, metadata, and even the internal data from your intergrated apps is saved forever in a single cloud data lake.",
    icon: ArrowsUpDownIcon,
  },
  {
    id: "schematic_apps_synced",
    name: "Do any analysis, add any metadata, push results anywhere",
    description:
      "Run analyses automatically and add metadata automatically. Push results into any app or pipeline, or even back to instruments for control.",
    icon: UserIcon,
  },
  {
    id: "schematic_rerun_analysis",
    name: "Compliance is a snap with universal versioning",
    description:
      "Go beyond audit logs. Ganymede saves all data and code it ever sees, making GxP easy: rewind time to any point and see who changed things.",
    icon: TrashIcon,
  },
];