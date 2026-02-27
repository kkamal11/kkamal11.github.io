import apiImg from '../assets/images/api.webp'
import HTML_CSS_JS from "../assets/images/HTML_CSS_JS.webp";
import excel from "../assets/images/excel.jpg";
import foundationCerti from "../assets/images/foundationCerti.jpg";
import javascriptBasic from "../assets/images/javascriptBasic.webp";
import linux from "../assets/images/linux.webp";
import mlt from "../assets/images/mlt.png";
import nptel from "../assets/images/nptel.webp";
import pythonHackerrank from "../assets/images/python-hackerrank.webp";
import pythonCoursera from "../assets/images/python.jpg";
import pythonMentor from "../assets/images/python_mentor.webp";
import sqlpng from "../assets/images/sqlpng.webp";
import dip_in_prom from "../assets/images/dp.png";
import dip_in_ds from "../assets/images/dds.png";
import fastapi from "../assets/blog/fastapi.webp";
import react from "../assets/blog/react.webp";
import javag from "../assets/blog/javag.webp";
import qty_self_2 from "../assets/projects/Home.png"
import qty_self_1 from "../assets/projects/qapp1.webp"
import MLP from "../assets/projects/ml_project.png"
import ipl from "../assets/projects/ipl.webp"

type ProjectType =
    | "Full Stack Web App"
    | "Backend API"
    | "Machine Learning"
    | "Data Analysis"
    | "Full Stack Web App & Backend API"
    | "HTTP Server";

type Project = {
    id: string | number,
    title: string,
    btm_text: string,
    ext_buttons?: {href:string, label:string, img:string}[],
    description: string;
    tags: string[];
    githubUrl: string;
    techUsed: string[],
    features: string[],
    imgPath?: string[],
    period: string,
    type: ProjectType,
    markdown: string
}

type Certificate = {
    id: number,
    title: string,
    org: string,
    verify_link: string,
    image: string
}

export type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  readTime: string;
  blog_link?:string
};

