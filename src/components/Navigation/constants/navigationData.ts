export interface SubItem {
  title: string;
  href: string;
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
      },
      {
        title: "Bachelors",
        href: "/studies/bachelors",
      },
      {
        title: "Masters",
        href: "/studies/masters",
      },
      {
        title: "Open University",
        href: "/studies/open-university",
      },
      {
        title: "Summer School",
        href: "/studies/summer-school",
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
      },
      {
        title: "Scholarships",
        href: "/admissions/scholarships",
      },
      {
        title: "Work & Study Opportunities",
        href: "/admissions/work-study",
      },
      {
        title: "Contact Admissions",
        href: "/admissions/contact",
      },
      {
        title: "Book a Visit",
        href: "/admissions/visit",
      },
      {
        title: "Apply now",
        href: "/admissions/apply",
      },
    ],
  },
  {
    id: "school",
    title: "The School",
    items: [
      {
        title: "About Harbour.Space",
        href: "/about",
      },
      {
        title: "Faculty",
        href: "/faculty",
      },
      {
        title: "Barcelona Campus",
        href: "/campus/barcelona",
      },
      {
        title: "Bangkok Campus",
        href: "/campus/bangkok",
      },
      {
        title: "Alumni",
        href: "/alumni",
      },
      {
        title: "Sobre Nosotros",
        href: "/es/about",
      },
      {
        title: "Sobre Nosaltres",
        href: "/cat/about",
      },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    items: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Podcast",
        href: "/podcast",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Leagues of Code",
        href: "/leagues-of-code",
      },
      {
        title: "Events",
        href: "/events",
      },
    ],
  },
];
