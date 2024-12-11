export interface DegreeMetadata {
  description: string;
  icon: string | null;
}

// Shared metadata for degrees that appear in multiple levels
export const degreeMetadata: Record<string, DegreeMetadata> = {
  "computer-science": {
    description:
      "Explore algorithms, AI, and software engineering to create groundbreaking solutions and drive digital innovation",
    icon: "badge-id",
  },
  "front-end-development": {
    description:
      "Where programming and creativity collide to build intricate, inventive and interesting web interfaces",
    icon: "badge-id",
  },
  "data-science": {
    description:
      "Turn raw data into actionable insights with statistics, machine learning, and scalable solutions for real-world impact",
    icon: "badge-id",
  },
  "cyber-security": {
    description:
      "Explore algorithms, AI, and software engineering to create groundbreaking solutions and drive digital innovation",
    icon: "badge-id",
  },
  "digital-marketing": {
    description:
      "Blend creativity and strategy to engage online audiences, leveraging analytics, social media, and compelling content",
    icon: "badge-id",
  },
  "high-tech-entrepreneurship": {
    description:
      "Combine innovation and business acumen to launch tech ventures, disrupt markets, and scale impactful solutions globally",
    icon: "badge-id",
  },
  "interaction-design": {
    description:
      "Shape how people connect with technology, blending user research, prototyping, and design for intuitive experiences",
    icon: "badge-id",
  },
  "applied-computer-and-data-science": {
    description:
      "Merge data science and computing to tackle complex, data-driven challenges with rigorous analytical and coding skills",
    icon: "badge-id",
  },
  "artificial-intelligence": {
    description: "Create the future of AI and machine learning.",
    icon: "badge-id",
  },
  "digital-transformation": {
    description:
      "Guide organizations through technology-driven change, blending business insight, innovation, and agility for sustainable growth",
    icon: "badge-id",
  },
  fintech: {
    description: "Innovate at the intersection of finance and technology.",
    icon: "badge-id",
  },
  "product-management": {
    description:
      "Identify opportunities, define product visions, and guide teams to deliver market-leading solutions efficiently",
    icon: "badge-id",
  },
  "international-business": {
    description:
      "Navigate global markets, manage cross-border strategies, and lead culturally diverse teams for worldwide business success.",
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
