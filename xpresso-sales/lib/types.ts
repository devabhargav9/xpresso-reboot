export type Framework = "NAAC" | "NIRF" | "AISHE" | "NBA" | "UGC" | "AICTE";

export const FRAMEWORKS: Framework[] = [
  "NAAC",
  "NIRF",
  "AISHE",
  "NBA",
  "UGC",
  "AICTE",
];

export type Stakeholder =
  | "Student"
  | "Faculty"
  | "Dept Head"
  | "IQAC"
  | "Exam Cell"
  | "Research Cell"
  | "Admin"
  | "Principal";

export const STAKEHOLDERS: Stakeholder[] = [
  "Student",
  "Faculty",
  "Dept Head",
  "IQAC",
  "Exam Cell",
  "Research Cell",
  "Admin",
  "Principal",
];

export type LayerCode = "ALS" | "EMS" | "IMS";

export interface Feature {
  name: string;
  what: string;
  gives?: string;
  frameworks?: Framework[];
  stakeholders?: Stakeholder[];
  demoSlug?: string;
}

export interface CatalogModule {
  id: string;
  title: string;
  tagline: string;
  features: Feature[];
}

export interface Layer {
  code: LayerCode;
  name: string;
  tagline: string;
  longDescription: string;
  modules: CatalogModule[];
}

export interface Demo {
  slug: string;
  layer: "ALS" | "EMS";
  num: number;
  title: string;
  wow: string;
  steps: string[];
  milestone: number;
  status: "planned" | "in-progress" | "shipped";
}
