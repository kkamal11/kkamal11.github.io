import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GithubGrayButton, GithubGrayButtonRound } from "../components/SocialButtons";
import { Lightning } from "phosphor-react";
import ImageCard from '../components/PimageCard';
import { Tag } from "../components/Tag";

type ProjectsSectionProps = {
  showAll?: boolean;
};

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
    type: string,
    markdown?: string
}

const loadProjects = async () => {
  const module = await import("../utils/Data");
  return module.Projects;
};

export default function ProjectsSection({ showAll = true }: ProjectsSectionProps) {
  const [openId, setOpenId] = useState<string | number>(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white py-10 px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
          <div>
            <h2
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
              className="text-4xl font-light leading-tight text-gray-900"
            >
              Explore My<br />
              <em className="text-[#c8440a]">Projects</em> Journey
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p className="text-[15px] leading-relaxed tracking-[0.01em]">
              Over the past 4+ years, I've had the opportunity to work on a wide
              range of projects as part of my academics as well as professional experience, collaborating with diverse teams and
              clients to bring creative visions to life.
            </p>
            <GithubGrayButton url="https://github.com/kkamal11" />
          </div>
        </div>

        {/* Column Headers */}
        <div
          style={{  borderBottom: "1px solid #1a1916" }}
          className="hidden md:grid grid-cols-[44px_1fr_160px_40px] gap-4 px-2 pb-2.5 text-[13px] text-gray-400 tracking-widest uppercase mb-0"
        >
          <span>No.</span>
          <span>Project</span>
          <span>Type</span>
          <span />
        </div>

        {/* Project Rows */}
        <div className="divide-y divide-gray-200">
          {visibleProjects.map((proj, idx) => {
            const isOpen = openId === proj.id;
            const padded = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={proj.id}
                onClick={() => setOpenId(openId === proj.id ? 0 : proj.id)}
                className="cursor-pointer"
              >
                {/* ── Grid Row ── */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-[44px_1fr_160px_40px] gap-4 px-2 py-[18px] items-center transition-colors duration-150 ${
                    isOpen ? "bg-[#f0ede5]" : "hover:bg-[#f0ede5]"
                  }`}
                >
                  {/* Col 1 — number */}
                  <span
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="hidden md:block text-[12px] tracking-tight text-gray-400"
                  >
                    {padded}
                  </span>

                  {/* Col 2 — title + meta */}
                  <div>
                    <p className="text-xl text-gray-900 font-medium transition-colors">
                      {proj.title}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">{proj.period}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{proj.btm_text}</p>
                    <div className="flex gap-2 flex-wrap items-center justify-center md:justify-start mt-4">
                      {proj.tags?.map((tag) => (
                        <Tag slotValue={tag} key={tag + proj.id} />
                      ))}
                    </div>
                  </div>

                  {/* Col 3 — type */}
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[14px] text-gray-600 tracking-tight text-center md:text-left transition-colors"
                  >
                    {proj.type}
                  </p>

                 

                  {/* Col 5 — chevron */}
                  <div className="flex items-center justify-center">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200"
                    style={{
                      background: isOpen ? "#1a1916" : "#fff",
                      borderColor: isOpen ? "#1a1916" : "#e8e6df",
                    }}
                  >
                    <svg
                      width="10" height="10" viewBox="0 0 10 10"
                      fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      stroke={isOpen ? "#fff" : "#9ca3af"}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" />
                    </svg>
                    </div>
                  </div>
                </div>

                {/* ── Expand Panel ── */}
                <div
                  style={{
                    maxHeight: isOpen ? "800px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div className="pb-6" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-[#f5f3ee] rounded-md p-5 md:p-6 flex flex-col gap-5">

                      {/* ── Row 1: Description [left] | Period [right] ── */}
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <p className="flex-1 text-[14px] text-gray-500 italic leading-relaxed border-l-2 border-[#c8440a] pl-3.5">
                          {proj.description}
                        </p>
                        <span
                          style={{ fontFamily: "'DM Mono', monospace" }}
                          className="self-start md:self-start shrink-0 text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df] rounded-[2px] px-2.5 py-1 text-gray-400"
                        >
                          {proj.period}
                        </span>
                      </div>

                      {/* ── Row 2: Key Features [left] | GitHub button [right, centered] ── */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <p
                            style={{ fontFamily: "'DM Mono', monospace" }}
                            className="text-[12px] tracking-widest uppercase text-gray-400 mb-2"
                          >
                            Key Features
                          </p>
                          <ul className="space-y-1">
                            {proj.features.map((feat) => (
                              <li key={feat + proj.id} className="flex items-baseline gap-2 text-[12px] text-gray-700">
                                <Lightning className="inline-block flex-shrink-0 text-[#c8440a]" size={13} />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-center md:mr-10">
                          <GithubGrayButtonRound url={proj.githubUrl} />
                        </div>
                      </div>

                      {/* ── Row 3: Tech Stack — full width ── */}
                      <div>
                        <p
                          style={{ fontFamily: "'DM Mono', monospace" }}
                          className="text-[12px] tracking-widest uppercase text-gray-400 mb-2"
                        >
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {proj.techUsed.map((tech) => (
                            <Tag slotValue={tech} key={proj.id + tech} doTransition={true} />
                          ))}
                        </div>
                      </div>

                      {/* ── Row 4: README btn [left] + extra buttons [left] ── */}
                      {(proj.markdown || (proj.ext_buttons && proj.ext_buttons.length > 0)) && (
                        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
                          <div className="flex-1">
                            {proj.markdown && (
                            <NavLink
                              to={`/projects/${proj.id}`}
                              style={{ fontFamily: "'DM Mono', monospace" }}
                              className="inline-block text-sm border border-gray-400 text-gray-800 px-4 py-2 rounded text-center hover:bg-black hover:text-white transition uppercase"
                              onClick={(e) => e.stopPropagation()}
                            >
                              README.md ↗
                            </NavLink>
                          )}
                          </div>
                          {proj.ext_buttons?.map((btn) => (
                            <a
                              key={btn.href}
                              href={btn.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <img src={btn.img} alt={btn.label} />
                            </a>
                          ))}
                        </div>
                      )}

                      {/* ── Row 5: Images ── */}
                      {proj.imgPath && proj.imgPath.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {proj.imgPath.map((path, i) => (
                            <ImageCard key={i} src={path} alt="Image" caption="" />
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All */}
        {!showAll && (
          <div className="flex items-center justify-center mt-2">
              <NavLink to={'/projects'}
              className="border border-gray-400 text-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
              > View All Projects
              </NavLink>
          </div>
        )}

      </div>
    </section>
  );
}