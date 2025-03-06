
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineComputer, MdOutlinePayment, MdOutlinePhoneAndroid } from "react-icons/md";
import { CgSearchLoading } from "react-icons/cg";
import { BiSolidBookContent } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

import {
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiHeroku,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiSqlite,
  SiVercel,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa6";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Work", href: "/work" },
  { title: "Experience", href: "/experience" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
];

export const statsData = [
  { title: "Projects Completed", value: 15 },
  { title: "Happy Clients", value: 8 },
  { title: "Tech Stacks Used", value: 6 },
  { title: "Blog Posts Written", value: 10 },
  { title: "Cups of Coffee", value: 300 },
  { title: "Lines of Code", value: 15000 },
];

export const servicesData = [
  {
    number: "01",
    title: "Web Dev",
    description:
      "Custom, responsive websites designed to fit your business needs, ensuring a seamless online presence.",
    icon: MdOutlineComputer,
  },
  {
    number: "02",
    title: "App Dev",
    description:
      "High-performance mobile apps for Android and iOS, built to enhance your business in the mobile space.",
    icon: MdOutlinePhoneAndroid,
  },
  {
    number: "03",
    title: "UI&UX Design",
    description:
      "Intuitive interfaces that improve user engagement and align with your business goals.",
    icon: FaPaintBrush,
  },
  {
    number: "04",
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce services, from store setup to payment integration, ensuring security and scalability.",
    icon: MdOutlinePayment,
  },
  {
    number: "05",
    title: "SEO Optimization",
    description:
      "Boost visibility and search rankings with proven SEO strategies, driving more organic traffic.",
    icon: CgSearchLoading,
  },
  {
    number: "06",
    title: "Content Management Systems",
    description:
      "User-friendly CMS solutions that make managing your website content seamless and efficient.",
    icon: BiSolidBookContent,
  },
  {
    number: "07",
    title: "Custom Web Solutions",
    description:
      "Tailored web solutions to address complex business needs, including API integrations and custom databases.",
    icon: AiOutlineApi,
  },
  {
    number: "08",
    title: "Website Maintenance & Support",
    description:
      "Ongoing support to keep your website optimized, with regular updates, security patches, and troubleshooting.",
    icon: BsDatabaseFillGear,
  },
];

export const toolsData = {
  // Frontend Tools
  frontendTools: [
    {
      name: "HTML5",
      icon: FaHtml5,
      description:
        "Markup language used for structuring and presenting content on the web.",
      skillLevel: "Intermediate",
    },
    {
      name: "CSS3",
      icon: FaCss3,
      description:
        "Style sheet language used for describing the presentation of a document written in HTML.",
      skillLevel: "Intermediate",
    },
    {
      name: "JavaScript (ES6+)",
      icon: FaJs,
      description:
        "Programming language for web development, allowing dynamic content and interactive features.",
      skillLevel: "Intermediate",
    },
    {
      name: "React.js",
      icon: FaReact,
      description:
        "JavaScript library for building user interfaces, particularly single-page applications.",
      skillLevel: "Intermediate",
    },
    {
      name: "Next.js",
      icon: FaNodeJs,
      description:
        "React framework for server-side rendering, static site generation, and more.",
      skillLevel: "Beginner",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description:
        "Utility-first CSS framework for rapidly building custom designs.",
      skillLevel: "Beginner",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      description:
        "Popular framework for building responsive, mobile-first websites with predefined components.",
      skillLevel: "Intermediate",
    },
  ],

  // Backend Tools
  backendTools: [
    {
      name: "Node.js",
      icon: SiNextdotjs,
      description:
        "JavaScript runtime for building scalable network applications.",
      skillLevel: "Intermediate",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      description:
        "Minimalist web framework for Node.js, used for building web applications and APIs.",
      skillLevel: "Beginner",
    },
    {
      name: "Python",
      icon: FaPython,
      description:
        "High-level programming language used for web and app development, data analysis, and more.",
      skillLevel: "Intermediate",
    },
    {
      name: "Django",
      icon: SiDjango,
      description:
        "High-level Python web framework for rapid development and clean, pragmatic design.",
      skillLevel: "Intermediate",
    },
    {
      name: "Flask",
      icon: SiFlask,
      description:
        "Micro web framework for Python, ideal for building small applications and APIs.",
      skillLevel: "Intermediate",
    },
    {
      name: "RESTful APIs",
      icon: TbApi,
      description:
        "Architectural style for designing networked applications using HTTP requests to perform CRUD operations.",
      skillLevel: "Advanced",
    },
  ],

  // Databases
  databaseTools: [
    {
      name: "MySQL",
      icon: SiMysql,
      description:
        "Relational database management system known for its speed, reliability, and ease of use.",
      skillLevel: "Advanced",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description:
        "NoSQL database that stores data in a flexible, JSON-like format.",
      skillLevel: "Intermediate",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description:
        "Open-source, object-relational database system known for reliability and feature-richness.",
      skillLevel: "Intermediate",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      description:
        "NoSQL cloud database from Google, offering real-time syncing and cloud functions.",
      skillLevel: "Intermediate",
    },
    {
      name: "SQLite",
      icon: SiSqlite,
      description:
        "Self-contained, serverless, and zero-configuration SQL database engine.",
      skillLevel: "Intermediate",
    },
  ],

  // Dev Tools
  devTools: [
    {
      name: "Git & GitHub",
      icon: FaGithub,
      description:
        "Version control system to track changes and collaborate on code.",
      skillLevel: "Intermediate",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      description:
        "A powerful code editor with support for debugging, Git integration, and extensions.",
      skillLevel: "Intermediate",
    },
    {
      name: "Postman",
      icon: SiPostman,
      description:
        "Tool for testing APIs, sending requests, and checking responses.",
      skillLevel: "Beginner",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      description:
        "NoSQL database that stores data in a flexible, JSON-like format.",
      skillLevel: "Beginner",
    },
    {
      name: "Heroku",
      icon: SiHeroku,
      description:
        "Platform-as-a-Service (PaaS) for deploying and managing applications in the cloud.",
      skillLevel: "Beginner",
    },
    {
      name: "Figma",
      icon: SiFigma,
      description:
        "Web-based UI/UX design tool for collaboration and prototyping.",
      skillLevel: "Beginner",
    },
  ],
};


