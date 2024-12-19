export interface SubItem {
  title: string;
  href: string;
  category: string;
}

export interface Category {
  id: string;
  title: string;
  items: SubItem[];
}

export const navigationData: Category[] = [
  {
    id: "studies",
    title: "Studies",
    items: [
      {
        title: "Foundation Year",
        href: "/studies/foundation-year",
        category: "Modes of Study",
      },
      {
        title: "Bachelors",
        href: "/studies/bachelors",
        category: "Modes of Study",
      },
      {
        title: "Masters",
        href: "/studies/masters",
        category: "Modes of Study",
      },
      {
        title: "Open University",
        href: "/studies/open-university",
        category: "Modes of Study",
      },
      {
        title: "Summer School",
        href: "/studies/summer-school",
        category: "Modes of Study",
      },
      {
        title: "Barcelona Campus",
        href: "#",
        category: "List of Courses 2024-2025",
      },
      {
        title: "Bangkok Campus",
        href: "#",
        category: "List of Courses 2024-2025",
      },
    ],
  },
  {
    id: "admissions",
    title: "Admissions",
    items: [
      {
        title: "How to Apply",
        href: "/admissions/how-to-apply",
        category: "Information",
      },
      {
        title: "Scholarships",
        href: "/admissions/scholarships",
        category: "Information",
      },
      {
        title: "Work & Study Opportunities",
        href: "/admissions/work-study",
        category: "Information",
      },
      {
        title: "Contact Admissions",
        href: "/admissions/contact",
        category: "Take the Next Step",
      },
      {
        title: "Book a Visit",
        href: "/admissions/book-a-visit",
        category: "Take the Next Step",
      },
      {
        title: "Apply now",
        href: "/admissions/apply",
        category: "Take the Next Step",
      },
    ],
  },
  {
    id: "school",
    title: "The Institute",
    items: [
      {
        title: "About Harbour.Space",
        href: "/about",
        category: "About",
      },
      {
        title: "Faculty",
        href: "/faculty",
        category: "About",
      },
      {
        title: "Barcelona Campus",
        href: "#",
        category: "About",
      },
      {
        title: "Bangkok Campus",
        href: "#",
        category: "About",
      },
      {
        title: "Alumni",
        href: "#",
        category: "About",
      },
      {
        title: "Sobre Nosotros",
        href: "#",
        category: "Download Brochure",
      },
      {
        title: "Sobre Nosaltres",
        href: "#",
        category: "Download Brochure",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "#",
        category: "Explore",
      },
      {
        title: "Podcast",
        href: "#",
        category: "Explore",
      },
      {
        title: "Events",
        href: "#",
        category: "Explore",
      },
      {
        title: "News",
        href: "#",
        category: "Explore",
      },
      {
        title: "FAQ",
        href: "#",
        category: "Learn More",
      },
      {
        title: "Contact",
        href: "#",
        category: "Learn More",
      },
    ],
  },
];