export const Projects: Project[] = [
    {
    id: "b3cae4b7-9101-4fac-bc4d-bb02108789ac",
    title: "Custom Python WSGI HTTP Server",
    btm_text: "Built a HTTP server from scratch with prefork workers, async handling, and monitoring using Python",
    description:
      "A custom HTTP server built from scratch in Python that can serve WSGI applications like Flask and Django. The project demonstrates low-level networking, process management, async non-blocking I/O, graceful shutdown and cli monitoring features.",
    githubUrl: "https://github.com/kkamal11/custom-python-http-server",
    techUsed: [
      "Python",
      "Sockets",
      "WSGI",
      "Flask",
      "Django",
      "Multiprocessing",
      "Async I/O",
      "Linux",
    ],
    features: [
      "Built raw TCP HTTP server using Python sockets",
      "WSGI compatibility to serve Flask and Django apps",
      "Prefork worker model similar to Gunicorn",
      "Graceful shutdown using Unix signals",
      "Async non-blocking worker using selectors",
      "Access logging and structured CLI output",
      "Process-safe architecture with worker lifecycle management",
    ],
    tags: ["Backend", "Python", "Server", "Infrastructure"],
    imgPath: [],
    period: "January 2026 - February 2026",
    type: "HTTP Server",
    markdown:"https://raw.githubusercontent.com/kkamal11/custom-python-http-server/refs/heads/main/README.md"
  },
  {
    id: "155ba70a-95ff-4609-a353-dd6c01598aff",
    title: "Bookly - FastAPI Beyond CRUD",
    btm_text: "Production-grade backend API with auth, email, logging, and testing",
    description:
      "A production-ready backend API showcasing clean architecture, async operations, authentication, background tasks, and automated emails.",
    githubUrl: "https://github.com/kkamal11/FastAPI-Bookly-Application",
    techUsed: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLModel",
      "JWT",
      "OAuth2",
      "Pytest",
      "Alembic",
      "Linux"
    ],
    features: [
      "JWT authentication and RBAC",
      "Email verification and password reset",
      "Async SQLModel database access",
      "Custom middleware and centralized error handling",
      "Application and per-user logging",
      "Automated testing with Pytest"
    ], 
    tags: ["Backend", "FastAPI", "REST Api"],
    imgPath: [apiImg],
    period: 'December 2025 - January 2026',
    type: "Backend API",
    markdown:"https://raw.githubusercontent.com/kkamal11/FastAPI-Bookly-Application/refs/heads/main/README.md"
  },
  {
    id: "8e4a6a5c-ad45-4264-9f8d-b933c5f1622c",
    title: "AI-Powered Academic Portal",
    btm_text: "Full-stack academic platform with integrated AI and analytics",
    description:
      "A scalable academic platform integrating learning management, analytics, AI-powered semantic search, plagiarism detection, and role-based access.",
    githubUrl: "https://github.com/kkamal11/soft-engg-project-ai-pow-academic-portal",
    techUsed: [
      "Vue.js 3",
      "JavaScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "JWT",
      "Google OAuth",
      "Redis",
      "Tailwind CSS",
      "Linux",
      "gunicorn"
    ],
    features: [
      "Course and enrollment management",
      "AI-powered semantic search on learning material",
      "Plagiarism detection on submissions",
      "Role-based dashboards",
      "JWT authentication with Google OAuth",
      "Assignment and grading workflows",
      "Health and monitoring endpoints"
    ],
    tags: ["AI", "Education", "Full Stack", "REST Api"],
    imgPath: [apiImg],
    period: 'January 2025 - April 2025',
    type: "Full Stack Web App & Backend API",
    markdown:"https://raw.githubusercontent.com/kkamal11/soft-engg-project-ai-pow-academic-portal/refs/heads/main/README.md"
  },

  {
    id: "f1c2d3e4-5678-9101-1121-314151617181",
    title: "Smart Contact Manager",
    btm_text: "Cloud-based contact management with OAuth authentication",
    description:
      "A Spring Boot web application for managing contacts securely with OAuth-based login and cloud image storage.",
    githubUrl: "https://github.com/kkamal11/Smart-Contact-Manager-Web-App",
    techUsed: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "OAuth 2.0",
      "Cloudinary",
      "Tailwind CSS"
    ],
    features: [
      "Google and GitHub OAuth login",
      "Cloud-based image storage",
      "Email authorization and verification",
      "Search and filter contacts",
      "Responsive elegant UI"
    ],
    tags: ["Java", "Spring Boot","Cloud"],
    imgPath: [],
    period: 'November 2024 - December 2024',
    type: "Full Stack Web App",
    markdown:"https://raw.githubusercontent.com/kkamal11/Smart-Contact-Manager-Web-App/refs/heads/main/README.md"
  },
  {
    id: "21f20008-04a5-4c3b-8c9d-12024a1b2c3d",
    title: "Recipe for Rating - Predict Food Ratings using ML",
    btm_text: "Machine learning system for predicting restaurant food ratings",
    ext_buttons: [
      {
        href: "https://nbviewer.org/github/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb",
        label: "Open in Nbviewer",
        img: "https://img.shields.io/badge/Open%20in-Nbviewer-blue",
      },
      {
        href: "https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb",
        label: "Open in Colab",
        img: "https://img.shields.io/badge/Open%20in-Google%20Colab-blue?logo=googlecolab",
      },
    ],
    description:
      "A machine learning project focused on predicting restaurant food ratings using structured data and multiple classification algorithms.",
    githubUrl: "https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML",
    techUsed: ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn", "XGBoost"],
    features: [
      "Built multiple ML classifiers including Logistic Regression, Random Forest, XGBoost, and Bagging",
      "Applied data preprocessing techniques such as label encoding and feature scaling",
      "Used PCA for dimensionality reduction and performance optimization",
      "Hyperparameter tuning with GridSearchCV",
      "Model evaluation using accuracy, F1-score, and confusion matrix",
      "Visualization of feature importance and model results"
    ],
    tags: ["Machine Learning", "Data Science", "Kaggle"],
    imgPath: [MLP],
    period: 'January 2024 - April 2024',
    type: "Machine Learning",
    markdown:"https://raw.githubusercontent.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/refs/heads/main/README.md"
  },

  {
    id: "3a4b5c6d-7890-1234-5678-90abcdef1234",
    title: "Uncovering IPL Insights - Data Analysis of 15 Years of Cricket",
    btm_text: "Exploratory data analysis and visualization on IPL datasets",
    description:
      "An exploratory data analysis project on IPL match data (2008–2022) aimed at uncovering patterns and insights related to teams, venues, toss decisions, and players.",
    githubUrl: "https://github.com/kkamal11/EDA_on_IPL",
    techUsed: ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
    features: [
      "Season-wise and team-wise performance analysis",
      "Stadium and venue distribution insights",
      "Toss decision impact on match outcomes",
      "Player of the match and umpire statistics",
      "Data-driven observations on match concentration by venue"
    ],
    tags: ["Data Analysis", "Visualization", "Bussiness Data Analytics"],
    imgPath: [ipl],
    period: 'August 2022 - September 2022',
    type: "Data Analysis",
    markdown:"https://raw.githubusercontent.com/kkamal11/EDA_on_IPL/refs/heads/main/README.md"
  },

  {
    id: "4d5e6f7a-8901-2345-6789-0abcdef12345",
    title: "Quantified Self App v2.0",
    btm_text: "Advanced self-tracking and analytics web platform",
    description:
      "An advanced self-tracking web application with complete frontend-backend separation, secure authentication, analytics, automation, and reporting.",
    githubUrl: "https://github.com/kkamal11/Quantified_Self_App_v2.0",
    techUsed: [
      "Vue.js",
      "Tailwind CSS",
      "Flask",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "SQLite",
      "SendGrid",
      "WeasyPrint"
    ],
    features: [
      "CRUD operations on trackers and logs",
      "Graph-based visualization of progress",
      "Monthly automated reports via email",
      "Daily reminders through webhooks",
      "Token-based authentication",
      "Downloadable PDF and CSV reports",
      "Caching for improved performance",
      "Responsive UI with dark mode"
    ],
    tags: ["Full Stack", "Productivity"],
    imgPath: [qty_self_2],
    period: 'September 2021 - December 2021',
    type: "Full Stack Web App",
    markdown:"https://raw.githubusercontent.com/kkamal11/Quantified_Self_App_v2.0/refs/heads/main/README.md"
  },
  {
    id: "5e6f7a8b-9012-3456-7890-abcdef123456",
    title: "Quantified Self App v1",
    btm_text: "Initial version of the self-tracking application",
    description:
      "A self-tracking web application allowing users to create trackers, log activities, and visualize progress over time.",
    githubUrl: "https://github.com/kkamal11/Quantified-Self-Application",
    techUsed: ["HTML", "CSS", "Python", "Flask", "SQLite", "SQLAlchemy","Jinja2"],
    features: [
      "Tracker and log CRUD operations",
      "Graph-based progress visualization",
      "Lightweight server-rendered UI"
    ],
    tags: ["Flask", "Beginner"],
    imgPath: [qty_self_1],
    period: 'May 2021 - August 2021',
    type: "Full Stack Web App",
    markdown:"https://raw.githubusercontent.com/kkamal11/Quantified-Self-Application/refs/heads/main/README.md"
  }
];

