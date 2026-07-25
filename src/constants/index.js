const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
];

const words = [
  { text: "Web Apps", imgPath: "/images/code.svg" },
  { text: "Mobile Apps", imgPath: "/images/devices.png" },
  { text: "APIs", imgPath: "/images/concepts.svg" },
  { text: "Systems", imgPath: "/images/ideas.svg" },
  { text: "Web Apps", imgPath: "/images/code.svg" },
  { text: "Mobile Apps", imgPath: "/images/devices.png" },
  { text: "APIs", imgPath: "/images/concepts.svg" },
  { text: "Systems", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 7, suffix: "", label: "Featured Systems" },
  { value: 2, suffix: "", label: "Professional Roles" },
  { value: 10, suffix: "+", label: "Core Technologies" },
  { value: 6, suffix: "", label: "Data & Storage Technologies" },
];

const abilities = [
  {
    imgPath: "/images/code.svg",
    title: "Full-Stack Delivery",
    desc: "Builds complete web applications from responsive interfaces and APIs to databases, authentication, and deployment.",
  },
  {
    imgPath: "/images/devices.png",
    title: "Web & Mobile Systems",
    desc: "Develops React, Next.js, Expo, and React Native solutions, including QR-based attendance and utility applications.",
  },
  {
    imgPath: "/images/time.png",
    title: "Deployment & Reliability",
    desc: "Hosts and maintains applications using Coolify, Hostinger VPS, DigitalOcean, AWS S3, Appwrite, Redis, and production databases.",
  },
];

const techStackItems = [
  { name: "React.js", iconPath: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", iconPath: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "React Native", iconPath: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Expo", iconPath: "https://cdn.simpleicons.org/expo/FFFFFF" },
  { name: "Go", iconPath: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Express.js", iconPath: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Node.js", iconPath: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Laravel", iconPath: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Appwrite", iconPath: "https://cdn.simpleicons.org/appwrite/F02E65" },
  { name: "PostgreSQL", iconPath: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MySQL", iconPath: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", iconPath: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redis", iconPath: "https://cdn.simpleicons.org/redis/FF4438" },
  { name: "AWS S3", iconPath: "https://cdn.simpleicons.org/amazons3/569A31" },
  {
    name: "WatermelonDB",
    iconPath: "/images/tech/watermelondb.png",
  },
  { name: "Coolify", iconPath: "https://cdn.simpleicons.org/coolify/6B16ED" },
  { name: "Git & GitHub", iconPath: "https://cdn.simpleicons.org/github/FFFFFF" },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive interfaces focused on usability, maintainability, and performance.",
    items: ["React.js", "Next.js", "JavaScript", "Responsive UI", "UX Implementation"],
  },
  {
    title: "Backend",
    description: "APIs, business logic, authentication, integrations, and server-side workflows.",
    items: ["Go", "Express.js", "Node.js", "Next.js", "Laravel", "Appwrite"],
  },
  {
    title: "Data",
    description: "Relational, document, cache, object, and offline-first storage for production systems.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS S3", "WatermelonDB"],
  },
  {
    title: "Mobile & DevOps",
    description: "Cross-platform apps, source control, VPS deployment, and application hosting.",
    items: ["React Native", "Expo", "Git", "GitHub", "Coolify", "Hostinger VPS", "DigitalOcean"],
  },
];

const expCards = [
  {
    imgPath: "/images/ssg-grad.jpeg",
    logoPath: "/images/logo.png",
    title: "SSG Programmer",
    organization: "Supreme Student Government — JRMSU-TC",
    date: "2024 – 2026",
    responsibilities: [
      "Developed a fines management system for student government operations.",
      "Built a QR code-based attendance scanner using Expo, React Native, and WatermelonDB.",
      "Created a Next.js QR code generator to support SSG events and attendance workflows.",
      "Developed the Penalyze full-stack web application with React.js, Express.js, Node.js, and PostgreSQL.",
      "Built Attendance Repository, a production attendance system using React, Go, PostgreSQL, and Redis for responsive records and fast data access.",
    ],
  },
  {
    imgPath: "/images/bsis-grad.jpeg",
    logoPath: "/images/corebridge-solutions.webp",
    title: "Junior Front End Developer",
    organization: "CoreBridge Solutions Corporation — Remote",
    date: "January 2025 – June 2025",
    responsibilities: [
      "Developed, tested, and implemented front-end web applications with a focus on user experience and maintainability.",
      "Collaborated with UX/UI designers and back-end engineers to turn design concepts into functional solutions.",
      "Optimized pages for speed, scalability, and consistent behavior across devices and browsers.",
      "Participated in code reviews, documentation, and remote workflows using Hubstaff for accountability.",
    ],
  },
];

