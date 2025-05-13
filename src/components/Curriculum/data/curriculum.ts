export interface Course {
  title: string;
  credits: number;
  description: string;
}

export interface Subcategory {
  title: string;
  subheader: string;
  intro: string;
  courses: Course[];
}

export interface Category {
  title: string;
  subcategories: Subcategory[];
}

export const curriculumData: Category[] = [
  {
    title: "Core",
    subcategories: [
      {
        title: "Introduction",
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
        title: "Major Core",
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
              "This course explores established interaction design patterns and when to apply them effectively. Students will analyze successful digital products, understand the psychological principles behind common patterns, and learn to implement and adapt these patterns for different contexts and user needs.",
          },
          {
            title: "Prototyping for User Experience",
            credits: 5,
            description:
              "Students will develop skills in creating a range of prototypes from low-fidelity wireframes to high-fidelity interactive mockups. The course covers various prototyping tools and techniques, teaching students when to use different fidelity levels to effectively communicate and test design concepts.",
          },
          {
            title: "Design Ethics and Inclusive Design",
            credits: 4,
            description:
              "This course examines the ethical implications of design decisions and the importance of creating inclusive digital experiences. Students will explore topics such as accessibility, cultural sensitivity, data privacy, and the societal impact of design while developing frameworks for making ethical design decisions.",
          },
        ],
      },
      {
        title: "Capstone",
        subheader: "Final project",
        intro:
          "<strong>The Capstone project is the culmination of your master's degree.</strong> Working individually or in small teams, students will identify a complex design challenge and develop a comprehensive solution that demonstrates their mastery of design principles, research methods, and technical skills.",
        courses: [
          {
            title: "Capstone Project",
            credits: 10,
            description:
              "The capstone project represents the culmination of the master's program, where students apply all their acquired knowledge and skills to a comprehensive design challenge. Working with industry partners or on self-initiated projects, students will identify a significant problem, conduct in-depth research, develop innovative solutions, and create a professional presentation of their work.",
          },
          {
            title: "Professional Portfolio Development",
            credits: 2,
            description:
              "This course guides students through the process of curating and presenting their design work in a professional portfolio. Students will learn to articulate their design process, showcase project outcomes, and develop a personal brand that positions them effectively in the competitive job market.",
          },
          {
            title: "Design Leadership & Presentation",
            credits: 3,
            description:
              "This course focuses on developing the leadership and presentation skills necessary for design professionals. Students will learn effective communication strategies, stakeholder management techniques, and how to advocate for design decisions in complex organizational contexts.",
          },
          {
            title: "Industry Placement Project",
            credits: 6,
            description:
              "This applied capstone experience places students in real-world design environments where they'll work on actual industry challenges. Through this structured placement, students will apply their theoretical knowledge, develop professional networks, and gain valuable workplace experience under the guidance of industry mentors.",
          },
        ],
      },
    ],
  },
  {
    title: "Electives",
    subcategories: [
      {
        title: "Major Elective",
        subheader: "Students must select at least two courses",
        intro:
          "<strong>Major electives allow students to deepen their expertise</strong> in specific areas of interest within their field. These specialized courses build upon the foundation established in core courses, offering advanced knowledge and skills in particular domains of interaction design.",
        courses: [
          {
            title: "Advanced UX Research",
            credits: 4,
            description:
              "This advanced course builds upon fundamental research methods to explore complex user experience challenges. Students will learn specialized research techniques for difficult-to-access user groups, sensitive topics, and emerging technologies, developing expertise in research planning, execution, and analysis for nuanced design contexts.",
          },
          {
            title: "Service Design",
            credits: 4,
            description:
              "This course introduces students to the principles and methodologies of service design, focusing on creating cohesive experiences across multiple touchpoints and over time. Students will learn to map customer journeys, identify pain points, and design holistic service systems that meet both user needs and business objectives.",
          },
          {
            title: "Mobile App Design",
            credits: 3,
            description:
              "This course focuses on the unique considerations and best practices for designing mobile applications. Students will explore mobile-specific interaction patterns, constraints, and opportunities while developing skills in creating intuitive and engaging mobile experiences across different platforms and devices.",
          },
          {
            title: "Information Architecture",
            credits: 4,
            description:
              "This course explores the art and science of organizing and structuring digital information. Students will learn to create effective navigation systems, taxonomies, and content hierarchies that help users find information easily and intuitively in complex digital environments.",
          },
          {
            title: "UI Animation and Motion Design",
            credits: 3,
            description:
              "This course focuses on using animation and motion to enhance user interfaces and digital experiences. Students will learn principles of effective motion design, animation techniques, and how to create purposeful animations that improve usability, provide feedback, and delight users.",
          },
          {
            title: "Design Systems at Scale",
            credits: 4,
            description:
              "This advanced course explores how to create, implement, and maintain design systems for large organizations and complex product ecosystems. Students will learn strategies for design system governance, versioning, documentation, and adoption across distributed teams.",
          },
          {
            title: "Voice User Interface Design",
            credits: 3,
            description:
              "This course examines the principles and practices of designing voice-based interfaces and conversational experiences. Students will learn about natural language processing, conversation design patterns, and how to create effective voice interactions for various devices and contexts.",
          },
          {
            title: "Data Visualization",
            credits: 4,
            description:
              "This course explores the intersection of design and data, teaching students how to transform complex data sets into clear, compelling, and informative visualizations. Students will learn principles of visual encoding, chart selection, and interactive data exploration techniques.",
          },
          {
            title: "UX Writing and Content Design",
            credits: 3,
            description:
              "This course focuses on the role of words and content in the user experience. Students will learn to craft clear, concise, and useful text for interfaces, develop content strategies, and understand how content and design work together to create cohesive user experiences.",
          },
          {
            title: "AR/VR Experience Design",
            credits: 4,
            description:
              "This forward-looking course explores interaction design principles for augmented and virtual reality experiences. Students will learn about spatial design, embodied interaction, and the unique challenges and opportunities presented by immersive technologies.",
          },
          {
            title: "Game Design Principles",
            credits: 4,
            description:
              "This course examines how game design principles can be applied to create engaging user experiences. Students will explore concepts such as meaningful choices, feedback loops, progression systems, and intrinsic motivation while learning how to incorporate these elements into non-game applications.",
          },
          {
            title: "Human-Computer Interaction Theory",
            credits: 3,
            description:
              "This theoretical course explores foundational concepts and models in HCI research. Students will examine cognitive psychology, human factors, activity theory, and other frameworks that inform our understanding of how humans interact with technology.",
          },
          {
            title: "Design for International Markets",
            credits: 4,
            description:
              "This course prepares students to design for global audiences by exploring cultural differences in user behaviors, preferences, and expectations. Topics include localization, internationalization, and creating culturally appropriate and adaptable design solutions.",
          },
          {
            title: "Accessibility and Inclusive Design",
            credits: 3,
            description:
              "This specialized course focuses on designing digital products that can be used by people of all abilities. Students will learn about accessibility guidelines, assistive technologies, inclusive design methodologies, and how to test and validate designs for accessibility.",
          },
          {
            title: "Design for Behavior Change",
            credits: 3,
            description:
              "This course examines how design can influence human behavior and decision-making. Students will explore behavioral economics, persuasive design patterns, ethical considerations, and how to apply these concepts to create experiences that help users achieve their goals.",
          },
        ],
      },
      {
        title: "Collaborative & Crossdisciplinary",
        subheader: "Students must select at least one course",
        intro:
          "<strong>Collaborative courses connect students with peers from other disciplines</strong> to tackle complex challenges from multiple perspectives. These courses simulate real-world interdisciplinary teamwork and expose students to diverse approaches and methodologies.",
        courses: [
          {
            title: "Emerging Technologies",
            credits: 4,
            description:
              "This forward-looking course explores how emerging technologies like artificial intelligence, augmented reality, voice interfaces, and haptic feedback are reshaping interaction design. Students will experiment with cutting-edge tools and technologies while developing speculative design concepts that anticipate future human-technology relationships.",
          },
          {
            title: "Design for Sustainability",
            credits: 3,
            description:
              "This course examines how interaction design can address pressing environmental challenges and contribute to a more sustainable future. Students will explore frameworks for sustainable design practice, lifecycle assessment, circular economy principles, and behavior change strategies while developing projects with measurable environmental impacts.",
          },
          {
            title: "Design + Business Innovation",
            credits: 4,
            description:
              "This collaborative course brings together design and business students to explore the intersection of design thinking and business strategy. Working in interdisciplinary teams, students will tackle real-world innovation challenges, learning how design approaches can drive business value and how business constraints can inform design decisions.",
          },
          {
            title: "Design + Engineering Collaboration",
            credits: 4,
            description:
              "This cross-disciplinary course pairs design students with engineering students to work on complex product development challenges. Teams will navigate the entire product development process, from ideation to prototyping, learning to bridge the gap between design vision and technical feasibility.",
          },
        ],
      },
      {
        title: "Free Electives",
        subheader: "Students may select any course",
        intro:
          "<strong>Free electives offer students the opportunity to explore topics beyond their core discipline</strong>, fostering breadth of knowledge and unexpected connections. These courses may be selected from any program at Harbour.Space, allowing students to create a truly personalized educational experience.",
        courses: [
          {
            title: "Introduction to Front-End Development",
            credits: 4,
            description:
              "This course provides designers with practical coding skills essential for effective collaboration with development teams. Students will learn HTML, CSS, and basic JavaScript, enabling them to create interactive prototypes, understand technical constraints, and communicate more effectively with developers.",
          },
          {
            title: "Design Entrepreneurship",
            credits: 3,
            description:
              "This course prepares students to apply design thinking to entrepreneurial ventures, whether launching their own businesses or driving innovation within established organizations. Topics include identifying opportunities, validating ideas, pitching concepts, and understanding the business aspects of design-led startups.",
          },
          {
            title: "Creative Coding",
            credits: 3,
            description:
              "This course explores programming as a creative medium, teaching students how to use code to create interactive art, generative design, and creative expressions. Students will learn programming concepts through visual applications, developing skills that bridge technical understanding and artistic expression.",
          },
          {
            title: "Business of Design",
            credits: 3,
            description:
              "This course examines the business aspects of professional design practice. Topics include project management, client relationships, pricing and proposals, intellectual property, and the various business models for design professionals from freelancing to leading design firms.",
          },
          {
            title: "Psychology of User Experience",
            credits: 4,
            description:
              "This course delves into the psychological principles that underpin effective user experiences. Students will explore perception, attention, memory, decision-making, and emotional design, learning to apply cognitive and behavioral psychology concepts to create more intuitive and engaging digital products.",
          },
          {
            title: "Design History and Theory",
            credits: 3,
            description:
              "This humanities-focused course examines the evolution of design across different eras and cultures. Students will analyze historical design movements, theoretical frameworks, and how societal forces shape design practice, developing a critical perspective that informs their contemporary work.",
          },
          {
            title: "Advanced Typography",
            credits: 3,
            description:
              "This specialized course explores typography as a fundamental element of digital design. Students will develop advanced skills in typeface selection, pairing, hierarchy, and responsive typography, learning how to use type effectively to enhance readability, usability, and brand expression.",
          },
          {
            title: "Product Management for Designers",
            credits: 4,
            description:
              "This course introduces designers to product management concepts and methods. Students will learn about product strategy, roadmapping, feature prioritization, and metrics, developing skills that allow them to better collaborate with product teams and understand how design decisions impact product success.",
          },
          {
            title: "Design for Social Innovation",
            credits: 4,
            description:
              "This course explores how design methodologies can be applied to address complex social challenges. Students will work with community partners on projects related to healthcare, education, civic engagement, or other social impact areas, learning how design can contribute to positive societal change.",
          },
          {
            title: "Physical Computing for Designers",
            credits: 3,
            description:
              "This hands-on course introduces designers to the world of physical computing and the Internet of Things. Students will learn basic electronics and programming for interactive physical objects, bridging the gap between digital interfaces and tangible experiences.",
          },
        ],
      },
    ],
  },
];
