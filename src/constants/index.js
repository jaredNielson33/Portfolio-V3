import {
  javascript,
  typescript,
  html,
  css,
  angular,
  vue,
  reactjs,
  next,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  inl,
  bowlero,
  kyani,
  gm,
  EMRALD,
  carhub,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Idaho National Laboratory",
    icon: inl,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
    "Leading the development and management of EHID, an application aiding nuclear plants in risk assessment.",
    "Coordinating research efforts, managing budgets, and reporting milestones to stakeholders.",
    "Enhancing security by replacing a legacy authentication system with Okta, improving access control and system integrity.",
    "Developing and maintaining web applications using Next.js, React, and TypeScript.",
    "Implementing interactive mapping features to visualize electrical grid disruptions and improve situational awareness.",
    "Modernizing the EMRALD Model Editor, migrating from Angular.js to React to enhance user experience and performance.",
    "Integrating Preact components into a Flask/jQuery codebase to improve usability and maintainability."
    ],
  },
  {
    title: "React Developer",
    company_name: "Bellum / Bowlero",
    icon: bowlero,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript, and Redux.",
      "Enhancing Bowlero’s Quality Management System (QMS), improving efficiency for 300+ centers nationwide.",
      "Collaborating with designers, product managers, and backend developers to create high-quality user experiences.",
      "Overhauling a peer comparison tool, enabling center managers to benchmark performance against industry standards.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Kyani",
    icon: kyani,
    iconBg: "#383E56",
    date: "Mar 2019 - Mar 2022",
    points: [
    "Building and maintaining full-stack applications using Vue.js, PHP, Laravel, and Golang.",
    "Integrating a third-party payment gateway, enabling multiple payment methods and improving transaction security.",
    "Developing an address verification system in Vue.js, reducing shipping errors and improving warehouse efficiency.",
    "Designing and implementing a user-friendly onboarding interface, enhancing the enrollment experience."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "General Motors",
    icon: gm,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Mar 2019",
    points: [
      "Developing and maintaining manufacturing applications using Angular and TypeScript.",
      "Migrating a legacy label design system from Angular.js to Angular, improving performance and maintainability.",
      "Building reusable UI components to ensure consistency across multiple GM applications.",
      "Implementing accessibility best practices and responsive design for cross-platform compatibility.",
      "Collaborating with designers and engineers to standardize UI/UX across manufacturing tools."
    ],
  },
];

const projects = [
  {
    name: "EMRALD Model Editor",
    description:
      "A powerful tool developed by Idaho National Laboratory for risk and reliability modeling. Contributed to enhancing the UI, improving usability, and refining the user experience for seamless workflow integration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "React-flow",
        color: "pink-text-gradient",
      },
    ],
    image: EMRALD,
    source_code_link: "https://github.com/idaholab/EMRALD",
  },
  {
    name: "Car Hub",
    description:
      "A sleek and dynamic car rental platform with interactive UI, API-driven data, and a responsive design. This project highlights modern web development and real-world application design.",
    tags: [
      {
        name: "Next,js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/jaredNielson33/cars_showcase",
  }
];

export { technologies, experiences, projects };
