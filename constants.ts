import { Project, Experience, Education, SkillCategory, Certification } from './types';
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const PERSONAL_INFO = {
  name: "GODFREY T R",
  role: "SOFTWARE ENGINEER",
  tagline: "Software Engineer specializing in full-stack development, building scalable, AI-integrated applications from concept to deployment.",
  email: "godfrey.prof@gmail.com",
  phone: "+91 93444 62238",
  location: "Tiruchirapalli, Tamil Nadu, India",
  github: "https://github.com/OrionGD",
  linkedin: "https://linkedin.com/in/godfrey1823lw",
  hackerrank: "https://hackerrank.com/OrionGD07",
  leetcode: "https://leetcode.com/u/OrionGD/"
};

export const SOCIAL_LINKS = [
  { icon: FaGithub, url: PERSONAL_INFO.github, label: "GitHub" },
  { icon: FaLinkedin, url: PERSONAL_INFO.linkedin, label: "LinkedIn" },
  { icon: SiLeetcode, url: PERSONAL_INFO.leetcode, label: "LeetCode" },
  { icon: FaHackerrank, url: PERSONAL_INFO.hackerrank, label: "HackerRank" },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech CSE",
    institution: "K. Ramakrishnan College of Technology",
    period: "Aug 2023 – May 2027 (Expected)"
  },
  {
    degree: "Higher Secondary (Math & Biology)",
    institution: "Sri Bala Vidyamandir MHSS",
    period: "Jul 2019 – Jul 2023"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "UI/UX Design Intern",
    company: "SkillCraft",
    period: "Jan 2025 – Mar 2025",
    details: [
      "Homepage redesign for improved hierarchy and visual clarity",
      "Dark mode theme integration for mobile news applications",
      "E-commerce checkout flow optimization to reduce friction",
      "User journey mapping and pain point analysis for fitness apps"
    ]
  },
  {
    role: "Cybersecurity Intern",
    company: "Adaovi",
    period: "May 2024 – Jul 2024",
    details: [
      "Password Strength Checker with real-time feedback",
      "Ethical Keylogger simulation for security demonstrations",
      "Penetration testing fundamentals and password security audits"
    ]
  },
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    period: "Jan 2024 – Mar 2024",
    details: [
      "Weather Web App using REST APIs and responsive design",
      "Utility tools: Stopwatch and Tic-Tac-Toe with dynamic DOM",
      "Frontend-backend integration focusing on cross-platform compatibility"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming", skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript"] },
  { category: "Web", skills: ["MERN Stack", "REST APIs", "DOM", "Responsive Design", "Tailwind CSS", "FastAPI"] },
  { category: "Databases", skills: ["MySQL", "MongoDB"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "GenAI Tools", "Unity"] },
  { category: "Concepts", skills: ["AI Integration", "UI/UX", "Cybersecurity", "NLP", "Text Analysis", "ARCore"] },
  { category: "XR", skills: ["Unity3D", "ARCore", "Blender"] }
];

export const LEADERSHIP_XR = [
  "XR Club Vice President",
  "AR Workshops Facilitator",
  "Mentoring Juniors",
  "Active NSS Volunteer",
  "Hackathons & Events Coordination"
];

