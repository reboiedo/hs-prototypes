export type Category = "studies" | "admissions" | "school" | "resources"; // Changed 'institute' to 'school' to match navigationData

export interface NavItem {
  category: string;
  [key: string]: any;
}

export interface DropdownState {
  isActive: boolean;
  currentRect: DOMRect | null;
  animationFrame: number | null;
}
