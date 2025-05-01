export interface ProgrammeDetail {
  icon?: string;
  title: string;
  value: string;
}

export interface ProgrammeCategory {
  title: string;
  details: ProgrammeDetail[];
}

export const programmeDetails: ProgrammeCategory[] = [
  {
    title: "Full-time Master",
    details: [
      { title: "Degree", value: "Master of Arts" },
      { title: "Location", value: "Barcelona" },
      { title: "Time Commitment", value: "Full-time" },
      { title: "Language", value: "English" },
      { title: "Duration", value: "12 months" },
      { title: "ECTS", value: "60 credits" },
      { title: "Spanish & Thai Tuition", value: "€19,900" },
      { title: "International Tuition", value: "€23,900" },
    ],
  },
  {
    title: "Work-study Master",
    details: [
      { title: "Degree", value: "Master of Arts" },
      { title: "Location", value: "Barcelona" },
      { title: "Time Commitment", value: "Part-time" },
      { title: "Language", value: "English" },
      { title: "Duration", value: "18 months" },
      { title: "ECTS", value: "90 credits" },
      { title: "Spanish & Thai Tuition", value: "€24,900" },
      { title: "International Tuition", value: "€29,900" },
    ],
  },
];
