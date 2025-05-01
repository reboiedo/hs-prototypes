export interface Course {
  title: string;
  credits: number;
  description: string;
}

export interface CurriculumSection {
  title: string;
  subheader: string;
  intro: string;
  courses: Course[];
}

export const curriculumData: CurriculumSection[] = [
  {
    title: "INTRO",
    subheader: "Students must take this course",
    intro:
      "<strong>This course is mandatory for all students.</strong> Core courses are grouped into modules which are key to developing a student's critical competency for nearly any type of design practice they wish to pursue.",
    courses: [
      {
        title: "Design Fundamentals",
        credits: 4,
        description:
          "This foundational course establishes core design principles and methodologies essential for master's level study. Students will develop a strong foundation in design thinking, creative problem-solving, and contemporary design practices while being introduced to Harbour.Space's unique approach to design education and innovation.",
      },
    ],
  },
  {
    title: "CORE",
    subheader: "Students must take all courses",
    intro:
      "<strong>All Core courses are mandatory.</strong> Core courses are grouped into modules which are key to developing a student's critical competency for nearly any type of design practice they wish to pursue. The modules include courses to deeply understand complex challenges, to creatively explore options, and to develop impactful and resilient solutions.",
    courses: [
      {
        title: "User-Centered Design",
        credits: 6,
        description:
          "This comprehensive course explores the principles and practices of user-centered design, emphasizing the importance of understanding user needs, behaviors, and motivations. Students will learn to conduct user research, create user personas, and develop design solutions that address real human needs while considering business and technical constraints.",
      },
      {
        title: "Design Research Methods",
        credits: 4,
        description:
          "Students will master both qualitative and quantitative research methodologies essential for informed design decisions. The course covers ethnographic research, usability testing, survey design, and data analysis, providing students with the tools to conduct meaningful research that drives innovation in their design practice.",
      },
      {
        title: "Visual Design Systems",
        credits: 5,
        description:
          "This course focuses on creating scalable and maintainable design systems for complex digital products. Students will learn to develop comprehensive style guides, component libraries, and design tokens while understanding the principles of visual hierarchy, typography, and color theory in the context of systematic design.",
      },
      {
        title: "Interaction Design Patterns",
        credits: 4,
        description:
          "Through analysis and application of established and emerging interaction patterns, students will develop a deep understanding of human-computer interaction principles. The course examines how to create intuitive, efficient, and delightful user experiences while maintaining consistency across different platforms and contexts.",
      },
      {
        title: "Prototyping & Testing",
        credits: 5,
        description:
          "Students will explore various prototyping methodologies, from low-fidelity sketches to high-fidelity interactive prototypes. The course emphasizes iterative design processes, teaching students how to quickly validate ideas through user testing and incorporate feedback into subsequent design iterations.",
      },
      {
        title: "Design Ethics & Strategy",
        credits: 4,
        description:
          "This course examines the ethical implications of design decisions and their impact on society. Students will learn to navigate complex ethical challenges while developing strategic approaches to problem-solving that consider social responsibility, sustainability, and the long-term consequences of design choices.",
      },
    ],
  },
  {
    title: "SPECIALIZATION",
    subheader: "Students must take at least 6 of these courses",
    intro:
      "<strong>Students must complete at least 5 Specialization courses.</strong> Concentration course modules are focused on hard skills and oriented towards specific design practice roles like Design Research, Product-Service Delivery, Innovation Strategy, and Product Management.",
    courses: [
      {
        title: "Advanced UX Research",
        credits: 5,
        description:
          "This advanced course delves deep into sophisticated user research methodologies and analytical frameworks. Students will learn to design and conduct complex research studies, synthesize findings from multiple data sources, and translate research insights into actionable design recommendations that drive product strategy and innovation.",
      },
      {
        title: "Service Design",
        credits: 4,
        description:
          "Students will explore the comprehensive discipline of service design, learning to create and optimize service experiences across multiple touchpoints and channels. The course covers journey mapping, service blueprinting, and stakeholder management while emphasizing the importance of designing for both front-stage and back-stage service components.",
      },
      {
        title: "Design Leadership",
        credits: 4,
        description:
          "This comprehensive course prepares students for leadership roles in design organizations. Students will develop skills in team management, design operations, and strategic decision-making while learning to facilitate creative processes, manage stakeholder relationships, and build high-performing design teams that can deliver innovative solutions at scale.",
      },
      {
        title: "Digital Product Strategy",
        credits: 5,
        description:
          "Students will learn to develop and execute product strategies that align business goals with user needs. The course covers product vision, roadmap development, and metrics-driven decision making, teaching students how to identify opportunities, prioritize features, and guide products from conception to market success.",
      },
      {
        title: "Design Systems at Scale",
        credits: 4,
        description:
          "This advanced course focuses on creating and maintaining design systems for large organizations. Students will learn strategies for scaling design practices, managing system governance, and facilitating adoption across teams while ensuring consistency and efficiency in product development processes.",
      },
      {
        title: "Advanced Prototyping",
        credits: 5,
        description:
          "Students will master advanced prototyping techniques using cutting-edge tools and technologies. The course covers both digital and physical prototyping methods, teaching students to create high-fidelity prototypes that effectively communicate complex interactions and facilitate meaningful user testing.",
      },
      {
        title: "UX Writing & Content Strategy",
        credits: 4,
        description:
          "This course explores the crucial role of content in user experience design. Students will learn to develop comprehensive content strategies, craft effective UX copy, and create content systems that scale. The course emphasizes voice and tone, content governance, and the integration of content strategy with overall product design.",
      },
      {
        title: "Design for Emerging Technologies",
        credits: 5,
        description:
          "Students will explore design challenges and opportunities presented by emerging technologies such as AR, VR, AI, and IoT. The course emphasizes understanding technical capabilities and constraints while developing new interaction paradigms and experience patterns for novel technological contexts.",
      },
      {
        title: "Design Psychology",
        credits: 4,
        description:
          "This course examines the psychological principles that underpin effective design. Students will explore cognitive psychology, behavioral economics, and emotion design, learning to create experiences that align with human perception, decision-making processes, and emotional needs while driving desired user behaviors.",
      },
      {
        title: "Information Architecture",
        credits: 5,
        description:
          "Students will learn to organize and structure complex information systems for optimal user understanding and navigation. The course covers taxonomy development, navigation design, and information modeling while teaching students to create scalable architectures that support both user needs and business goals.",
      },
      {
        title: "Design for Accessibility",
        credits: 4,
        description:
          "This comprehensive course teaches students to create inclusive digital experiences that work for users of all abilities. Students will learn about various disabilities, assistive technologies, and accessibility guidelines while developing practical skills in implementing and testing accessible design solutions.",
      },
      {
        title: "Design Research Analysis",
        credits: 5,
        description:
          "Students will master advanced techniques for analyzing and synthesizing research data from multiple sources. The course covers qualitative and quantitative analysis methods, pattern recognition, and insight development while teaching students to translate complex research findings into actionable design recommendations.",
      },
      {
        title: "Strategic Innovation",
        credits: 4,
        description:
          "This course focuses on using design thinking to drive organizational innovation. Students will learn methods for identifying opportunities, facilitating innovation workshops, and implementing design-driven change while developing skills in strategic foresight and future scenario planning.",
      },
      {
        title: "Cross-Platform Design",
        credits: 5,
        description:
          "Students will learn to create cohesive user experiences across multiple platforms and devices. The course covers responsive design, platform-specific patterns, and content adaptation strategies while teaching students to balance consistency with platform-appropriate interactions.",
      },
      {
        title: "Design Operations",
        credits: 4,
        description:
          "This course explores the operational aspects of managing design at scale. Students will learn to optimize design processes, implement design tools and systems, and measure design effectiveness while developing skills in resource allocation and team coordination.",
      },
    ],
  },
  {
    title: "EXPLORATION",
    subheader: "Students can choose any of these courses",
    intro:
      "<strong>These courses are optional and can be taken with remaining free credits.</strong> Transversal course modules are for students to explore other areas of study that Harbour.Space university offers. If a student collects 20 ECTS in a single area they will earn a Minor Degree.",
    courses: [
      {
        title: "Emerging Technologies",
        credits: 3,
        description:
          "Overview of cutting-edge technologies and their impact on design.",
      },
      {
        title: "AI for Designers",
        credits: 3,
        description:
          "This course bridges the gap between artificial intelligence and design practice, exploring how AI technologies can enhance and transform the design process. Students will learn about machine learning principles, AI-powered design tools, and the implications of artificial intelligence for the future of design while developing practical skills in implementing AI solutions in their work.",
      },
      {
        title: "Digital Marketing Fundamentals",
        credits: 3,
        description:
          "This course introduces students to key digital marketing concepts and their relationship to design. Students will explore user acquisition strategies, marketing analytics, and conversion optimization while learning how design decisions impact marketing effectiveness and user engagement across digital channels.",
      },
      {
        title: "Front-end Development Basics",
        credits: 4,
        description:
          "Students will develop a practical understanding of web technologies and their impact on design implementation. The course covers HTML, CSS, and basic JavaScript while teaching students to better collaborate with developers and understand technical constraints in digital product design.",
      },
      {
        title: "Data Visualization",
        credits: 3,
        description:
          "This course teaches students to effectively communicate complex data through visual design. Students will learn principles of data visualization, chart selection, and interactive visualization techniques while developing skills in creating clear, compelling, and accurate data representations.",
      },
      {
        title: "Blockchain Applications",
        credits: 4,
        description:
          "Students will explore the implications of blockchain technology for design and user experience. The course covers blockchain fundamentals, decentralized applications, and Web3 interfaces while teaching students to design solutions that address the unique challenges of blockchain-based systems.",
      },
      {
        title: "Creative Coding",
        credits: 3,
        description:
          "This hands-on course introduces students to programming as a creative medium. Students will learn to use code for generative design, interactive installations, and creative experiments while developing a deeper understanding of computational thinking and algorithmic design.",
      },
      {
        title: "Digital Photography",
        credits: 3,
        description:
          "Students will master the principles and practices of digital photography for design applications. The course covers composition, lighting, and post-processing techniques while teaching students to create and edit professional-quality images for various design contexts.",
      },
      {
        title: "Motion Design",
        credits: 4,
        description:
          "This course explores the intersection of animation and user interface design. Students will learn principles of motion design, animation techniques, and timing while developing skills in creating meaningful transitions and micro-interactions that enhance user experience.",
      },
      {
        title: "Sound Design",
        credits: 3,
        description:
          "Students will learn to incorporate sound and audio elements into digital experiences. The course covers acoustic principles, audio editing, and sonic branding while teaching students to create cohesive multi-sensory experiences that enhance user engagement.",
      },
      {
        title: "Future Technologies",
        credits: 4,
        description:
          "This forward-looking course examines emerging technologies and their potential impact on design practice. Students will explore quantum computing, brain-computer interfaces, and other advancing technologies while developing skills in future scenario planning and speculative design.",
      },
      {
        title: "Entrepreneurship",
        credits: 3,
        description:
          "Students will learn to apply design thinking to business creation and development. The course covers startup methodologies, business planning, and pitch development while teaching students how to identify opportunities and transform design solutions into viable business ventures.",
      },
    ],
  },
];
