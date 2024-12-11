import type { Campus } from "../types";
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
  Bachelor: Degree[];
  ContinuedStudies: Degree[];
}

export const degreeData: DegreeCollection = {
  Master: [
    {
      id: "applied-computer-and-data-science-master",
      name: "Applied Computer and Data Science",
      description: "Most things in the world work with computers. Will you?",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "artificial-intelligence-master",
      name: "Artificial Intelligence",
      description: "Create the future of AI and machine learning.",
      category: "Technology",
      icon: "badge-id",
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
      description:
        "The ultimate university programme on the protection of digital assets and privacy.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "data-science-master",
      name: "Data Science",
      description:
        "Get ready for the Petabyte and learn what we can do with it.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "front-end-development-master",
      name: "Front-End Development",
      description:
        "Where programming and creativity collide to build intricate, inventive and interesting web interfaces.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-marketing-master",
      name: "Digital Marketing",
      description:
        "A programme that delves into the marketing strategies that make great digital dreams come true.",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-transformation-master",
      name: "Digital Transformation",
      description: "Most things in the world work with computers. Will you?",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "fintech-master",
      name: "Fintech",
      description: "Most things in the world work with computers. Will you?",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "high-tech-entrepreneurship-master",
      name: "High-Tech Entrepreneurship",
      description: "Most things in the world work with computers. Will you?",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "interaction-design-master",
      name: "Interaction Design",
      description: "Most things in the world work with computers. Will you?",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "product-management-master",
      name: "Product Management",
      description: "Most things in the world work with computers. Will you?",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
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
      description: "Create engaging user experiences for the modern web.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "data-science-bachelor",
      name: "Data Science",
      description: "Transform raw data into meaningful insights.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "cyber-security-bachelor",
      name: "Cyber Security",
      description: "Protect digital assets in an interconnected world.",
      category: "Technology",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "international-business-bachelor",
      name: "International Business",
      description: "Lead businesses in a global marketplace.",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "high-tech-entrepreneurship-bachelor",
      name: "High-Tech Entrepreneurship",
      description: "Build and scale technology ventures.",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "interaction-design-bachelor",
      name: "Interaction Design",
      description: "Shape the future of digital experiences.",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "digital-marketing-bachelor",
      name: "Digital Marketing",
      description: "Master the art of digital customer engagement.",
      category: "Creative",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
  ],
  ContinuedStudies: [
    {
      id: "foundation-year",
      name: "Foundation Year",
      description: "Build your path to higher education success.",
      category: "All Programmes",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "open-university",
      name: "Open University",
      description: "Learn at your own pace with flexible online programs.",
      category: "All Programmes",
      icon: "badge-id",
      campuses: ["Barcelona", "Bangkok"],
    },
    {
      id: "summer-courses",
      name: "Summer Courses",
      description: "Intensive learning experiences in tech and innovation.",
      category: "All Programmes",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
    {
      id: "leagues-of-code",
      name: "Leagues of Code",
      description: "Join the next generation of coding champions.",
      category: "All Programmes",
      icon: "badge-id",
      campuses: ["Barcelona"],
    },
  ],
};
