import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Project1 from "../assets/Screenshot from 2024-01-31 12-25-34.png";
import Project2 from "../assets/Screenshot from 2024-01-31 12-25-05.png";

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
    project_name: "FoodyVille: Food Ordering Application",
    project_desc:
      "Food ordering project that finds nearby restaurants, offers search functionality, efficient cart management using Redux toolkit along with features like custom shimmer UI and dynamic routing. Plus, custom hooks and lazy loading making it super efficient!",
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind"],
    project_img: Project1,
    project_url: "https://foodyville.netlify.app",
    github_link:"https://github.com/mikasa-404/food-ordering-app",
    reverse: false,
  },
  {
    id: 1,
    project_name: "YouTube Clone",
    project_desc:
      "Developed a high-quality video streaming platform that utilizes the YouTube API, incorporating features such as a slide sidebar, infinite scroll, and a well-optimized search employing live API, debouncing, and caching for swift, real-time results. Implemented a robust Node.js and Express.js server to overcome CORS challenges. Additional features include N-level nested comment sections and a live chat display",
    tech_stack: ["React JS", "Redux Toolkit", "Tailwind", "Express.js"],
    project_img: Project2,
    project_url: "https://priya-youtube.netlify.app/",
    github_link:"https://github.com/mikasa-404/yt-clone",
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
