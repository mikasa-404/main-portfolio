import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Project1 from "../assets/Screenshot from 2024-01-31 12-25-34.png";
import Project2 from "../assets/Screenshot from 2024-01-31 12-25-05.png";
import Project3 from "../assets/ss1.png";
export const resumeLink = "https://drive.google.com/file/d/1LJalfYgeTarU5eRkI0oND8zJ32fUT2Gn/view"
export const skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    tech: "Node JS",
    icon: <FaNode />,
  },
];

export const projects = [
  {
    id: 0,
    project_name: "SehShiksha: Student Community Platform",
    project_desc: "A full-stack community portal for college students.",
    features:
      "JWT authentication/authorization, allows CRUD operations on posts, upload and preview pdf materials, community forum for discussions, file upload functionality using multer, light/dark mode options.",
    tech_stack: ["React JS", "Node.js", "Express.js", "MongoDB", "Material UI"],
    project_img: Project3,
    project_url: "https://seh-shiksha.vercel.app",
    github_link: "https://github.com/mikasa-404/sehShiksha",
    reverse: false,
  },

  {
    id: 1,
    project_name: "YouTube Clone Plus",
    project_desc:"A video streaming platform which utilizes YouTube API",
    features:"Infinite scroll, well-optimized search with debouncing, caching, and API integration, N-level nested comment section and live chat display",
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind", "Express.js"],
    project_img: Project2,
    project_url: "https://priya-youtube.netlify.app/",
    github_link: "https://github.com/mikasa-404/yt-clone",
    reverse: true,
  },
  {
    id: 2,
    project_name: "FoodyVille: Food Ordering Application",
    project_desc:"Developed a food ordering application using React",
    features:"Redux for efficient cart management, developed a middleware to automatically persist cart state to localStorage, search for restaurants, lazy loading on components with custom shimmerUI",
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind"],
    project_img: Project1,
    project_url: "https://foodyville.netlify.app",
    github_link: "https://github.com/mikasa-404/food-ordering-app",
    reverse: false,
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
    name: "My Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "My Experience ",
    href: "Experience",
  },
  {
    id: 3,
    name: "My Projects ",
    href: "Projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "Contact",
  },
];
