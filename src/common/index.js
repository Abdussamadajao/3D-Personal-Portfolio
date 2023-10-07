import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  pneuma,
  nextjs,
  styledComponents,
} from "../assets/index";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Styled Components",
    icon: styledComponents,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "B0ring Consults ",
    icon: backend,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      " Developed React web pages based on wireframes and figma designs.",
      "Turned figma designs into animated,responsive web pages using HTML5, CSS3, and Sass.",
      " Developed dynamic and engaging web functionality and eCommerce using JavaScript and Typescript.",
      "Participating in code reviews.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Pneuma Care ",
    icon: pneuma,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      " Developed React web pages based on wireframes and figma designs.",
      "Turned figma designs into animated,responsive web pages using HTML5, CSS3, and Sass.",
      " Developed dynamic and engaging web functionality and eCommerce using JavaScript and Typescript.",
      "Participating in code reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pick Bazer",
    description:
      "An e-commerce site is a website that allows businesses to sell products and services online to customers. Typically, an e-commerce site includes a storefront where customers can browse and search for products, view product descriptions and pricing information, and add items to their shopping cart. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abdus-samad/ecommerce",
  },
  {
    name: "Github Finder",
    description:
      "A GitHub finder is a web base tool or application that helps users search and find GitHub profiles," +
      " repositories, and other content on the popular code-sharing platform GitHub." +
      " This tool typically uses GitHub's API (Application Programming Interface) to retrieve and " +
      "display relevant information based on user search queries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "github-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "WhatApp Clone",
    description:
      "A WhatsApp Web clone is a web application that mimics the functionality of the popular messaging app, WhatsApp. It is designed to provide users with a familiar and seamless experience of using WhatsApp on a desktop or laptop computer without having to install the official WhatsApp desktop application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Abdus-samad/whatapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