export const featuredRepos = [
  {
    name: "CodeTribe",
    blogUrl: "https://yourblog.com/codetribe",
    imageUrl: "/codetribe.webp",
  },
  {
    name: "dash",
    blogUrl: "https://yourblog.com/dash",
    imageUrl: "/landing.png",
  },

  {
    name: "ContactMaster",
    blogUrl: "https://yourblog.com/contactmaster",
    imageUrl: "/personalization.png",
  },
];

export const listedRepos = ["alx-low_level_programming", "alx-pre_course", "alx-system_engineering-devops", "github-slideshow"];

export const reviewData = [
  {
    avatar: "../../public/avatar.png",
    text: "Karabelo is one of the best professionals that we have known in web development skills. He consistently demonstrates an ability to deliver quality results on time, while also offering innovative ideas for future projects. Highly recommend him!",
    name: "Jonathan Castro",
    position: "CEO",
    company: "The Cliff",
    companyUrl: "https://the-cliff.com/",
  },
  {
    avatar: "../../public/avatar.png",
    text: "Since 2018, Karabelo has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely, he’s been highly responsive, organized, and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he’s provided us with great advice to stay on top of the current changes in web technologies. He’s also implemented effective project management and Q&A processes. As a result, Karabelo has been a highly valued and impactful member of our team.",
    name: "Sophia Williams",
    position: "Lead Product Manager",
    company: "WebX Solutions",
    companyUrl: "https://webxsolutions.com/",
  },
  {
    avatar: "../../public/avatar.png",
    text: "Working with Karabelo was an absolute pleasure. His approach to problem-solving and attention to detail really helped us streamline our product development process. He brings both technical expertise and an approachable attitude to every task, making him a fantastic asset to any team.",
    name: "Emily Thompson",
    position: "CTO",
    company: "TechWorld",
    companyUrl: "https://techworld.com/",
  },
  {
    avatar: "../../public/avatar.png",
    text: "Karabelo's dedication to quality and ability to adapt quickly to any project requirements made him an indispensable part of our development team. He consistently exceeded our expectations, particularly with his ability to deliver innovative solutions and troubleshoot effectively under pressure.",
    name: "Michael Davis",
    position: "VP of Engineering",
    company: "NextGen Technologies",
    companyUrl: "https://nextgentech.com/",
  },
];

export const goalsAndAchievements = [
  {
    title: "Achievements",
    items: [
      "✅ Built and deployed scalable applications solving real-world challenges.",
      "✅ Gained full-stack expertise in frontend, backend, and databases.",
      "✅ Continuously learning new technologies, frameworks, and methodologies.",
      "✅ Contributed to open-source projects, collaborating with developers worldwide.",
      "✅ Optimized performance, accessibility, and UX across multiple projects.",
      "✅ Successfully delivered projects with a focus on scalability and reliability.",
    ],
  },
  {
    title: "Goals",
    items: [
      "🎯 Secure a full-time software development role in a dynamic company.",
      "🎯 Expand expertise in Cloud Computing, DevOps, and AI-driven development.",
      "🎯 Build scalable and high-impact solutions for businesses and users.",
      "🎯 Share knowledge through blogging, tutorials, and community engagement.",
      "🎯 Contribute more to open-source and collaborate on meaningful projects.",
      "🎯 Earn industry-recognized certifications to solidify expertise.",
    ],
  },
];

export const workHistory = [
  {
    jobTitle: "Fullstack Developer",
    company: "CodeTribe",
    duration: "Jun 2024 - Present",
    description:
      "Developed responsive web applications using React, Tailwind CSS, and TypeScript. Collaborated with cross-functional teams to deliver high-quality user interfaces and improve performance.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    jobTitle: "Software Engineer",
    company: "Digistrads",
    duration: "2022 - Current",
    description:
      "Developed responsive websites using HTML, CSS, and JavaScript. Built e-commerce solutions integrating shopping carts, payment gateways, and inventory systems. Managed SQL databases, developed backend systems using Django, and built cross-platform apps with Angular and Firebase. Used GitHub for version control and collaborated effectively with teams.",
    stack: ["HTML", "CSS", "JavaScript", "Django", "Angular", "Firebase", "SQL", "Git"],
  },
  {
    jobTitle: "Freelancer",
    company: "Self Employed",
    duration: "2015 - 2022",
    description:
      "Handled diverse projects including hardware installations, client communication, software testing, and debugging. Provided excellent customer service and managed multiple projects efficiently. Demonstrated self-motivation and commitment to continuous learning in the tech industry.",
    stack: ["Hardware", "Networking", "Software Testing", "Client Communication"],
  },
];


export const footerData = [];
