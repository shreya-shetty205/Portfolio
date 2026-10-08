/**
 * ==========================================================================
 * SHREYA SHETTY - PORTFOLIO CONFIGURATION & DATA STORE
 * Source of Truth: SHREYA SHETTY Resume (Latest)
 * ==========================================================================
 */

// Centralized Social & Resume Configuration
const LINKEDIN_URL = "https://www.linkedin.com/in/shreya-shetty24/";
const GITHUB_URL = "https://github.com/shreya-shetty205/";
const RESUME_FILE_PATH = "assets/Shreya_Shetty_Resume.pdf";
const RESUME_FILENAME = "Shreya_Shetty_Resume.pdf";

// Centralized Project Screenshot / Image References
const microdegreeArenaImage = "assets/microdegree_arena_dashboard.png";
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
      "Software Developer",
      "AI Engineer",
      "Full-Stack Developer",
      "QA & API Testing"
    ],
    primaryTitle: "Software Developer & AI Engineer",
    summary: "Software Engineer with 8 months of hands-on experience in web application development, testing, and API integration. Skilled in Python, JavaScript, React.js, Node.js, MySQL, MongoDB, Supabase, REST APIs, Postman, and AWS. Experienced in developing application workflows, debugging, API testing, and collaborating on production projects.",
    heroIntro: "Software Engineer with 8 months of hands-on experience in web application development, testing, and API integration across Python, JavaScript, React.js, Node.js, MySQL, MongoDB, Supabase, REST APIs, Postman, and AWS.",
    aboutIntro: "Software Engineer with 8 months of hands-on experience in web application development, testing, and API integration. Skilled in Python, JavaScript, React.js, Node.js, MySQL, MongoDB, Supabase, REST APIs, Postman, and AWS. Experienced in developing application workflows, debugging, API testing, and collaborating on production projects.",
    location: "Bengaluru, Karnataka",
    email: "shreyashetty205@gmail.com",
    phone: "+91 7012825611",
    cgpa: "9.0"
  },

  // Skills Matrix directly aligned with Resume
  skills: {
    programming: [
      { name: "Python" },
      { name: "C" },
      { name: "JavaScript" }
    ],
    webDevelopment: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" }
    ],
    databaseManagement: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" }
    ],
    testingAndApis: [
      { name: "RESTful APIs" },
      { name: "API Development" },
      { name: "API Integration" },
      { name: "Postman" }
    ],
    cloudDevOps: [
      { name: "AWS (EC2, S3)" },
      { name: "Basic Cloud Concepts" },
      { name: "Basic CI/CD" }
    ],
    tools: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Visual Studio Code" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Claude Code" },
      { name: "Cursor" }
    ],
    operatingSystems: [
      { name: "Windows" },
      { name: "Linux" }
    ]
  },

  // 3 Equal-Sized, Consistent Projects from Resume
  projects: [
    {
      id: "microdegree-arena",
      title: "Microdegree Arena – Learning, Assessment & Placement Management Platform",
      category: "Platform & Workflows",
      image: microdegreeArenaImage,
      tags: ["React.js", "Node.js", "Express.js", "Supabase", "REST APIs", "Postman"],
      shortDescription: "Learning, assessment, certification, and placement management platform designed to manage student workflows through a centralized system.",
      highlights: [
        "Developed features for assessments, tasks, placements, interviews, and certifications.",
        "Developed and validated certification workflows including MCQ assessments, retakes, task evaluation, and admin approval.",
        "Implemented automated certificate generation with unique IDs and secure storage.",
        "Tested end-to-end workflows and performed functional and API testing."
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
        "Developed a full-stack health tracking application using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented REST APIs, JWT authentication, meal tracking, allergy detection, and personalized health insights.",
        "Tested APIs using Postman and worked on debugging, API integration, and responsive UI."
      ],
      github: GITHUB_URL
    },
    {
      id: "network-anomaly-detection",
      title: "Network Anomaly Detection using ML",
      category: "AI & Machine Learning",
      image: networkAnomalyImage,
      award: "Best Paper Award – ICRICS 2026",
      tags: ["Python", "KNN", "RNN", "LSTM", "Scapy"],
      shortDescription: "Machine learning-based system for detecting abnormal network activity using real-time packet capture.",
      highlights: [
        "Developed a real-time anomaly detection system using KNN, RNN, and LSTM.",
        "Implemented live packet capture using Scapy for network attack detection.",
        "Evaluated models using accuracy, precision, recall, and F1-score."
      ],
      github: GITHUB_URL
    }
  ],

  // Work Experience from Resume
  experiences: [
    {
      role: "Software Engineer",
      company: "MicroDegree Education Pvt Ltd",
      association: "Mangalore",
      period: "Feb 2026 – Oct 2026",
      duration: "8 months",
      summary: "Developed and implemented features for MicroDegree Arena, improving certification and placement workflows.",
      highlights: [
        "Developed and implemented features for MicroDegree Arena, improving certification and placement workflows.",
        "Developed the Certification Overflow feature and enhanced the Placement Drive module.",
        "Contributed to E-Learning platform improvements, including course content organization and learner-focused features."
      ]
    },
    {
      role: "Full Stack Web Development (MERN) Intern",
      company: "SuprMentr Technologies",
      association: "In association with NASSCOM Future Skills",
      period: "Feb 2026 – May 2026",
      duration: "4 months",
      summary: "Completed a 4-month internship with hands-on experience in frontend, backend, APIs, databases, testing, and debugging.",
      highlights: [
        "Completed a 4-month internship with hands-on experience in frontend, backend, APIs, databases, testing, and debugging."
      ]
    }
  ],

  // Education from Resume
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Srinivas Institute of Technology, Mangalore",
      score: "9.0 CGPA",
      period: "2022 – 2026",
      details: "Comprehensive academic background in Computer Science and Engineering with strong focus on Software Engineering, Databases, Web Technologies, and Machine Learning."
    },
    {
      degree: "Pre-University",
      institution: "Parijnan PU College, Mangalore",
      score: "95%",
      period: "2020 – 2022",
      details: "Strong academic foundations in Mathematics, Physics, Chemistry, and Computer Science."
    }
  ],

  // Certifications from Resume
  certifications: [
    {
      title: "Python Certification",
      issuer: "MicroDegree Education Pvt. Ltd.",
      badge: "MicroDegree Certified"
    },
    {
      title: "MySQL Certification",
      issuer: "MicroDegree Education Pvt. Ltd.",
      badge: "MicroDegree Certified"
    },
    {
      title: "IT Specialist - Cloud Computing",
      issuer: "Certiport",
      badge: "Certiport Certified"
    },
    {
      title: "NoSQL – MongoDB",
      issuer: "IBMCE",
      badge: "IBMCE Certified"
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
