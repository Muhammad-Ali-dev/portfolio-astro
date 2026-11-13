import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Muhammad Ali",
  legalName: "Muhammad Ali",
  role: "Applied AI Engineer",
  title: "Muhammad Ali — Applied AI Engineer",
  description:
    "Applied AI engineer: computer vision, local LLMs and TTS, backed by 4+ years of React, Next.js and TypeScript product work. Case studies, npm libraries and resume.",
  lede: "I build computer-vision and local LLM systems, and the React and Next.js product interfaces they ship in. 4+ years of production TypeScript.",
  url: resolveSiteUrl(),
  email: "muhammad9000ali@gmail.com",
  location: "Islamabad, Pakistan",
  availability: "Open to applied AI and full-stack roles, remote or relocation",
  resume: "/muhammad-ali-sheikh-resume.pdf",
  // Same-origin Open Graph image (1200×630). Override via absolute URL if needed.
  ogImage: "/og.png",
  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/muhammad-ali-sheikh001/",
    npm: "https://www.npmjs.com/~usamakhangt4",
  },
};

export const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export const careerHighlights = [
  { value: "4+", label: "Years shipping production software" },
  { value: "4", label: "Client products delivered since 2024" },
  { value: "2", label: "Published npm component libraries" },
  { value: "AI", label: "Computer vision and local GPU inference" },
] as const;

export const experience = [
  {
    company: "Focus IT Services Pvt Ltd",
    role: "Software Developer",
    location: "Rawalpindi, Pakistan",
    period: "Mar 2024 – Oct 2026",
    summary:
      "Led end-to-end delivery of three production enterprise platforms for business clients (logistics dispatch, HRMS, content management), owning requirements, solution design, build and release.",
    highlights: [
      "Built an AI campaign recommendation platform: a RAG chatbot (LangChain, OpenAI APIs) grounding recommendations in location, pricing and past-campaign data, with a dynamic pricing engine and role-based dashboards.",
      "Diagnosed a real-time rendering bottleneck on K-Optra (thousands of live fleet markers) and redesigned it around a single Canvas layer, cutting scheduling processing time by 40%.",
      "Built live driver tracking and job-status updates over WebSockets, plus a route-planning interface with Gantt view, Leaflet.js maps and order tracking.",
      "Designed a reusable component library shared across K-Optra, Focus HRMS and Giolindo CMS, standardising component APIs and reducing duplicated effort across teams.",
      "Defined the E2E test strategy (Cypress) and built CI/CD pipelines in GitHub Actions, adopted as the team's release standard.",
      "Ran demos and proofs of concept for clients and internal teams to validate solutions against requirements before launch.",
    ],
  },
  {
    company: "SmartWeb Labs Tech",
    role: "Web Developer",
    location: "Greater London, UK (Remote)",
    period: "Jun 2023 – Feb 2024",
    summary:
      "Delivered responsive enterprise-grade interfaces for multiple UK clients in a remote team, using React.",
    highlights: [
      "Worked with backend teams on REST API design and integration, with optimised data fetching and re-render strategies.",
      "Optimised applications for performance and cross-browser compatibility.",
    ],
  },
  {
    company: "Advance - Coding Experts",
    role: "Frontend Developer",
    location: "Leiria, Portugal (Remote)",
    period: "May 2022 – Apr 2023",
    summary:
      "Built and maintained client websites to agreed timelines, focused on performance and responsive design, working remotely with a Portugal-based team.",
    highlights: [
      "Developed reusable components in HTML, CSS, JavaScript and React, shortening delivery timelines.",
    ],
  },
] as const;

export const earlierProfessionalProjects = [
  {
    title: "Next Order Control Panel",
    type: "Restaurant operations platform",
    description:
      "Admin workflows for menus, vouchers, staff reports, inventory analytics, voided items, service charges, and store-level controls.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "React Query"],
  },
  {
    title: "Capital Bee",
    type: "Fintech analytics",
    description:
      "Responsive crypto tax and wallet analytics interfaces covering profit and loss, trades, success rates, charts, and reporting tables.",
    stack: ["React", "Dashboards", "Charts", "Data tables", "Responsive UI"],
  },
  {
    title: "Flux",
    type: "Fleet management system",
    description:
      "GPS-based borrowed-bike tracking workflows with typed state, forms, validation, and maintainable themed components.",
    stack: ["React", "TypeScript", "Redux", "Formik", "Styled Components"],
  },
  {
    title: "Review Management System",
    type: "Academic workflow automation",
    description:
      "Production evaluation workflows for final-year projects and MS/PhD thesis reviews used by COMSATS University Islamabad, Wah Campus.",
    stack: ["Laravel", "JavaScript", "jQuery", "Bootstrap", "HTML/CSS"],
  },
] as const;

export const education = {
  degree: "BS in Software Engineering (AI)",
  school: "COMSATS University Islamabad (2024)",
  period: "2020 - 2024",
} as const;

/** Skill groups shown on the homepage. Every item is backed by shipped work. */
export const stackGroups = [
  {
    title: "Frontend",
    description:
      "Typed product UI: component libraries, data-heavy screens, and 3D/Canvas viewers.",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "Web Components",
      "shadcn/ui",
      "Redux",
      "TanStack Query",
      "Zustand",
      "Canvas",
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, and realtime services behind the products.",
    items: [
      "FastAPI",
      "Flask",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "WebSockets",
    ],
  },
  {
    title: "Computer Vision",
    description: "Segmentation, depth, detection, and inpainting.",
    items: ["SAM 3", "Depth Anything V2", "YOLOPv2", "OpenCV", "Inpainting"],
  },
  {
    title: "Local AI/Inference",
    description: "Models and inference services running on local GPUs.",
    items: [
      "PyTorch",
      "FLUX.2 [klein] 4B",
      "Nunchaku INT4",
      "KittenTTS 2",
      "Ollama",
      "CUDA",
    ],
  },
  {
    title: "Mobile",
    description: "Android and iOS builds of the web product.",
    items: ["Ionic", "Capacitor", "Android", "iOS"],
  },
  {
    title: "DevOps & Testing",
    description: "Containers, checks, and the test tooling around delivery.",
    items: ["Docker", "GitHub Actions", "Vitest", "Jest", "Cypress", "ESLint"],
  },
] as const;