export const certificates: Certificate[] = [
  {
    id: 3,
    title: "Diploma in Programming",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1eQvQq8QfzrkSaI3wFhZmqe82tezvjkwG/view?usp=sharing",
    image: dip_in_prom
    },
    {
    id: 4,
    title: "Diploma in Data Science",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1xi23lVEGiLzE4NvVxapalNejDFYCvv0K/view?usp=sharing",
    image: dip_in_ds
  },
  {
    id: 5,
    title: "BSc Foundational Level",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1w356baxF4SRiI19rEp2nrBZQcbvSqIi_/view?usp=sharing",
    image: foundationCerti
  },
  {
    id: 6,
    title: "Python Academic Mentor",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1Aw5mT9MAodEQlPI46dwiZm5-2VRXOx9C/view?usp=sharing",
    image: pythonMentor,
  },
  {
    id: 7,
    title: "JavaScript",
    org: "HackerRank",
    verify_link: "https://www.hackerrank.com/certificates/91fe50949659",
    image: javascriptBasic
  },
  {
    id: 8,
    title: "Machine Learning",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1bETv_1qU0fbrzOBLphXrWhC3kQ0wxs95/view?usp=share_link",
    image: mlt
  },
  {
    id: 9,
    title: "Python",
    org: "HackerRank",
    verify_link: "https://www.hackerrank.com/certificates/91fe50949659",
    image: pythonHackerrank
  },
  {
    id: 10,
    title: "SQL",
    org: "HackerRank",
    verify_link: "https://www.hackerrank.com/certificates/745729a3c6ab",
    image: sqlpng
  },
  {
    id: 11,
    title: "Microsoft Excel",
    org: "Udemy",
    verify_link: "https://www.udemy.com/certificate/UC-0f061dc1-69f0-418b-adba-d97c1b336df2/",
    image: excel
  },
  {
    id: 12,
    title: "Optimization: Theory and Algorithms",
    org: "NPTEL",
    verify_link: "https://drive.google.com/file/d/1ZyW5lBjAwRQNz6h6VFCeuvo2FKzU_IG3/view?usp=sharing",
    image: nptel
  },
  {
    id: 13,
    title: "Python",
    org: "Coursera",
    verify_link: "https://www.coursera.org/account/accomplishments/certificate/GRTRUA3CTGPF",
    image: pythonCoursera
  },
  {
    id: 14,
    title: "HTML, CSS and JavaScript",
    org: "Coursera",
    verify_link: "https://coursera.org/share/3701054983df9cf78ea37bcc1a1a051c",
    image: HTML_CSS_JS
  },
  {
    id: 15,
    title: "Linux Commands & Shell Scripting",
    org: "Coursera",
    verify_link: "https://coursera.org/share/a1f0fee03f7eb40117971151c4d84114",
    image: linux
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with FastAPI - Build Your First API",
    description: "A step-by-step guide to setting up FastAPI, creating endpoints, and running your first Python backend service.",
    image: fastapi,
    category: ["BACKEND", "FastAPI","Python"],
    readTime: "20 min read",
    blog_link: ""
  },
  {
  id: 2,
  title: "React for Beginners - Your First Frontend App",
  description: "A step-by-step guide to setting up React, understanding components, and rendering your first interactive page.",
  image: react,
  category: ["FRONTEND", "REACT","JavaScript"],
  readTime: "15 min read",
  blog_link: ""
  },
  {
    id: 3,
    title: "Java Generics Explained — From Basics to Practical Use",
    description: "A practical guide to understanding Java Generics and applying them to real-world programming problems/ use-cases.",
    image: javag,
    category: ["JAVA"],
    readTime: "17 min read",
    blog_link: ""
  },

];