const projects = [
  {
    title: "PAC Online Payment",
    short: "PAC",
    category: "Payments",
    imagePath: "/images/pac-online-payment.png",
    description: "An online payment platform built with Next.js and Appwrite, integrated with PayMongo for payment processing.",
    stack: ["Next.js", "Appwrite", "PayMongo"],
    liveUrl: "https://pac-online-payment.vercel.app/",
    sourceLinks: [
      { label: "GitHub", url: "https://github.com/LemuelVelez/pac-online-payment" },
    ],
  },
  {
    title: "SurveyStat",
    short: "SS",
    category: "Analytics",
    imagePath: "/images/surveystat.png",
    description: "A survey management and statistical reporting platform with a React frontend and Express/PostgreSQL backend.",
    stack: ["React.js", "Express.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://surveystat.jrmsu-tc.online/",
    sourceLinks: [
      { label: "Frontend", url: "https://github.com/LemuelVelez/surveystat-frontend" },
      { label: "Backend", url: "https://github.com/LemuelVelez/surveystat-backend" },
    ],
  },
  {
    title: "Attendance Repository",
    short: "AR",
    category: "Attendance",
    imagePath: "/images/attendance-repository.png",
    description: "A production attendance repository using React, Go, PostgreSQL, and Redis for responsive records and fast data access.",
    stack: ["React.js", "Go", "PostgreSQL", "Redis"],
    liveUrl: "https://attendance-repo.jrmsu-tc.cloud/",
    sourceLinks: [
      { label: "GitHub", url: "https://github.com/LemuelVelez/AttendanceRepository" },
    ],
  },
  {
    title: "BookHive",
    short: "BH",
    category: "Library",
    imagePath: "/images/bookhive.png",
    description: "A full-stack library platform with a React interface, an Express/Node.js API, PostgreSQL, and AWS S3 object storage.",
    stack: ["React.js", "Express.js", "Node.js", "PostgreSQL", "AWS S3"],
    liveUrl: "https://bookhive.jrmsu-tc.online/",
    sourceLinks: [
      { label: "Frontend", url: "https://github.com/LemuelVelez/book-hive" },
      { label: "Backend", url: "https://github.com/LemuelVelez/book-hive-server" },
    ],
  },
  {
    title: "Penalyze",
    short: "PZ",
    category: "Fines Management",
    imagePath: "/images/penalyze.png",
    description: "A fines management web application for student government workflows, reporting, and account tracking.",
    stack: ["React.js", "Express.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://penalyze.jrmsu-tc.online/",
    sourceLinks: [
      { label: "Frontend", url: "https://github.com/LemuelVelez/penalyze-frontend" },
      { label: "Backend", url: "https://github.com/LemuelVelez/penalyze-backend" },
    ],
  },
  {
    title: "SSG QR Code Generator",
    short: "QR",
    category: "QR Utility",
    imagePath: "/images/ssg-qr-code-generator.png",
    description: "A Next.js QR code generator created for Supreme Student Government attendance and event workflows.",
    stack: ["Next.js", "QR Codes"],
    liveUrl: "https://ssg-qrcode-generator.vercel.app/",
    sourceLinks: [
      { label: "GitHub", url: "https://github.com/LemuelVelez/ssg-qrcode-generator" },
    ],
  },
  {
    title: "SSG QR Code Scanner",
    short: "SC",
    category: "Mobile",
    imagePath: "/images/ssg-qr-code-scanner.jpg",
    mobilePreview: true,
    description: "An offline-capable QR attendance scanner built with Expo, React Native, and WatermelonDB.",
    stack: ["Expo", "React Native", "WatermelonDB"],
    liveUrl: null,
    sourceLinks: [
      { label: "GitHub", url: "https://github.com/LemuelVelez/ssg-qrcode-scanner" },
    ],
  },
];

const educationCards = [
  {
    title: "Bachelor of Science in Information Systems",
    organization: "Jose Rizal Memorial State University",
    date: "2022 – 2026",
    description: "Completed a BS in Information Systems while building and deploying web and mobile systems for academic and student-government use.",
    imgPath: "/images/bsis-grad.jpeg",
  },
  {
    title: "SSG Programmer",
    organization: "Supreme Student Government — JRMSU-TC",
    date: "2024 – 2026",
    description: "Applied software development skills to real campus workflows through fines management, QR generation, and attendance scanning systems.",
    imgPath: "/images/ssg-grad.jpeg",
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/LemuelVelez" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/lemuel-velez-a38a7a238" },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=velezlem12%40gmail.com" },
];

export {
  abilities,
  counterItems,
  educationCards,
  expCards,
  navLinks,
  projects,
  skillGroups,
  socialLinks,
  techStackItems,
  words,
};
