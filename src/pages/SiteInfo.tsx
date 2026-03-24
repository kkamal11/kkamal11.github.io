import { useState, useEffect } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import {
  GithubLogo,
  Globe,
  Lightning,
  Package,
  GitBranch,
  Clock,
  ArrowSquareOut,
} from "phosphor-react";

const stack = [
  {
    category: "Frontend", 
    items: [
      { name: "React 19", desc: "UI framework",color: "#0a6bc8" },
      { name: "TypeScript",desc: "Type safety",color: "#0a6bc8" },
      { name: "Vite", desc: "Build tool", color: "#b87d0a" },
      { name: "React-router-dom", desc: "Router", color: "#dd0606ff" },
      { name: "Tailwind CSS", desc: "Styling", color: "#0a8c5a" },
    ],
  },
  {
    category: "UI & Icons",
    items: [
      { name: "Phosphor Icons", desc: "Icon library", color: "#c8440a" },
      { name: "DM Sans", desc: " Typeface", color: "#7c3ac8" },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Vercel Functions", desc: "Serverless API",color: "#1a1916" },
      { name: "Firebase DB  ", desc: "Database",color: "#f9a932ff" },
      { name: "Firebase Auth", desc: "Authentication",color: "#b87d0a" },
      { name: "GitHub API", desc: "Source", color: "#1a1916" },
    ],
  },
  {
    category: "Integrations",
    items: [
      { name: "Formspree",      desc: "Contact form", color: "#c8440a" },
      { name: "react-markdown", desc: "README rendering", color: "#0a6bc8" },
      { name: "rehype-highlight", desc: "Code syntax highlight",  color: "#0a6bc8" },
    ],
  },
];

const deployment = [
  { label: "Hosting", value: "Github", href: "https://github.com",icon: <GithubLogo size={13} /> },
  { label: "Source Code", value: "GitHub",  href: "https://github.com/kkamal11/kkamal11.github.io", icon: <GithubLogo size={13} /> },
  { label: "Database", value: "Firebase",   href: "https://firebase.com", icon: <Lightning size={13} /> },
  { label: "CI/CD", value: "Auto-deploy on push", href: "https://github.com",icon: <GitBranch size={13} /> },
];

const meta = [
  { label: "Version",     value: "1.0.0" },
  { label: "License",     value: "MIT" },
  { label: "Built by",    value: "Kamal Kishor Chaurasiya" },
  { label: "Design system", value: "Custom — DM Sans + DM Mono + #c8440a" },
];


export default function SiteInfo() {
  const [uptime, setUptime] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Live clock
  useEffect(() => {
    const tick = () => setUptime(new Date().toUTCString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white px-6 md:px-12 py-16 relative overflow-hidden"
    >
      {/* Corner marks */}
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gray-200" />
      <span className="absolute top-5 right-5 w-4 h-4 border-t border-r border-gray-200" />
      <span className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-gray-200" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gray-200" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">

        {/* ── Header ── */}
        <div
          className="pb-5 border-b border-gray-900"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center gap-2"
            >
              <span className="w-4 h-px bg-gray-300 inline-block" />
              Site Info
            </span>
          </div>
          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900"
          >
            Built with <em className="text-[#c8440a]">intention</em>.
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed mt-3 max-w-lg">
            A transparent look at the technology, tooling, and decisions that power this portfolio.
          </p>
        </div>

        {/* ── Tech Stack ── */}
        <Reveal hiddenClass="opacity-0 translate-y-6">
          <div>
            <SectionLabel icon={<Package size={13} />} label="Tech Stack" />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {stack.map((group) => (
                <div
                  key={group.category}
                  className="border border-[#e8e6df] rounded-md overflow-hidden"
                >
                  {/* Group header */}
                  <div className="px-4 py-2.5 bg-[#f5f3ee] border-b border-[#e8e6df]">
                    <span
                      className="text-[10px] tracking-widest uppercase text-gray-500"
                    >
                      {group.category}
                    </span>
                  </div>
                  {/* Items */}
                  <div className="divide-y divide-[#e8e6df]">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f5f3ee] transition-colors duration-150 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: item.color }}
                          />
                          <span className="text-[13px] font-medium text-gray-900">{item.name}</span>
                        </div>
                        <span
                          style={{ fontFamily: "'DM Mono', monospace" }}
                          className="text-[10px] tracking-wide uppercase text-gray-400"
                        >
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Deployment ── */}
        <Reveal hiddenClass="opacity-0 translate-y-6">
          <div>
            <SectionLabel icon={<Globe size={13} />} label="Deployment" />
            <div className="mt-5 border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
              {deployment.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between px-5 py-3
                    hover:bg-[#f5f3ee] transition-colors duration-150"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-gray-400 group-hover:text-gray-700 transition-colors">
                      {d.icon}
                    </span>
                    <span
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[10px] tracking-widest uppercase text-gray-400"
                    >
                      {d.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] text-gray-700 group-hover:text-gray-900 transition-colors">
                      {d.value}
                    </span>
                    <ArrowSquareOut
                      size={11}
                      className="text-gray-300 group-hover:text-[#c8440a] transition-colors"
                    />
                  </div>
                </a>
              ))}

              {/* Live clock row */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#f5f3ee]">
                <div className="flex items-center gap-2.5">
                  <Clock size={13} className="text-gray-400" />
                  <span
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[10px] tracking-widest uppercase text-gray-400"
                  >
                    Server time (UTC)
                  </span>
                </div>
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[11px] text-[#c8440a]"
                >
                  {uptime}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Meta ── */}
        <Reveal hiddenClass="opacity-0 translate-y-6">
          <div>
            <SectionLabel icon={<Lightning size={13} />} label="About this site" />
            <div className="mt-5 border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between px-5 py-3 hover:bg-[#f5f3ee] transition-colors duration-150"
                >
                  <span
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[10px] tracking-widest uppercase text-gray-400"
                  >
                    {m.label}
                  </span>
                  <span className="text-[13px] text-gray-700">{m.value}</span>
                </div>
              ))}

              {/* Open source row */}
              <a
                href="https://github.com/kkamal11"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-5 py-3
                  hover:bg-[#f5f3ee] transition-colors duration-150"
              >
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase text-gray-400"
                >
                  Source code
                </span>
                <div className="flex items-center gap-1.5">
                  <GithubLogo size={13} className="text-gray-500" />
                  <span className="text-[13px] text-gray-700 group-hover:text-gray-900">
                    github.com/kkamal11
                  </span>
                  <ArrowSquareOut size={11} className="text-gray-300 group-hover:text-[#c8440a] transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── Footer note ── */}
        <Reveal hiddenClass="opacity-0 translate-y-4">
          <p
            className="text-[10px] tracking-wide text-gray-400 text-center border-t border-[#e8e6df] pt-8 leading-relaxed"
          >
            Designed and developed by Kamal Kishor Chaurasiya · Updated continuously
          </p>
        </Reveal>

      </div>
    </section>
  );
}