// icon from here https://www.svgrepo.com/vectors/bash/
export const skills = [
  { name: "Python", icon: "/icons/python.svg", category: "Backend" },
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "Backend" },
  { name: "Flask", icon: "/icons/flask.svg", category: "Backend" },
  { name: "Django", icon: "/icons/dj.svg", category: "Backend" },
  { name: "PostgreSQL", icon: "/icons/pgsql.svg", category: "Database" },
  { name: "Redis", icon: "/icons/redis.svg", category: "Database" },
  { name: "Celery", icon: "/icons/celery.svg", category: "Backend" },
  { name: "Java", icon: "/icons/java.svg", category: "Backend" },
  { name: "Spring Boot", icon: "/icons/springboot.svg", category: "Backend" },
  { name: "Hibernate", icon: "/icons/hibernate.svg", category: "Backend" },
  { name: "Oracle Database", icon: "/icons/oradb.svg", category: "Database" },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database" },
  { name: "Kafka", icon: "/icons/kafka.svg", category: "Backend" },
  { name: "HTML", icon: "/icons/html5.svg", category: "Frontend" },
  { name: "CSS", icon: "/icons/css.svg", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/icons/tcss.svg", category: "Frontend" },
  { name: "JavaScript", icon: "/icons/js.svg", category: "Frontend" },
  { name: "TypeScript", icon: "/icons/tjs.svg", category: "Frontend" },
  { name: "React JS", icon: "/icons/react.svg", category: "Frontend" },
  { name: "Vue JS", icon: "/icons/vue.svg", category: "Frontend" },
  { name: "Node JS", icon: "/icons/node.svg", category: "Backend" },
  { name: "JSON", icon: "/icons/json.svg", category: "Backend" },
  {name: "MongoDB", icon:"/icons/mongodb.svg", category: "Database"},
  { name: "C", icon: "/icons/C.svg", category: "Backend" },
  { name: "Microservices", icon: "/icons/mcs.svg", category: "Backend" },
  { name: "Git", icon: "/icons/git.svg", category: "Tools" },
  { name: "Linux", icon: "/icons/linux.svg", category: "Tools" },
  { name: "Bash", icon: "/icons/bash.svg", category: "Tools" },
  { name: "Numpy", icon: "/icons/numpy.svg", category: "AI/ML" },
  { name: "Pandas", icon: "/icons/pandas.svg", category: "AI/ML" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "AI/ML" },
  { name: "sklearn", icon: "/icons/sklearn.svg", category: "AI/ML" },
  { name: "Machine Learning", icon: "/icons/ml.svg", category: "AI/ML" },
  { name: "Artificial Intelligence", icon: "/icons/ai.svg", category: "AI/ML" },
  { name: "Streamlit", icon: "/icons/streamlit.svg", category: "AI/ML" },
  { name: "Software Engineering", icon: "/icons/se.svg", category: "Tools" },
  { name: "Software Testing", icon: "/icons/st.svg", category: "Tools" },
  { name: "Data Structure and Algorithms", icon: "/icons/dsa.svg", category: "Tools" },
  { name: "Copilot", icon: "/icons/copilot.svg", category: "Tools" },
  { name: "Docker", icon: "/icons/docker.svg", category: "Tools" },
  {name:"AWS", icon:"/icons/aws.svg", category: "Cloud" },

];