export type DegreeType =
  | "Master"
  | "PartMaster"
  | "Bachelor"
  | "ContinuedStudies";
export type CampusFilter = "All" | Campus;
export type Campus = "Barcelona" | "Bangkok";

export interface DegreeData {
  [key: string]: Array<{
    id: string;
    name: string;
    description: string;
    category: "Technology" | "Business" | "Creative";
    icon: string;
    campuses: Campus[];
  }>;
}
