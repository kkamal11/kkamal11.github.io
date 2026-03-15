import Arrow from "../components/Arrow";
import { Laptop, GraduationCap } from "phosphor-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="relative mx-4 md:mx-18 py-12 text-gray-600">

      {/* ── Header ── */}
      <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
        <h1
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
          className="text-4xl font-light leading-tight text-gray-900"
        >
          About <em className="text-[#c8440a]">Me</em>
        </h1>
      </div>

      {/* ── 2-col grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-sm py-8">

        {/* Col 1 — description */}
        <Reveal hiddenClass="opacity-0 -translate-x-8">
          <div className="flex flex-col justify-between h-full gap-8">
            <p className="leading-relaxed">
              I specialize in building intelligent, scalable software solutions by combining modern
              web development with data-driven thinking. My work spans from intuitive frontends to
              efficient backend services and analytics-ready systems. I enjoy turning complex problems
              into simple, reliable products that users and businesses can trust.
            </p>
            <Arrow />
          </div>
        </Reveal>

        {/* Col 2 — Oracle card + Education stacked */}
        <div className="flex flex-col gap-6">

          {/* Oracle card */}
          <Reveal hiddenClass="opacity-0 translate-y-6 scale-95">
            <div className="rounded-xl p-6 bg-white border border-gray-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <Laptop size={22} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Oracle</h3>
                </div>
              </div>

              <div className="h-px bg-gray-200" />

              <p className="leading-relaxed text-gray-600">
                Currently, at Oracle, I work on building and improving enterprise systems that power
                critical business operations. My role focuses on enhancing performance, reliability,
                and scalability by refining system design, optimizing workflows, and strengthening
                data processing.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Software Development", "Microservices", "FinTech", "System Design", "Software Testing", "Python", "Java","JavaScript"].map(t => (
                    <span
                      key={t}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[9px] tracking-widest uppercase bg-gray-50 border border-[#e8e6df] rounded-[2px] px-2 py-1 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal hiddenClass="opacity-0 translate-x-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={14} className="text-gray-400" />
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[11px] tracking-widest uppercase text-gray-400"
                >
                  Education
                </span>
                <div className="flex-1 h-px bg-[#e8e6df]" />
              </div>

              <div className="border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
                <EduRow
                  abbr="B.Tech"
                  institute="National Institute of Technology Kurukshetra"
                  field="Engineering"
                  period="2019 – 2023"
                  grade="8.46 CGPA"
                />
                <EduRow
                  abbr="B.Sc"
                  institute="Indian Institute of Technology Madras"
                  field="Programming & Data Science"
                  period="2021 – 2025"
                  grade="9.40 CGPA"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}

/* ── Education row ── */
function EduRow({
  abbr,
  institute,
  field,
  period,
  grade,
}: {
  abbr: string;
  institute: string;
  field: string;
  period: string;
  grade: string;
}) {
  return (
    <div className="bg-white hover:bg-[#f5f3ee] transition-colors duration-150 px-4 py-3 flex items-start gap-3">
      <span className="mt-0.5 text-[9px] tracking-widest uppercase bg-[#f5f3ee] border border-[#e8e6df] rounded-[2px] px-2 py-1 text-gray-400 shrink-0">
        {abbr}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-gray-900 leading-snug">{institute}</p>
        <p className="text-[11px] italic text-gray-400 mt-0.5">{field}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] text-gray-400">{period}</span>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] text-[#c8440a]"
          >
            {grade}
          </span>
        </div>
      </div>
    </div>
  );
}