import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GithubGrayButton, GithubGrayButtonRound } from "../components/SocialButtons";
import { Lightning } from "phosphor-react";
import ImageCard from '../components/PimageCard';
import apiImg from '../assets/images/api.png'

type ProjectsSectionProps = {
  showAll?: boolean;
};

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

const Projects: Project[] = [
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
    imgPath: ["./assets/projects/academic_portal.png"],
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

export default function ProjectsSection({ showAll = true }: ProjectsSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const visibleProjects = showAll ? Projects : Projects.slice(0, 3);
  return (
    <section className="bg-white py-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
          <div>
            <h2 className="text-4xl font-medium text-gray-700 leading-tight">
              Explore My Projects <br /> Journey
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p className="text-[15px]">
              Over the past 4+ years, I've had the opportunity to work on a wide
              range of projects as part of my academics as well as professional experience, collaborating with diverse teams and
              clients to bring creative visions to life.
            </p>
            <GithubGrayButton url="https://github.com/kkamal11" />
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-200">
          {visibleProjects.map((proj) => {
            const isOpen = openId === proj.id;

            return (
              <div
                key={proj.id}
                className="py-6"
                onMouseEnter={() => setOpenId(proj.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 cursor-pointer group">
                  <div>
                    <p className="text-lg text-gray-900 font-medium group-hover:text-black transition">
                      {proj.title}
                    </p>
                        <p className="text-[10px] text-gray-500 mt-1"> {proj.period}</p>
                        <p className="text-xs text-gray-500 mt-1"> {proj.btm_text}</p>
                  </div>

                  <p className="text-sm font-medium text-gray-600 text-center">{proj.type}</p>

                  <div className="flex justify-start md:justify-end gap-2">
                    {proj.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded bg-gray-50 text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Expand Panel */}
                <div
                  className={`
                    overflow-auto transition-all duration-700 ease-out
                    ${isOpen ? "opacity-100 mt-6" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="ml-4 md:ml-0 bg-white border border-gray-200 rounded p-6 text-sm text-gray-600 shadow-sm">
                        <div className="">
                            <div className="flex flex-col">
                                <p className="leading-relaxed pb-3 text-gray-700 text-[15px] italic tracking-[0.01em]">{proj.description}</p>
                                {/* {Feature + img + github btn} */}
                                <div className="flex flex-col sm:flex-row justify-between items-center">
                                  <div>
                                    <p className="font-medium">Features:</p>
                                    <ul>
                                        {proj.features.map(feat => {
                                          return  <li><Lightning className="inline-block" size={16} key={feat}  />{feat}</li>
                                        })}
                                    </ul> 
                                  </div>
                                  <div className="p-4 sm:px-8 flex justify-center items-center">
                                          {proj.imgPath?.map((path, i) => {
                                            return <ImageCard key={i} src={path} alt="Image" />
                                      })}
                                  </div>
                                  <div className="mt-2 sm:mt-0">
                                    <GithubGrayButtonRound url={proj.githubUrl} />
                                  </div>
                                </div>
                                <p className="font-medium mt-4">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                {proj.techUsed.map((tech) => (
                                    <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded bg-gray-50 border border-gray-200 text-gray-700 hover:scale-105 transition hover:cursor-pointer"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                 </div>
                </div>
              </div>
            );
          })}
        </div>
        {!showAll ? 
            <div className="flex items-center justify-center mt-2">
              <NavLink to={'/projects'}
              className="border border-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
              > See All
              </NavLink>
          </div>
          : null}
      </div>
    </section>
  );
}
