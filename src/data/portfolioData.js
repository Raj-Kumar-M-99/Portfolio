export const personalInfo = {
  name: "Raj Kumar M",
  role: "Software Developer",
  tagline: "Building modern web applications with passion and precision",
  bio: "I am a passionate Software Developer with expertise in both frontend and backend technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.",
  email: "rajkumar.mc1999@gmail.com",
  phone: "+91 91106068015",
  linkedin: "https://www.linkedin.com/in/raj-kumar-m/",
  github: "https://github.com/raj-kumar-m", // Add your GitHub if available
};

export const skills = {
  "Frontend Development": [
    { name: "React Js", icon: "SiReact" },
    { name: "React Redux", icon: "SiRedux" },
    { name: "Next Js", icon: "SiNextdotjs" },
    { name: "Angular", icon: "SiAngular" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Bootstrap", icon: "SiBootstrap" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "jQuery", icon: "SiJquery" },
  ],
  "Backend Development": [
    { name: "ASP.NET Web API", icon: "SiDotnet" },
    { name: "ASP.NET MVC", icon: "SiDotnet" },
    { name: "Node Js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "C#", icon: "SiCsharp" },
    { name: "Python", icon: "SiPython" },
    { name: "Flask", icon: "SiFlask" },
    { name: "Django", icon: "SiDjango" },
  ],
  "Cloud": [
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "EC2", icon: "SiAmazonec2" },
    { name: "S3", icon: "SiAmazons3" },
  ],
  "Databases": [
    { name: "SQL Server", icon: "SiMicrosoftsqlserver" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
  ],
  "Tools": [
    { name: "GitHub", icon: "SiGithub" },
    { name: "Visual Studio Code", icon: "SiVisualstudiocode" },
    { name: "Visual Studio", icon: "SiVisualstudio" },
    { name: "Git", icon: "SiGit" },
    { name: "SSMS", icon: "SiMicrosoftsqlserver" },
    { name: "Bitbucket", icon: "SiBitbucket" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Docker", icon: "SiDocker" },
  ],
  "Other Skills": [
    { name: "Data Structures", icon: "SiDataStructures" },
    { name: "Algorithms", icon: "SiAlgorithm" },
    { name: "Entity Framework Core", icon: "SiDotnet" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    githubLink: "https://github.com/raj-kumar-m/ecommerce-app",
    demoLink: "https://ecommerce-demo.vercel.app",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    techStack: ["React", "TypeScript", "ASP.NET Core", "SQL Server", "SignalR"],
    githubLink: "https://github.com/raj-kumar-m/task-manager",
    demoLink: "https://taskmanager-demo.azurewebsites.net",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current weather conditions and forecasts with interactive charts and maps.",
    techStack: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    githubLink: "https://github.com/raj-kumar-m/weather-dashboard",
    demoLink: "https://weather-dashboard-demo.netlify.app",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Blog Management System",
    description: "A content management system for blogs with rich text editor, category management, and SEO optimization features.",
    techStack: ["Next.js", "Python", "Django", "PostgreSQL", "AWS S3"],
    githubLink: "https://github.com/raj-kumar-m/blog-cms",
    demoLink: "https://blog-cms-demo.vercel.app",
    image: "/api/placeholder/400/250"
  }
];

export const softSkills = [
  "Team Player",
  "Results-Driven",
  "Problem Solver",
  "Communication",
  "Leadership",
  "Adaptability"
];

export const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Software Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on a major e-commerce platform",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 3 junior developers, helping them advance their careers"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
  },
  {
    id: 2,
    company: "Digital Innovations Ltd.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Bangalore, India",
    description: "Developed and maintained multiple web applications using modern JavaScript frameworks and backend technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 3 major web applications serving 10,000+ users",
      "Reduced bug reports by 50% through improved testing practices",
      "Implemented responsive design improving mobile user experience",
      "Contributed to open-source projects with 500+ GitHub stars"
    ],
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure", "Git", "jQuery"]
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "Chennai, India",
    description: "Started my professional journey as a junior developer, learning modern web development practices and contributing to various projects across the full stack.",
    achievements: [
      "Completed 15+ projects within deadlines",
      "Learned 8+ new technologies in first year",
      "Contributed to team's code review process",
      "Maintained 95% code coverage in unit tests"
    ],
    technologies: ["JavaScript", "Python", "Django", "MySQL", "Bootstrap", "Git"]
  }
];

export const resumeInfo = {
  downloadUrl: "/resume/Raj_Kumar_M_Resume.pdf", // Place your resume file in public/resume/
  lastUpdated: "December 2024"
};