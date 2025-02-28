import type { Campus, DegreeType } from "../types";
import { degreeMetadata } from "./degreeMetadata";

export interface Degree {
  id: string;
  name: string;
  description: string;
  category: "Technology" | "Creative" | "All Programmes";
  icon: string | null;
  campuses: Campus[];
}

export interface DegreeCollection {
  Master: Degree[];
  PartMaster: Degree[];
  Bachelor: Degree[];
  ContinuedStudies: Degree[];
}

// Ensure DegreeType includes PartMaster
export const degreeData: Record<DegreeType, Degree[]> = {
  Master: [
    {
      id: "applied-computer-and-data-science-master",
      name: "Applied Computer and Data Science",
      description:
        degreeMetadata["applied-computer-and-data-science"].description,
      category: "Technology",
      icon: degreeMetadata["applied-computer-and-data-science"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "artificial-intelligence-master",
      name: "Artificial Intelligence",
      description: degreeMetadata["artificial-intelligence"].description,
      category: "Technology",
      icon: degreeMetadata["artificial-intelligence"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "computer-science-master",
      name: "Computer Science",
      description: degreeMetadata["computer-science"].description,
      category: "Technology",
      icon: degreeMetadata["computer-science"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "cyber-security-master",
      name: "Cyber Security",
      description: degreeMetadata["cyber-security"].description,
      category: "Technology",
      icon: degreeMetadata["cyber-security"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "data-science-master",
      name: "Data Science",
      description: degreeMetadata["data-science"].description,
      category: "Technology",
      icon: degreeMetadata["data-science"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "front-end-development-master",
      name: "Front-End Development",
      description: degreeMetadata["front-end-development"].description,
      category: "Technology",
      icon: degreeMetadata["front-end-development"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-marketing-master",
      name: "Digital Marketing",
      description: degreeMetadata["digital-marketing"].description,
      category: "Creative",
      icon: degreeMetadata["digital-marketing"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-transformation-master",
      name: "Digital Transformation",
      description: degreeMetadata["digital-transformation"].description,
      category: "Creative",
      icon: degreeMetadata["digital-transformation"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "fintech-master",
      name: "Fintech",
      description: degreeMetadata.fintech.description,
      category: "Creative",
      icon: degreeMetadata.fintech.icon,
      campuses: ["Barcelona"],
    },
    {
      id: "high-tech-entrepreneurship-master",
      name: "High-Tech Entrepreneurship",
      description: degreeMetadata["high-tech-entrepreneurship"].description,
      category: "Creative",
      icon: degreeMetadata["high-tech-entrepreneurship"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "interaction-design-master",
      name: "Interaction Design",
      description: degreeMetadata["interaction-design"].description,
      category: "Creative",
      icon: degreeMetadata["interaction-design"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "product-management-master",
      name: "Product Management",
      description: degreeMetadata["product-management"].description,
      category: "Creative",
      icon: degreeMetadata["product-management"].icon,
      campuses: ["Barcelona"],
    },
  ],
  PartMaster: [
    {
      id: "computer-science-part-master",
      name: "Part-time Computer Science",
      description: degreeMetadata["computer-science"].description,
      category: "Technology",
      icon: degreeMetadata["computer-science"].icon,
      campuses: ["Barcelona"],
    },
    // Add more PartMaster degrees as needed
  ],
  Bachelor: [
    {
      id: "computer-science-bachelor",
      name: "Computer Science",
      description: degreeMetadata["computer-science"].description,
      category: "Technology",
      icon: degreeMetadata["computer-science"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "front-end-development-bachelor",
      name: "Front-End Development",
      description: degreeMetadata["front-end-development"].description,
      category: "Technology",
      icon: degreeMetadata["front-end-development"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "data-science-bachelor",
      name: "Data Science",
      description: degreeMetadata["data-science"].description,
      category: "Technology",
      icon: degreeMetadata["data-science"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "cyber-security-bachelor",
      name: "Cyber Security",
      description: degreeMetadata["cyber-security"].description,
      category: "Technology",
      icon: degreeMetadata["cyber-security"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "international-business-bachelor",
      name: "International Business",
      description: degreeMetadata["international-business"].description,
      category: "Creative",
      icon: degreeMetadata["international-business"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "high-tech-entrepreneurship-bachelor",
      name: "High-Tech Entrepreneurship",
      description: degreeMetadata["high-tech-entrepreneurship"].description,
      category: "Creative",
      icon: degreeMetadata["high-tech-entrepreneurship"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "interaction-design-bachelor",
      name: "Interaction Design",
      description: degreeMetadata["interaction-design"].description,
      category: "Creative",
      icon: degreeMetadata["interaction-design"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-marketing-bachelor",
      name: "Digital Marketing",
      description: degreeMetadata["digital-marketing"].description,
      category: "Creative",
      icon: degreeMetadata["digital-marketing"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
  ],
  ContinuedStudies: [
    {
      id: "foundation-year",
      name: "Foundation Year",
      description: degreeMetadata["foundation-year"].description,
      category: "All Programmes",
      icon: degreeMetadata["foundation-year"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "open-university",
      name: "Open University",
      description: degreeMetadata["open-university"].description,
      category: "All Programmes",
      icon: degreeMetadata["open-university"].icon,
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "summer-courses",
      name: "Summer Courses",
      description: degreeMetadata["summer-courses"].description,
      category: "All Programmes",
      icon: degreeMetadata["summer-courses"].icon,
      campuses: ["Barcelona"],
    },
    {
      id: "leagues-of-code",
      name: "Leagues of Code",
      description: degreeMetadata["leagues-of-code"].description,
      category: "All Programmes",
      icon: degreeMetadata["leagues-of-code"].icon,
      campuses: ["Barcelona"],
    },
  ],
};
