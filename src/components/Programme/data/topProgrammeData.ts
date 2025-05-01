export interface TopDataItem {
  label: string;
  value: string;
}

export interface ProgrammeTopData {
  [key: string]: TopDataItem[];
}

export const topProgrammeData: ProgrammeTopData = {
  "interaction-design": [
    { label: "Start Date", value: "Every 3 Weeks" },
    { label: "Application Period", value: "Year Round" },
    { label: "Language", value: "English" },
    { label: "Format", value: "Full-time" },
    { label: "Duration", value: "1 Year" },
    { label: "ECTS", value: "90 ECTS" },
    { label: "Home Tuition", value: "€22.900" },
    { label: "International Tuition", value: "€11.450" },
  ],
  "data-science": [
    { label: "Start Date", value: "Every 3 Weeks" },
    { label: "Application Period", value: "Year Round" },
    { label: "Language", value: "English" },
    { label: "Format", value: "Full-time" },
    { label: "Duration", value: "1 Year" },
    { label: "ECTS", value: "90 ECTS" },
    { label: "Home Tuition", value: "€25.900" },
    { label: "International Tuition", value: "€13.450" },
  ],
  // You can add more programmes here
};
