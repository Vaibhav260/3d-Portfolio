import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs, 
  tailwind,
  trivia,
  git,
  threejs,
  cplus,
  java,
  tensorflow,
  openCV,
  mysql,  
  python,
  apple,
  herb,
  plantdet,
  portfolio,
  harry,
  mun,
  ribbon,
  ncsuLibraries,
  ncsu,
  futureTayari,
  rotaract,
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
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer (C/C++ Systems)",
    icon: web,
  },
  {
    title: "Distributed Systems & Networking",
    icon: mobile,
  },
  {
    title: "Full-Stack + Cloud",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
    icon: creator,
  },
];

const technologies = [
  { name: "C++", icon: cplus },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "MySQL", icon: mysql },
  { name: "TensorFlow", icon: tensorflow },
  { name: "OpenCV", icon: openCV },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
];

const tools = [
  // Systems / Real-time
  "Linux/UNIX",
  "SIP",
  "WebRTC",
  "TCP/IP",
  "Wireshark",
  "SIPp",
  "gRPC",
  "REST APIs",

  // Backend / Cloud
  "Node.js",
  "Firebase",
  "Next.js",
  "SSR",
  "CI/CD (GitHub Actions)",
  "Vercel",
  "Netlify",

  // Data / ML
  "PySpark",
  "Docker",
  "Terraform",
  "AWS (S3)",

  // Rails
  "Ruby on Rails",
  "RSpec",
  "FactoryBot",
];


// const experiences = [
//   {
//     title: "Application Developer",
//     company_name: "MUNSOC",
//     icon:  mun,
//     iconBg: "#383E56",
//     date: "March 2021 - April 2022",
//     points: [
//       "Developing and maintaining mobile applications using Flutter and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },

// ];

// src/constants/index.js  (or wherever your experiences live)