export const PROJECTS: Project[] = [
  { 
    title: "SMART-LMS-16", 
    category: "AI / ML", 
    tech: ["MERN", "TypeScript", "Google Gemini"], 
    description: "AI-powered adaptive learning platform. Personalizes lessons using Google Gemini, generates quizzes, and rewrites content based on learning styles.", 
    github: "https://github.com/OrionGD/SMARTLMS16", 
    demo: "https://smartlms-orion.vercel.app" 
  },
  { 
    title: "VELTRIO", 
    category: "AI / ML", 
    tech: ["React", "TypeScript", "Gemini 2.5"], 
    description: "AI-Powered Real-time Translation & Conversation Platform. Leveraging Gemini models for seamless language processing and sentiment analysis.", 
    github: "https://github.com/OrionGD/VELTRIO", 
    demo: "https://veltrio-ai.netlify.app" 
  },
  { 
    title: "MTS Security", 
    category: "Systems", 
    tech: ["Java", "GPS API", "Encryption"], 
    description: "Mobile Tracking System (MTS) designed for device security, enabling real-time location tracking and remote sensitive data locking.", 
    github: "https://github.com/OrionGD/GD-s-Mobile-Tracking-System-", 
    demo: "#" 
  },
  { 
    title: "Hostel Mgt System", 
    category: "Systems", 
    tech: ["Python", "Tkinter", "MySQL"], 
    description: "A role-based Hostel Management System for attendance and outpass tracking, featuring a customized desktop GUI.", 
    github: "https://github.com/OrionGD/GD-S-HOSTEL-MANAGEMENT-SYSTEM", 
    demo: "#" 
  },
  { 
    title: "GD Text Analyzer", 
    category: "AI / ML", 
    tech: ["Python", "Regex", "NLP"], 
    description: "Processing pipeline for text cleaning, sentiment analysis, and keyword identification with modular design.", 
    github: "https://github.com/OrionGD/GD-s-TEXT-ANALYZER", 
    demo: "#" 
  },
  { 
    title: "ARgorithm", 
    category: "XR", 
    tech: ["Unity", "ARCore", "C#"], 
    description: "Augmented reality visualizer for data structures and algorithms, helping students grasp complex concepts in 3D space.", 
    github: "https://github.com/OrionGD/ARgorithm", 
    demo: "https://argorithm-demo.godfrey.dev" 
  },
  { 
    title: "Waiting List Mgt", 
    category: "Systems", 
    tech: ["C", "Linked Lists", "Queues"], 
    description: "Console-based system implemented in C to manage seat bookings efficiently using advanced data structures.", 
    github: "https://github.com/OrionGD/GD-s-WAITING-LIST-MANAGEMENT-SYSTEM", 
    demo: "#" 
  },
  { 
    title: "Weather Sphere Pro", 
    category: "Web", 
    tech: ["JavaScript", "REST APIs", "CSS"], 
    description: "Responsive Weather Web App providing hyper-local forecasts and dynamic atmospheric visualizations.", 
    github: "https://github.com/OrionGD/GD-S-Web-Weather-Application", 
    demo: "https://weather-sphere-prodigy.netlify.app" 
  },
  { 
    title: "GD Optimizer", 
    category: "Web", 
    tech: ["JavaScript", "Canvas", "HTML5"], 
    description: "Client-side image optimization tool to enhance web loading speeds by reducing file sizes without quality loss.", 
    github: "https://github.com/OrionGD/GDs-Image-Optimization", 
    demo: "#" 
  },
  { 
    title: "SecurLink Checker", 
    category: "Cybersecurity", 
    tech: ["JavaScript", "Regex", "Security"], 
    description: "Real-time password strength evaluator providing instant feedback on entropy and pattern vulnerabilities.", 
    github: "https://github.com/OrionGD/Password-Strength_Checker", 
    demo: "#" 
  },
  { 
    title: "Chrono-Stopwatch", 
    category: "Web", 
    tech: ["JavaScript", "DOM", "CSS"], 
    description: "High-precision web stopwatch with lap management and specialized UI for performance monitoring.", 
    github: "https://github.com/OrionGD/Chrono-Stopwatch", 
    demo: "#" 
  },
  { 
    title: "Tactical Tic-Tac-Toe", 
    category: "Web", 
    tech: ["Logic", "JavaScript", "Animation"], 
    description: "Strategic game implementation with multiple difficulty levels and a sleek glassmorphism interface.", 
    github: "https://github.com/OrionGD/TicTacToe-Pro", 
    demo: "#" 
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Patent: Android TV Using Remote IR Sensor", year: "2024", description: "Innovative control mechanism for smart TVs using infrared signal processing." },
  { title: "OASYS IT Hackathon – Best Performance", description: "Awarded for excellence in rapid prototyping and full-stack development." },
  { title: "National Science Day – 1st Prize", description: "Recognition for technical exhibition and innovative engineering solutions." }
];

export const GALLERY_IMAGES = [
  { src: "/assets/CLUB XR.jpg", alt: "XR Club Hub" },
  { src: "/assets/XR.jpg", alt: "Extended Reality Exhibition" },
  { src: "/assets/XR.jpeg", alt: "XR Symposium Poster" },
  { src: "/assets/DREAMGEN.jpg", alt: "DreamGen Innovation" },
  { src: "/assets/hackathon best .jpg", alt: "Hackathon Excellence Award" },
  { src: "/assets/HACKATHON.jpg", alt: "Intensive Development Session" },
  { src: "/assets/OASYS.jpg", alt: "OASYS IT Symposium" },
  { src: "/assets/ENTHUSIA.jpg", alt: "Enthusia Cultural Celebration" },
  { src: "/assets/xrsymposium.jpeg", alt: "XR Symposium Event" },
  { src: "/assets/IV.jpg", alt: "Industrial Visit Insights" },
  { src: "/assets/Marchpast.jpg", alt: "NSS Volunteer Marchpast" },
  { src: "/assets/YOGA DAY.jpg", alt: "Yoga Day Session" },
  { src: "/assets/STILL.jpg", alt: "Seminar Still" },
  { src: "/assets/XR(1).jpg", alt: "AR Workshop Training" },
  { src: "/assets/XR(2).jpg", alt: "XR Future Tech" },
  { src: "/assets/DREAMGEN(1).jpg", alt: "AI Project Demo" },
  { src: "/assets/HACKATHON(1).jpg", alt: "Team Collaboration" },
  { src: "/assets/OASYS(1).jpg", alt: "Honors Presentation" }
];
