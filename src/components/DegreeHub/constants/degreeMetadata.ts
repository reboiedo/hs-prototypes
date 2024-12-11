export interface DegreeMetadata {
  description: string;
  icon: string | null;
}

// Shared metadata for degrees that appear in multiple levels
export const degreeMetadata: Record<string, DegreeMetadata> = {
  "computer-science": {
    description: "Build the foundations of your tech career.",
    icon: "badge-id",
  },
  "front-end-development": {
    description:
      "Where programming and creativity collide to build intricate, inventive and interesting web interfaces.",
    icon: "badge-id",
  },
  "data-science": {
    description: "Transform raw data into meaningful insights.",
    icon: "badge-id",
  },
  "cyber-security": {
    description:
      "The ultimate university programme on the protection of digital assets and privacy.",
    icon: "badge-id",
  },
  "digital-marketing": {
    description:
      "A programme that delves into the marketing strategies that make great digital dreams come true.",
    icon: "badge-id",
  },
  "high-tech-entrepreneurship": {
    description: "Build and scale technology ventures.",
    icon: "badge-id",
  },
  "interaction-design": {
    description: "Shape the future of digital experiences.",
    icon: "badge-id",
  },
  "applied-computer-and-data-science": {
    description: "Most things in the world work with computers. Will you?",
    icon: "badge-id",
  },
  "artificial-intelligence": {
    description: "Create the future of AI and machine learning.",
    icon: "badge-id",
  },
  "digital-transformation": {
    description: "Lead the digital revolution in business and society.",
    icon: "badge-id",
  },
  fintech: {
    description: "Innovate at the intersection of finance and technology.",
    icon: "badge-id",
  },
  "product-management": {
    description: "Guide products from concept to market success.",
    icon: "badge-id",
  },
  "international-business": {
    description: "Lead businesses in a global marketplace.",
    icon: "badge-id",
  },
  "foundation-year": {
    description: "Build your path to higher education success.",
    icon: "badge-id",
  },
  "open-university": {
    description: "Learn at your own pace with flexible online programs.",
    icon: "badge-id",
  },
  "summer-courses": {
    description: "Intensive learning experiences in tech and innovation.",
    icon: "badge-id",
  },
  "leagues-of-code": {
    description: "Join the next generation of coding champions.",
    icon: "badge-id",
  },
};
