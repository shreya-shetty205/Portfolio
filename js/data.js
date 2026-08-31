/**
 * ==========================================================================
 * SHREYA SHETTY - PORTFOLIO CONFIGURATION & DATA STORE
 * Source of Truth: SHREYA_SHETTY_Resume(5).pdf
 * ==========================================================================
 */

// Centralized Social & Resume Configuration
const LINKEDIN_URL = "https://www.linkedin.com/in/shreya-shetty24/";
const GITHUB_URL = "https://github.com/shreya-shetty205/";
const RESUME_FILE_PATH = "assets/SHREYA_SHETTY_Resume(5).pdf";
const RESUME_FILENAME = "SHREYA_SHETTY_Resume(5).pdf";

// Centralized Project Screenshot / Image References
const microdegreeArenaImage = "assets/microdegree_arena.jpg";
const dietaryHealthImage = "assets/dietary_health.jpg";
const networkAnomalyImage = "assets/network_anomaly.jpg";

const portfolioData = {
  config: {
    linkedinUrl: LINKEDIN_URL,
    githubUrl: GITHUB_URL,
    resumePdf: RESUME_FILE_PATH,
    resumeFilename: RESUME_FILENAME,
    projectImages: {
      microdegreeArena: microdegreeArenaImage,
      dietaryHealth: dietaryHealthImage,
      networkAnomaly: networkAnomalyImage
    }
  },

  profile: {
    name: "Shreya Shetty",
    titles: [
      "Software Engineer",
      "AI Engineer",
      "QA & Testing Specialist",
      "Full-Stack Developer"
    ],
    primaryTitle: "Software Engineer | AI Engineer | QA & Testing | Full-Stack Developer",
    heroIntro: "Enthusiastic and dedicated Computer Science graduate with hands-on experience in software development, testing, and application workflows, web technologies, databases, APIs, and machine learning.",
    aboutIntro: "Enthusiastic and dedicated individual with hands-on experience in software development, testing, and application workflows. Strong in analytical thinking, problem-solving, and teamwork, with knowledge of web technologies, databases, APIs, and software development practices. Eager to learn new technologies, contribute to real-world projects, and grow in a dynamic technology environment.",
    location: "Mangalore, Karnataka",
    email: "shreyashetty205@gmail.com",
    phone: "+91 7012825611",
    cgpa: "9.0"
  },

  // Skills Matrix
  skills: {
    programming: [
      { name: "Python" },
      { name: "C" }
    ],
    frontend: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" }
    ],
    backend: [
      { name: "Node.js" },
      { name: "Express.js" }
    ],
    databases: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" }
    ],
    testingAndApis: [
      { name: "Postman" },
      { name: "API Testing" },
      { name: "REST APIs" },
      { name: "API Integration" },
      { name: "Debugging" }
    ],
    aiMl: [
      { name: "Machine Learning" },
      { name: "KNN" },
      { name: "RNN" },
      { name: "LSTM" }
    ],
    tools: [
      { name: "GitHub" },
      { name: "Visual Studio Code" },
      { name: "MS Excel" },
      { name: "Canva" },
      { name: "Vercel" },
      { name: "Render" }
    ],
    cloudDevOps: [
      { name: "Basic Cloud Concepts" },
      { name: "Basic CI/CD" }
    ],
    operatingSystems: [
      { name: "Windows" },
      { name: "Linux" }
    ],
    softSkills: [
      "Communication Skills",
      "Leadership",
      "Team Collaboration",
      "Time Management",
      "Problem Solving",
      "Analytical Thinking"
    ]
  },

  // 3 Equal-Sized, Consistent Projects
  projects: [
    {
      id: "microdegree-arena",
      title: "Microdegree Arena – Learning, Assessment & Placement Management Platform",
      category: "Platform & Workflows",
      image: microdegreeArenaImage,
      tags: ["React.js", "Node.js", "Express.js", "Supabase", "REST APIs", "Postman"],
      shortDescription: "Learning, assessment, certification, and placement management platform designed to manage student workflows through a centralized system.",
      highlights: [
        "Assessment workflows",
        "Practical task workflows",
        "Student synchronization and track mapping",
        "Placement and interview workflows",
        "Candidate evaluation",
        "Certification workflows",
        "End-to-end testing"
      ],
      workflow: [
        "Student",
        "Assessment",
        "Practical Task",
        "Evaluation",
        "Interview",
        "Certification"
      ],
      github: GITHUB_URL
    },
    {
      id: "dietary-health-tracking",
      title: "Personalised Dietary Health Tracking System",
      category: "Full-Stack Application",
      image: dietaryHealthImage,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Postman"],
      shortDescription: "Full-stack application for dietary tracking, allergy detection, and personalized health insights.",
      highlights: [
        "Full-stack development",
        "REST API development",
        "JWT authentication",
        "Meal tracking",
        "Allergy detection",
        "API testing and debugging"
      ],
      github: GITHUB_URL
    },
    {
      id: "network-anomaly-detection",
      title: "Network Anomaly Detection using Machine Learning",
      category: "AI & Machine Learning",
      image: networkAnomalyImage,
      award: "Best Paper Award – ICRICS 2026",
      tags: ["Python", "KNN", "RNN", "LSTM", "Scapy"],
      shortDescription: "Machine learning-based system for detecting abnormal network activity using real-time packet capture.",
      highlights: [
        "Real-time anomaly detection",
        "Network packet capture using Scapy",
        "KNN, RNN and LSTM models",
        "Model performance evaluation"
      ],
      github: GITHUB_URL
    }
  ],

  // Work Experience
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "MicroDegree Education Pvt Ltd",
      association: "Mangalore",
      period: "Internship",
      summary: "Focused on software development, application workflows, and testing for centralized educational platforms.",
      highlights: [
        "Contributed to software development and reusable assessment and task workflows.",
        "Collaborated on student synchronization, track mapping, and candidate evaluation.",
        "Executed end-to-end testing and validation across core system features."
      ]
    },
    {
      role: "Full Stack Web Development (MERN) Intern",
      company: "SuprMentr Technologies",
      association: "In association with NASSCOM Future Skills",
      period: "Duration: 4 months",
      summary: "Four-month full-stack web development internship building web applications with the MERN stack.",
      highlights: [
        "Developed web application components using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented RESTful APIs, user authentication, and database schemas.",
        "Collaborated in agile development cycles, code reviews, and API debugging."
      ]
    }
  ],

  // Education
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Srinivas Institute of Technology, Mangalore",
      score: "CGPA: 9.0",
      period: "2022 – 2026",
      details: "Comprehensive coursework in Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Machine Learning."
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Parijnan PU College, Mangalore",
      score: "95%",
      period: "2020 – 2022",
      details: "Strong academic foundations in Mathematics, Physics, Chemistry, and Computer Science."
    }
  ],

  // Certifications
  certifications: [
    {
      title: "No SQL-MongoDB",
      issuer: "IBMCE",
      badge: "IBMCE Certified"
    },
    {
      title: "IT Specialist – Cloud Computing",
      issuer: "Certiport",
      badge: "Certiport Certified"
    },
    {
      title: "Database Using SQL Certification",
      issuer: "Ethnotech Academy",
      badge: "Ethnotech Certified"
    }
  ],

  // Achievements & Honors
  achievements: [
    {
      title: "Best Paper Award – ICRICS 2026",
      description: "Awarded for the research paper titled 'Network Anomaly Detection Using Machine Learning'.",
      type: "Award"
    },
    {
      title: "Published Research Paper: 'Recipe Finder'",
      description: "Published in Journal of Emerging Technologies and Innovative Research (JETIR), Vol. 12, Issue 7.",
      type: "Publication"
    },
    {
      title: "Hackathon Participation",
      description: "Actively participated in a hackathon, collaborating with peers to develop innovative problem-solving solutions.",
      type: "Hackathon"
    }
  ]
};
