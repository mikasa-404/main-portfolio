import {
  FaBrain,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineApi, AiOutlinePartition } from "react-icons/ai";
import {
  SiAmazonaws,
  SiApachekafka,
  SiAmazonsqs,
  SiAwslambda,
  SiClickhouse,
  SiCplusplus,
  SiCypress,
  SiExpress,
  SiGoland,
  SiGrafana,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReactquery,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { TbCircuitChangeover, TbMessageCircleCog } from "react-icons/tb";
import Project1 from "../assets/Screenshot from 2024-01-31 12-25-34.png";
import Project2 from "../assets/Screenshot from 2024-01-31 12-25-05.png";
import Project3 from "../assets/ss1.png";
import Project4 from "../assets/podcastPage.png";

export const resumeLink =
  "https://drive.google.com/file/d/1TbWPmAvMz-0YCWBLA7dQ4YHj2ze9RG2x/view?usp=sharing";

export const contactInfo = {
  email: "priyajha8218@gmail.com",
  phone: "+91 9205390414",
  location: "Gurgaon, India",
  github: "https://github.com/mikasa-404",
  linkedin: "https://www.linkedin.com/in/priyajha414",
  leetcode: "https://leetcode.com/mikasa404/",
};

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { id: 0, tech: "JavaScript", icon: <SiJavascript /> },
      { id: 1, tech: "TypeScript", icon: <SiTypescript /> },
      { id: 2, tech: "C++", icon: <SiCplusplus /> },
      { id: 3, tech: "Python", icon: <SiPython /> },
      { id: 4, tech: "SQL", icon: <BiLogoPostgresql /> },
      { id: 5, tech: "Golang", icon: <SiGoland /> },
    ],
  },
  {
    title: "Backend & Cloud",
    items: [
      { id: 0, tech: "Node.js", icon: <FaNode /> },
      { id: 1, tech: "NestJS", icon: <SiNestjs /> },
      { id: 2, tech: "Express.js", icon: <SiExpress /> },
      { id: 3, tech: "REST APIs", icon: <AiOutlineApi /> },
      { id: 4, tech: "Microservices", icon: <FaServer /> },
      { id: 5, tech: "Kafka", icon: <SiApachekafka /> },
      { id: 6, tech: "SQS", icon: <SiAmazonsqs /> },
      { id: 7, tech: "AWS Lambda", icon: <SiAwslambda /> },
      { id: 8, tech: "AWS", icon: <SiAmazonaws /> },
      { id: 9, tech: "Redis", icon: <SiRedis /> },
      { id: 10, tech: "Docker", icon: <FaDocker /> },
    ],
  },
  {
    title: "Datastores & Analytics",
    items: [
      { id: 0, tech: "MongoDB", icon: <SiMongodb /> },
      { id: 1, tech: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { id: 2, tech: "MySQL", icon: <SiMysql /> },
      { id: 3, tech: "ClickHouse", icon: <SiClickhouse /> },
      { id: 4, tech: "Change Streams", icon: <TbCircuitChangeover /> },
      { id: 5, tech: "Event-driven systems", icon: <TbMessageCircleCog /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { id: 0, tech: "React.js", icon: <FaReact /> },
      { id: 1, tech: "Next.js", icon: <SiNextdotjs /> },
      { id: 2, tech: "React Query", icon: <SiReactquery /> },
      { id: 3, tech: "HTML5", icon: <FaHtml5 /> },
      { id: 4, tech: "CSS3", icon: <FaCss3Alt /> },
      { id: 5, tech: "Responsive UI", icon: <FaReact /> },
    ],
  },
  {
    title: "Testing, Monitoring & Fundamentals",
    items: [
      { id: 0, tech: "Jest", icon: <SiJest /> },
      { id: 1, tech: "Cypress", icon: <SiCypress /> },
      { id: 2, tech: "Postman", icon: <SiPostman /> },
      { id: 3, tech: "Prometheus", icon: <SiPrometheus /> },
      { id: 4, tech: "Grafana", icon: <SiGrafana /> },
      { id: 5, tech: "Git/GitHub", icon: <FaGithub /> },
      { id: 6, tech: "System Design", icon: <AiOutlinePartition /> },
      { id: 7, tech: "DSA", icon: <FaBrain /> },
      { id: 8, tech: "Git", icon: <FaGitAlt /> },
    ],
  },
];

export const experienceItems = [
  {
    id: 0,
    role: "Software Development Engineer I",
    company: "Spyne AI",
    location: "Gurgaon, India",
    date: "Nov 2024 - Present",
    accent: true,
    highlights: [
      "Contributed to a high-throughput orchestration microservice handling 1,300+ RPM with p95 latency of 451ms while coordinating 5+ downstream services.",
      "Implemented reliable real-time sync with MongoDB Change Streams and Kafka, maintaining zero event loss or duplication across service boundaries.",
      "Built an AI-powered automotive lead re-engagement platform with LLM-driven SMS follow-ups, lifting inactive customer engagement by 40%.",
      "Designed Redis sliding-window rate limiting for a high-traffic API service handling 4.7K+ RPM with under 50 microseconds latency overhead.",
      "Shipped client onboarding and universal iframe product viewer experiences, cutting onboarding time by 60% and reducing viewer load time from 2s to 100ms.",
    ],
    impact: ["1.3K+ RPM", "40% engagement lift", "95% faster viewer"],
  },
  {
    id: 1,
    role: "Fullstack Developer Intern",
    company: "Spyne AI",
    location: "Gurgaon, India",
    date: "Aug 2024 - Oct 2024",
    highlights: [
      "Developed interactive 360-degree spin viewers backed by AI-processed vehicle imagery and REST APIs for product data delivery.",
      "Engineered postMessage communication between multiple iframes to automate rotations and synchronize mouse interactions across views.",
      "Integrated AI-generated GLB and PLY car models with PlayCanvas and React for browser-based 3D visualization.",
    ],
    impact: ["360-degree viewer", "iframe sync", "3D car models"],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "The Internet Folks",
    location: "Remote",
    date: "Feb 2024 - Jul 2024",
    highlights: [
      "Built a Notion-like rich text editor with Next.js, TipTap, and Tailwind CSS used by 2,000+ users.",
      "Contributed to a website studio builder powered by dynamic variables, increasing user engagement by 40%.",
      "Improved interface quality with GSAP, Framer Motion, and Cypress end-to-end tests for key product flows.",
    ],
    impact: ["2,000+ users", "40% engagement lift", "Cypress coverage"],
  },
  {
    id: 3,
    role: "M.S. Mathematics and Computing",
    company: "Indian Institute of Technology (ISM) Dhanbad",
    location: "Dhanbad, India",
    date: "May 2022 - Jun 2024",
    highlights: [
      "Graduated with a 7.8 CGPA and strong foundations in data structures, operating systems, databases, blockchain, and software systems.",
      "Built a practical base in algorithmic problem solving, distributed systems thinking, and performance-oriented engineering.",
    ],
    impact: ["7.8 CGPA", "Systems coursework", "Algorithms"],
  },
];

export const projects = [
  {
    id: 0,
    project_name: "SehShiksha: Student Community Platform",
    project_type: "Full-stack community product",
    impact: "Real-time notifications, threaded discussions, and resource sharing for student communities.",
    project_desc:
      "A full-stack student community portal for posts, resources, threaded discussions, and real-time campus updates.",
    features: [
      "Built JWT authentication, CRUD APIs, upvote/downvote flows, and a communal news feed.",
      "Integrated AWS S3 for PDF resources and file previews with a clean resource hub experience.",
      "Added event-driven notifications using AWS SNS/SQS with WebSockets and recursive rendering for threaded discussions.",
    ],
    tech_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "AWS S3",
      "SNS/SQS",
      "MongoDB",
      "Material UI",
    ],
    project_img: Project3,
    project_url: "https://seh-shiksha.vercel.app",
    github_link: "https://github.com/mikasa-404/sehShiksha",
    reverse: false,
  },
  {
    id: 4,
    project_name: "Podcraft AI: Podcasting Platform",
    project_type: "AI media platform",
    impact: "Generated audio, custom thumbnails, search, trends, and persistent playback in one product flow.",
    project_desc:
      "An AI-powered podcast platform for generating, publishing, searching, and listening to podcasts.",
    features: [
      "Used OpenAI APIs for on-demand audio generation from text transcripts and thumbnail generation.",
      "Built search by title or creator, trending podcast discovery, and a sticky player with play, pause, skip, and mute controls.",
      "Handled authentication, persistence, and a polished responsive UI with Clerk, Convex, and Tailwind CSS.",
    ],
    tech_stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "OpenAI API",
      "Clerk",
      "Tailwind CSS",
    ],
    project_img: Project4,
    project_url: "https://ai-podcast-platform.vercel.app",
    github_link: "https://github.com/mikasa-404/ai-podcast-platform",
    reverse: true,
  },

  {
    id: 1,
    project_name: "YouTube Clone Plus",
    project_type: "Frontend performance build",
    impact: "API-backed discovery with debounced search, cached results, nested comments, and live chat behavior.",
    project_desc:
      "A YouTube-style video platform focused on search, feed performance, comments, and live interaction patterns.",
    features: [
      "Integrated the YouTube API with infinite scroll and optimized search using debouncing and caching.",
      "Built N-level nested comments and a live chat interface to mirror real video-platform behavior.",
      "Used Redux Toolkit to keep feed, search, and interaction state predictable across the application.",
    ],
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind", "Express.js"],
    project_img: Project2,
    project_url: "https://priya-youtube.netlify.app/",
    github_link: "https://github.com/mikasa-404/yt-clone",
    reverse: false,
  },
  {
    id: 2,
    project_name: "FoodyVille: Food Ordering Application",
    project_type: "Consumer ordering interface",
    impact: "Persistent cart state, lazy-loaded routes, restaurant search, and smooth loading feedback.",
    project_desc:
      "A responsive food ordering experience with restaurant search, cart persistence, and lazy-loaded flows.",
    features: [
      "Used Redux Toolkit for cart management and middleware to persist cart state to localStorage.",
      "Added restaurant search, lazy-loaded routes, and custom shimmer loading states for smoother browsing.",
      "Structured the UI around reusable React components and mobile-friendly layouts.",
    ],
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind"],
    project_img: Project1,
    project_url: "https://foodyville.netlify.app",
    github_link: "https://github.com/mikasa-404/food-ordering-app",
    reverse: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "Experience",
    href: "Experience",
  },
  {
    id: 3,
    name: "Projects",
    href: "Projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "Contact",
  },
];
