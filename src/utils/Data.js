import {
  FaBrain,
  FaCloud,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaReact,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineApi, AiOutlinePartition } from "react-icons/ai";
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazons3,
  SiAmazoncloudwatch,
  SiApachekafka,
  SiAmazonsqs,
  SiAwsfargate,
  SiAwslambda,
  SiClickhouse,
  SiCplusplus,
  SiCypress,
  SiElasticsearch,
  SiExpress,
  SiGithubactions,
  SiGoland,
  SiGrafana,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNewrelic,
  SiNextdotjs,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSailsdotjs,
  SiServerless,
  SiSocketdotio,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbCircuitChangeover,
  TbMessageCircleCog,
  TbRouteSquare,
  TbTimeline,
} from "react-icons/tb";
import Project1 from "../assets/Screenshot from 2024-01-31 12-25-34.png";
import Project2 from "../assets/Screenshot from 2024-01-31 12-25-05.png";
import Project3 from "../assets/ss1.png";
import Project4 from "../assets/podcastPage.png";

export const resumeLink =
  "https://drive.google.com/file/d/1cW9Dby1gZQ-e4pQaFzU7Nb4y9Xm16SM8/view?usp=sharing";

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
      { id: 0, tech: "TypeScript", icon: <SiTypescript /> },
      { id: 1, tech: "JavaScript", icon: <SiJavascript /> },
      { id: 2, tech: "Golang", icon: <SiGoland /> },
      { id: 3, tech: "Python", icon: <SiPython /> },
      { id: 4, tech: "C++", icon: <SiCplusplus /> },
      { id: 5, tech: "SQL", icon: <BiLogoPostgresql /> },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { id: 0, tech: "Node.js", icon: <FaNode /> },
      { id: 1, tech: "NestJS", icon: <SiNestjs /> },
      { id: 2, tech: "Express.js", icon: <SiExpress /> },
      { id: 3, tech: "Sails.js", icon: <SiSailsdotjs /> },
      { id: 4, tech: "Gin (Go)", icon: <SiGoland /> },
      { id: 5, tech: "REST APIs", icon: <AiOutlineApi /> },
      { id: 6, tech: "gRPC", icon: <SiTrpc /> },
      { id: 7, tech: "Microservices", icon: <FaServer /> },
    ],
  },
  {
    title: "Event-Driven & Messaging",
    items: [
      { id: 0, tech: "Kafka", icon: <SiApachekafka /> },
      { id: 1, tech: "SQS FIFO", icon: <SiAmazonsqs /> },
      { id: 2, tech: "EventBridge", icon: <TbRouteSquare /> },
      { id: 3, tech: "Change Streams", icon: <TbCircuitChangeover /> },
      { id: 4, tech: "WebSockets", icon: <SiSocketdotio /> },
      { id: 5, tech: "Event-driven systems", icon: <TbMessageCircleCog /> },
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      { id: 0, tech: "AWS", icon: <SiAmazonaws /> },
      { id: 1, tech: "Lambda", icon: <SiAwslambda /> },
      { id: 2, tech: "EC2", icon: <SiAmazonec2 /> },
      { id: 3, tech: "ECS / Fargate", icon: <SiAwsfargate /> },
      { id: 4, tech: "S3 & CloudFront", icon: <SiAmazons3 /> },
      { id: 5, tech: "Serverless", icon: <SiServerless /> },
      { id: 6, tech: "Docker", icon: <FaDocker /> },
      { id: 7, tech: "CI/CD", icon: <SiGithubactions /> },
    ],
  },
  {
    title: "Databases & Search",
    items: [
      { id: 0, tech: "MongoDB", icon: <SiMongodb /> },
      { id: 1, tech: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { id: 2, tech: "MySQL", icon: <SiMysql /> },
      { id: 3, tech: "DynamoDB", icon: <SiAmazondynamodb /> },
      { id: 4, tech: "Redis", icon: <SiRedis /> },
      { id: 5, tech: "ClickHouse", icon: <SiClickhouse /> },
      { id: 6, tech: "Elasticsearch", icon: <SiElasticsearch /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { id: 0, tech: "React.js", icon: <FaReact /> },
      { id: 1, tech: "Next.js", icon: <SiNextdotjs /> },
      { id: 2, tech: "Redux", icon: <SiRedux /> },
      { id: 3, tech: "React Query", icon: <SiReactquery /> },
      { id: 4, tech: "HTML5", icon: <FaHtml5 /> },
      { id: 5, tech: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Testing & Observability",
    items: [
      { id: 0, tech: "Jest", icon: <SiJest /> },
      { id: 1, tech: "Cypress", icon: <SiCypress /> },
      { id: 2, tech: "Postman", icon: <SiPostman /> },
      { id: 3, tech: "New Relic", icon: <SiNewrelic /> },
      { id: 4, tech: "Cube APM", icon: <TbTimeline /> },
      { id: 5, tech: "CloudWatch", icon: <SiAmazoncloudwatch /> },
      { id: 6, tech: "Prometheus", icon: <SiPrometheus /> },
      { id: 7, tech: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    title: "Fundamentals & AI-Assisted Dev",
    items: [
      { id: 0, tech: "System Design", icon: <AiOutlinePartition /> },
      { id: 1, tech: "Distributed Systems", icon: <FaCloud /> },
      { id: 2, tech: "DSA & OOP", icon: <FaBrain /> },
      { id: 3, tech: "Cursor & Claude Code", icon: <FaRobot /> },
      { id: 4, tech: "MCP Integrations", icon: <TbApi /> },
      { id: 5, tech: "Git / GitHub", icon: <FaGitAlt /> },
    ],
  },
];

export const experienceItems = [
  {
    id: 0,
    role: "Software Development Engineer I",
    company: "Spyne AI",
    location: "Gurgaon, India",
    date: "Aug 2024 - Present",
    accent: true,
    highlights: [
      "Architected a NestJS/TypeScript CRM microservice: redesigned the MongoDB models, authored the ERDs and LLDs, and layered controllers, services, and repositories, with service-to-service auth backed by AWS KMS and SSM. Runs at p95 under 400ms with under 0.01% error rate and 90%+ Jest coverage.",
      "Led a zero-downtime migration of ~3M documents: indexed batching for the hot data first, legacy-first dual-write APIs, and background backfill workers, with reconciliation, backoff retries, and DLQ recovery for zero data loss.",
      "Built an event-driven lead re-engagement pipeline on Node.js, SQS FIFO, and EventBridge Scheduler that lifted lead re-engagement 40% and drove 6% appointment conversion, with idempotent consumers and DLQ recovery.",
      "Built a serverless persona engine (EventBridge, SQS FIFO, Lambda, S3) generating schema-validated LLM personas from lead events, using reserved concurrency and fact-grounded prompts to cap cost and hallucination.",
      "Worked on an orchestration microservice coordinating 5+ services at 1,300+ RPM and p95 451ms over MongoDB Change Streams and Kafka, hardened with Redis distributed locks, resume-token recovery, and circuit breakers.",
      "Moved inventory listing and search onto an Elasticsearch read model with fuzzy matching, filters, and aggregation facets, kept in sync through Change Streams and Kafka: 261ms average, 656ms p95, 0.0019% errors.",
      "Designed a distributed rate limiter on a Redis sliding-window counter with atomic Lua scripts, enforcing plan-based quotas race-free across horizontally scaled services.",
      "Shipped Go (Gin) services behind the branding service at ~272 RPM and p95 14.91ms with 0% errors, plus scheduled Lambda pipelines aggregating ClickHouse metrics across 1,000+ enterprises into Redis-cached recommendation tags.",
    ],
    impact: [
      "~3M docs, zero data loss",
      "p95 under 400ms",
      "40% re-engagement lift",
      "1,300+ RPM",
      "261ms search",
    ],
  },
  {
    id: 1,
    role: "Software Development Engineer",
    company: "The Internet Folks",
    location: "Remote",
    date: "Jun 2024 - Aug 2024",
    highlights: [
      "Designed and built REST APIs in Node.js and Express for ticketing and event-management workflows, covering ticket allocation, updates, and validation.",
      "Optimised PostgreSQL queries and introduced indexing, cutting average API latency by ~35% across high-traffic endpoints.",
      "Developed a Notion-like rich text editor with Next.js and TipTap, serving 2,000+ users with real-time editing and content management.",
      "Added Cypress end-to-end tests across critical user workflows and API integrations to improve release reliability.",
    ],
    impact: ["~35% lower API latency", "2,000+ users", "Cypress E2E coverage"],
  },
  {
    id: 2,
    role: "M.S. Mathematics and Computing",
    company: "Indian Institute of Technology (ISM) Dhanbad",
    location: "Dhanbad, India",
    date: "May 2022 - Jun 2024",
    highlights: [
      "Graduated with an aggregate CGPA of 7.8.",
      "Relevant coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Design and Analysis of Algorithms, and Building Software Systems.",
    ],
    impact: ["7.8 CGPA", "Systems coursework", "Algorithms"],
  },
];

export const projects = [
  {
    id: 0,
    project_name: "PodCraft AI: Podcasting Platform",
    project_type: "AI media platform",
    impact:
      "On-demand text-to-audio narration in multiple voices and languages, AI thumbnails, and full user management.",
    project_desc:
      "An AI-powered podcast platform where users generate a podcast from a title, description, and transcript.",
    features: [
      "Used the OpenAI API for on-demand text-to-audio narration across multiple voices and languages, plus AI-generated thumbnails.",
      "Implemented secure user management (signup, login, profiles) with Clerk auth on a Convex backend.",
      "Built search by title or creator, trending discovery, and a sticky player with play, pause, skip, and mute controls.",
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
    reverse: false,
  },
  {
    id: 1,
    project_name: "SehShiksha: Student Community Platform",
    project_type: "Full-stack community product",
    impact:
      "JWT auth, ranked social feeds, an S3 resource hub, and real-time event-driven notifications.",
    project_desc:
      "A full-stack student community portal for posts, resources, threaded discussions, and real-time campus updates.",
    features: [
      "Built JWT authentication and authorisation, CRUD APIs, and upvote/downvote ranking on a communal news feed.",
      "Integrated an AWS S3 resource hub for PDF management with previews.",
      "Added event-driven notifications over AWS SNS/SQS with WebSockets, and a threaded discussion forum with recursive nested replies.",
    ],
    tech_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "SNS/SQS",
      "JWT",
    ],
    project_img: Project3,
    project_url: "https://seh-shiksha.vercel.app",
    github_link: "https://github.com/mikasa-404/sehShiksha",
    reverse: true,
  },

  {
    id: 2,
    project_name: "YouTube Clone Plus",
    project_type: "Frontend performance build",
    impact:
      "API-backed discovery with debounced search, cached results, nested comments, and live chat behavior.",
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
    id: 3,
    project_name: "FoodyVille: Food Ordering Application",
    project_type: "Consumer ordering interface",
    impact:
      "Persistent cart state, lazy-loaded routes, restaurant search, and smooth loading feedback.",
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
