import apiImg from '../assets/images/api.png'
import HTML_CSS_JS from "../assets/images/HTML_CSS_JS.png";
import excel from "../assets/images/excel.jpg";
import foundationCerti from "../assets/images/foundationCerti.jpg";
import javascriptBasic from "../assets/images/javascriptBasic.png";
import linux from "../assets/images/linux.png";
import mlt from "../assets/images/mlt.png";
import nptel from "../assets/images/nptel.jpg";
import pythonHackerrank from "../assets/images/python-hackerrank.png";
import pythonCoursera from "../assets/images/python.jpg";
import pythonMentor from "../assets/images/python_mentor.png";
import sqlpng from "../assets/images/sqlpng.png";

 
type ProjectType =
    | "Full Stack Web App"
    | "Backend API"
    | "Machine Learning"
    | "Data Analysis"
    | "Full Stack Web App & Backend API";

type Project = {
    id:number,
    title: string,
    btm_text: string,
    has_ext_button?: boolean,
    ext_button_html?: string,
    description: string;
    tags: string[];
    githubUrl: string;
    techUsed: string[],
    features: string[],
    imgPath?: string[],
    period: string,
    type:ProjectType
}

type Certificate = {
    id: number,
    title: string,
    org: string,
    verify_link: string,
    image: string
}

export const Projects: Project[] = [
  {
    id: 1,
    title: "Bookly — FastAPI Beyond CRUD",
    btm_text: "Production-grade backend API with auth, email, logging, and testing",
    description:
      "A production-ready backend API showcasing clean architecture, async operations, authentication, background tasks, and automated testing.",
    githubUrl: "https://github.com/your-repo-link",
    techUsed: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLModel",
      "JWT",
      "OAuth2",
        "Pytest",
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
  },
  {
    id: 2,
    title: "AI-Powered Academic Portal",
    btm_text: "Full-stack academic platform with integrated AI and analytics",
    description:
      "A scalable academic platform integrating learning management, analytics, AI-powered semantic search, plagiarism detection, and role-based access.",
    githubUrl: "https://github.com/your-repo-link",
    techUsed: [
      "Vue.js 3",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "JWT",
      "Google OAuth",
      "Redis",
    "Tailwind CSS",
      "Linux"
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
    type:"Full Stack Web App & Backend API"
  },

  {
    id: 3,
    title: "Smart Contact Manager",
    btm_text: "Cloud-based contact management with OAuth authentication",
    description:
      "A Spring Boot web application for managing contacts securely with OAuth-based login and cloud image storage.",
    githubUrl: "https://github.com/your-repo-link",
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
      "Search and filter contacts",
      "Responsive UI"
    ],
    tags: ["Java", "Spring Boot","Cloud"],
    imgPath: ["./assets/projects/contact_manager.png"],
      period: 'November 2024 - December 2024',
    type:"Full Stack Web App"
  },
  {
    id: 4,
    title: "Recipe for Rating — Predict Food Ratings using ML",
    btm_text: "Machine learning system for predicting restaurant food ratings",
    has_ext_button: true,
    ext_button_html: `
      <a class="inline-block" href="https://nbviewer.org/github/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb" target="_blank">
        <img src="https://img.shields.io/badge/Open%20in-Nbviewer-blue" />
      </a>
      <a class="inline-block" href="https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb" target="_blank">
        <img src="https://img.shields.io/badge/Open%20in-Google%20Colab-blue?logo=googlecolab" />
      </a>`,
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
    imgPath: ["./assets/projects/ml_project.png"],
    period: 'January 2024 - April 2024',
    type:"Machine Learning"
  },

  {
    id: 5,
    title: "Uncovering IPL Insights — Data Analysis of 15 Years of Cricket",
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
    imgPath: ["./assets/projects/ipl.webp"],
    period: 'August 2022 - September 2022',
    type:"Data Analysis"
  },

  {
    id: 6,
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
    imgPath: ["./assets/projects/Home.png"],
      period: 'September 2021 - December 2021',
    type:"Full Stack Web App"
  },
  {
    id: 7,
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
    imgPath: ["./assets/projects/qapp1.png"],
      period: 'May 2021 - August 2021',
    type:"Full Stack Web App"
  }
];

export const certificates: Certificate[] = [
  {
    id: 3,
    title: "Diploma in Programming",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1w356baxF4SRiI19rEp2nrBZQcbvSqIi_/view?usp=sharing",
    image: "../assets/certificates/foundationCerti.jpg",
    },
    {
    id: 4,
    title: "Diploma in Data Science",
    org: "IIT Madras",
    verify_link: "https://drive.google.com/file/d/1w356baxF4SRiI19rEp2nrBZQcbvSqIi_/view?usp=sharing",
    image: "../assets/certificates/foundationCerti.jpg",
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
