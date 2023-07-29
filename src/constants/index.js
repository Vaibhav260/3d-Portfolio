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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "C++",
    icon: cplus,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "OpenCV",
    icon: openCV,
  },
  {
    name: "mysql",
    icon: mysql,
  },
   
];

const experiences = [
  {
    title: "Application Developer",
    company_name: "MUNSOC",
    icon:  mun,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Introducing a web-based platform that offers the latest insights on world innovation and presents little-known facts, engaging users with fascinating trivia and expanding their knowledge.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "text-purple-500",
      },
    ],
    image: trivia,
    source_code_link: "https://github.com/Vaibhav260/PhpTRivia",
  },
  {
    name: "Plant Disease Detector",
    description:
      "Web application enabling farmers to identify and diagnose plant diseases using machine learning models like SVM.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "text-yellow-500",
      },
      {
        name: "OpenCV",
        color: "text-purple-500",
      },
    ],
    image: plantdet,
    source_code_link: "https://github.com/Vaibhav260/Plant-disease-dectection",
  },
  {
    name: "3d Portfolio Website",
    description:
      "Presenting my 3D portfolio website, skillfully crafted with React and enhanced with Tailwind CSS, showcasing dynamic and interactive visuals powered by Three.js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Vaibhav260/3d-Portfolio",
  },
  {
    name: "Fruit Grading System",
    description:
      "Innovative fruit grading system revolutionizing the fruit industry. Utilizes Ripeness ratio, canny edge detection, and Hough circles to grade apples with exceptional precision and accuracy",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/Vaibhav260/Fruit-Grading-system",
  },
  {
    name: "Herb Management System",
    description:
      "Created a user-friendlv interface that accepts information from users regarding herb name and opens a inventory to purchase stocks.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: herb,
    source_code_link: "https://github.com/Vaibhav260/Fruit-Grading-system",
  },
  {
    name: "Harry potter Cloth of Invisibility",
    description:
      "Recreated the magical cloak from Harry Potter using HSV values, allowing users to experience the thrill of going unnoticed and channel their inner wizard.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image:  harry,
    source_code_link: "https://github.com/Vaibhav260/Fruit-Grading-system",
  },
];

export { services, technologies, experiences, testimonials, projects };