const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Ribbon Communications",
    icon: ribbon,
    iconBg: "#0B1220",
    date: "Jul 2025 - Present",
    points: [
      "Enhanced real-time communication systems focusing on SIP call processing and WebRTC.",
      "Debugged production issues in Linux/UNIX using logs, traces, Wireshark, and SIPp.",
      "Integrated C/C++ networking libraries with gRPC and REST APIs for distributed services.",
      "Automated workflows/scripts to improve developer efficiency and reliability.",
    ],
  },
  {
    title: "Data Analyst (Part-time)",
    company_name: "NC State University Libraries",
    icon: ncsuLibraries,
    iconBg: "#7A0019",
    date: "May 2025 - Present",
    points: [
      "Cleaned and analyzed institutional data to improve library analytics and reporting.",
      "Built interactive Datawrapper dashboards for public and internal library statistics.",
      "Enhanced NC State Libraries website with PHP and Drupal improvements for UX.",
    ],
  },
  {
    title: "Research Assistant (Part-time)",
    company_name: "North Carolina State University",
    icon: ncsu,
    iconBg: "#CC0000",
    date: "May 2025 - Jul 2025",
    points: [
      "Designed and analyzed multi-institutional datasets for early student success prediction.",
      "Evaluated feature-performance relationships and variability across datasets.",
      "Co-authored a research paper under review using programming log data in education.",
    ],
  },
  {
    title: "Machine Learning Intern / Full-stack Developer",
    company_name: "FutureTayari",
    icon: futureTayari,
    iconBg: "#111827",
    date: "Dec 2023 - May 2024",
    points: [
      "Built a dynamic React front-end to improve product experience and engagement.",
      "Used LLM-based automation for content creation to increase user interaction.",
      "Automated deployments to enable faster and more reliable releases.",
      "Worked across Node.js/Firebase/NoSQL with a product-focused full-stack mindset.",
    ],
  },
  {
    title: "Application Developer (Part-time)",
    company_name: "MUN Society MPSTME",
    icon: mun,
    iconBg: "#1F2937",
    date: "Sep 2021 - Jul 2022",
    points: [
      "Developed and maintained internal tools/apps to support society operations.",
      "Collaborated with team members to ship improvements and fix issues quickly.",
      "Worked with Python and cloud tools to support deployments and workflows.",
    ],
  },
  {
    title: "Member",
    company_name: "Rotaract Club of Bombay Airport",
    icon: rotaract,
    iconBg: "#0F172A",
    date: "Jul 2021 - Jul 2022",
    points: [
      "Participated in community initiatives and team-driven volunteering activities.",
      "Supported event planning and execution with a consistent and collaborative role.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      " ",
    name: " ",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];
const projects = [
  {
    name: "Trivia",
    description:
      "Web-based platform offering insights on world innovation and little-known facts, engaging users with fascinating trivia.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Vite", color: "text-purple-500" },
    ],
    image: trivia,
    source_code_link: "https://github.com/Vaibhav260/PhpTRivia",
  },

  // ✅ NEW: HealthSync
  {
    name: "HealthSync",
    description:
      "Health portal integrating OpenAI for automated medical report analysis, admin dashboard with charts, Tailwind UI, SSR optimization, and Firebase backend. CI/CD via GitHub Actions + Vercel reduced report processing time by ~30%.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "SSR", color: "text-purple-500" },
      { name: "CI/CD", color: "text-yellow-500" },
    ],
    image: portfolio, // TODO: replace with healthsync screenshot variable later
    source_code_link: "https://github.com/kamakshyan/health-sync",
  },

  // ✅ NEW: IoT Analytics
  {
    name: "IoT Analytics for Environmental Monitoring",
    description:
      "Performed statistical analysis and regression modeling on environmental sensor data. Improved model fit to R² = 0.803 while addressing multicollinearity.",
    tags: [
      { name: "Statistics", color: "blue-text-gradient" },
      { name: "Regression", color: "green-text-gradient" },
      { name: "IoT", color: "pink-text-gradient" },
      { name: "Data Science", color: "text-purple-500" },
    ],
    image: portfolio, // TODO: replace with iot screenshot variable later
    source_code_link: "https://github.com/Vaibhav260/IoT-Analytics-for-Environmental-Monitoring",
  },

  {
    name: "Plant Disease Detector",
    description:
      "Web application enabling farmers to identify and diagnose plant diseases using machine learning models like SVM.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Machine Learning", color: "text-yellow-500" },
      { name: "OpenCV", color: "text-purple-500" },
    ],
    image: plantdet,
    source_code_link: "https://github.com/Vaibhav260/Plant-disease-dectection",
  },

  // ✅ NEW: YOLOv8 Plant Disease Detection
  {
    name: "Plant Disease Detection (YOLOv8)",
    description:
      "Built plant disease detection using YOLOv8 and used a custom annotated dataset",
    tags: [
      { name: "YOLOv8", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "MLOps", color: "text-purple-500" },
    ],
    image: portfolio, // TODO: replace with yolov8 screenshot variable later
    source_code_link: "https://github.com/Vaibhav260/Plant-disease-dectection", // Have to check again
  },

  {
    name: "3D Portfolio Website",
    description:
      "Fully responsive 3D portfolio built with React, Vite, Tailwind CSS, and Three.js, featuring interactive animations and optimized performance. CI/CD via GitHub and Netlify.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "CI/CD", color: "text-purple-500" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Vaibhav260/3d-Portfolio",
  },

  // ✅ NEW: Expertiza
  {
    name: "Expertiza Peer-Review Platform",
    description:
      "Refactored controller logic for Expertiza (Ruby on Rails). Applied SOLID principles and improved test coverage using RSpec and FactoryBot for scalable maintenance.",
    tags: [
      { name: "Ruby on Rails", color: "blue-text-gradient" },
      { name: "SOLID", color: "green-text-gradient" },
      { name: "RSpec", color: "pink-text-gradient" },
      { name: "FactoryBot", color: "text-purple-500" },
    ],
    image: portfolio, // TODO: replace with expertiza screenshot variable later
    source_code_link: "https://github.com/Vaibhav260/expertiza",
  },

  // ✅ NEW: MusicGen
  {
    name: "MusicGen",
    description:
      "Built a deep learning music generation pipeline using VAE + GRU/LSTM with Music21 for MIDI processing. Generated original MIDI sequences via latent vector sampling and music theory encoding.",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "VAE", color: "green-text-gradient" },
      { name: "LSTM/GRU", color: "pink-text-gradient" },
      { name: "Music21", color: "text-purple-500" },
      { name: "NLP", color: "text-yellow-500" },
    ],
    image: portfolio, // TODO: replace with musicgen screenshot variable later
    source_code_link: "https://github.com/Vaibhav260",
  },

  // ✅ NEW: Predictive Maintenance
  {
    name: "Predictive Maintenance System",
    description:
      "Trained predictive maintenance models on industrial IoT sensor data for failure detection and deployed a Streamlit dashboard with LLM-powered maintenance insights.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "LLM", color: "text-purple-500" },
    ],
    image: portfolio, // TODO: replace with predictive screenshot variable later
    source_code_link: "https://github.com/Vaibhav260/predictive-maintenance-ai-groq",
  },

  // ✅ NEW: PySpark ETL
  {
    name: "PySpark ETL Pipeline",
    description:
      "Implemented an ETL pipeline using PySpark to extract data from MS SQL Server and load it into AWS S3. Containerized with Docker and automated infra + workflows using Terraform.",
    tags: [
      { name: "PySpark", color: "blue-text-gradient" },
      { name: "AWS S3", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "Terraform", color: "text-purple-500" },
    ],
    image: portfolio, // TODO: replace with pyspark screenshot variable later
    source_code_link: "https://github.com/Vaibhav260/AWS-ETl-Pipeline",
  },

  {
    name: "Fruit Grading System",
    description:
      "Fruit grading system using Ripeness ratio, Canny edge detection, and Hough circles to grade apples with high precision.",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],
    image: apple,
    source_code_link: "https://github.com/Vaibhav260/Fruit-Grading-system",
  },

  {
    name: "Herb Management System",
    description:
      "Inventory-style herb management app with a user-friendly UI to manage herb records and purchase stock.",
    tags: [
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Tkinter", color: "pink-text-gradient" },
    ],
    image: herb,
    source_code_link: "https://github.com/Vaibhav260/Herb-Management", // (your current link points to Fruit Grading)
  },

  {
    name: "Harry Potter Cloak of Invisibility",
    description:
      "Recreated the invisibility cloak effect using HSV color masking, letting users experience a real-time 'cloak' illusion with OpenCV.",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: harry,
    source_code_link: "https://github.com/Vaibhav260/Harry-Potter-s-Cloth-of-invisibilty", // (your current link points to Fruit Grading)
  },
];


export { services, technologies, tools, experiences, testimonials, projects };