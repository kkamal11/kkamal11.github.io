import { Laptop, GraduationCap, Briefcase, Medal } from "phosphor-react";
import focusImg from '../assets/focus.webp'
import { certificates } from "../utils/Data";
import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
export default function About() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const toggleCertCount = () => {
    setShowAllCerts((prev) => !prev);
  }
  const visibleCertificates = showAllCerts ? certificates : certificates.slice(0, 6);
  return (
    <section className="min-h-screen bg-[#f7f7f5] px-6 md:px-24 py-10 text-gray-600">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-6 border-b border-gray-200">
          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light leading-tight text-gray-900"
          >
            About <em className="text-[#c8440a]">Me</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-500 tracking-[0.01em]">
            I build intelligent, scalable software systems with a strong focus on clean architecture,
            performance, and user-centric design — spanning full-stack development, backend systems,
            and data-driven applications.
          </p>
        </div>

        {/* ── Row 1: Oracle card + Education ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Oracle card */}
          <Reveal hiddenClass="opacity-0 -translate-y-4">
            <div>
              <SectionLabel icon={<Laptop size={18} />} label="Current Role" />
              <div className="mt-4 bg-[#f5f3ee] rounded-md border border-[#e8e6df] p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#e8e6df] flex items-center justify-center shrink-0">
                    <Laptop size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-gray-900">Associate Consultant</p>
                    <p
                      // style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[12px] tracking-widest uppercase text-red-700 mt-0.5"
                    >
                      Oracle
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#e8e6df]" />

                <p className="text-[14px] leading-relaxed text-gray-500">
                  Building and improving enterprise systems that power critical business operations.
                  Focused on enhancing performance, reliability, and scalability through refined system
                  design, optimized workflows, and strengthened data processing.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Software Development", "Microservices", "FinTech", "System Design", "Software Testing", "Python", "Java","JavaScript"].map(t => (
                    <span
                      key={t}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df] rounded-[2px] px-2 py-1 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal hiddenClass="opacity-0 translate-x-4">
            <div>
              <SectionLabel icon={<GraduationCap size={18} />} label="Education" />
              <div className="mt-4 space-y-0 divide-y divide-[#e8e6df] border border-[#e8e6df] rounded-md overflow-hidden">
                <EduBlock
                  institute="National Institute of Technology Kurukshetra"
                  location="Kurukshetra, Haryana"
                  degree="Bachelor of Technology (B.Tech)"
                  period="Aug 2019 – June 2023"
                  grade="8.46 CGPA"
                />
                <EduBlock
                  institute="Indian Institute of Technology Madras"
                  location="Chennai, Tamil Nadu"
                  degree="BSc in Programming and Data Science"
                  period="Mar 2021 – Dec 2025"
                  grade="9.40 CGPA"
                />
                <EduBlock
                  institute="MS Memorial Public School"
                  location="East Champaran, Bihar"
                  degree="Senior Secondary (PCM)"
                  period="2017 – 2019"
                  grade="90% Aggregate"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===== Row 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Internships */}
          <Reveal hiddenClass="opacity-0 -translate-x-16">
          <div>
            <SectionLabel icon={<Briefcase size={18} />} label="Early Experience" />
            <Timeline>
                <TimelineItem
                    title="Python Academic Mentor"
                    org="IIT Madras"
                    period="Aug – Sep 2022"
                    desc="Guided students in enhancing their computational thinking and problem-solving abilities through hands-on Python programming."
                  />
                  <TimelineItem
                    title="Machine Learning Teaching Assistant"
                    org="IIT Madras"
                    period="Sep – Dec 2022"
                    desc="Assisted students in strengthening analytical reasoning and conceptual understanding of machine learning through structured guidance."
                  />
                  <TimelineItem
                    title="Project Intern"
                    org="NIT Kurukshetra"
                    period="Jan – May 2022"
                    desc="Contributed to applied academic projects by translating problem statements into structured technical solutions and well-documented implementations."
                  />
                </Timeline>
            </div>
          </Reveal>

          {/* Core Focus */}
          <div className="p-10 flex items-center justify-center">
            <Reveal hiddenClass="opacity-0 translate-x-16">
              <img
                src={focusImg}
                alt="Core focus illustration"
                className=" rounded-xl
                  w-56 md:w-72
                  opacity-80
                  grayscale
                  transition-all duration-500 ease-out
                  hover:opacity-100 hover:grayscale-0 hover:scale-105
                "
              />
            </Reveal>
          </div>
        </div>

        {/* ===== Row 3 ===== */}
        <div className="space-y-12">

          {/* Certificates */}
          <Reveal hiddenClass="opacity-0 translate-x-16">
          <div> 
            <SectionLabel icon={<Medal size={18} />} label="Certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {visibleCertificates.map(cert => {
                return <CertCard
                  title={cert.title}
                  org={cert.org}
                  img={cert.image}
                  link={cert.verify_link} key={cert.id} />
              })}
            </div>
            </div>
          </Reveal>
          <div className="flex items-center justify-center mt-6">
            <button
            onClick={toggleCertCount}
            className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
            >
            {showAllCerts ? "Show Less" : "Show All"}
            </button>
          </div>
          <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
            <p className="text-sm text-gray-500 text-center">
              I continuously invest in learning to design and build reliable, scalable systems that create lasting impact in real-world applications, while actively exploring new technologies across Software Engineering, Machine Learning, and Artificial Intelligence.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

function EduBlock({
  institute,
  location,
  degree,
  period,
  grade,
}: {
  institute: string;
  location: string;
  degree: string;
  period: string;
  grade: string;
}) {
  return (
    <div className="bg-white px-5 py-4 space-y-0.5 hover:bg-[#f5f3ee] transition-colors duration-150">
      <p className="text-[14px] font-medium text-gray-900">{institute}</p>
      <p
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[12px] tracking-wide text-gray-400"
      >
        {location}
      </p>
      <p className="text-[13px] italic text-gray-500 pt-0.5">{degree}</p>
      <div className="flex items-center justify-between pt-1">
        {period && (
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[12px] text-gray-400"
          >
            {period}
          </span>
        )}
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[11px] tracking-wide text-[#c8440a] ml-auto"
        >
          {grade}
        </span>
      </div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-5 border-l border-[#e8e6df] space-y-6 my-3">
      {children}
    </div>
  );
}

function TimelineItem({
  title,
  org,
  period,
  desc,
}: {
  title: string;
  org: string;
  period: string;
  desc: string;
}) {
  return (
    <div className="relative">
      {/* dot */}
      <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-[#e8e6df] border-2 border-white ring-1 ring-[#d4d0c8]" />
      <div>
        <p className="text-[13px] font-medium text-gray-900">{title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className="text-[10px] tracking-widest uppercase text-[#c8440a]"
          >
            {org}
          </span>
          <span className="text-gray-300 text-[10px]">·</span>
          <span
            className="text-[10px] text-gray-400"
          >
            {period}
          </span>
        </div>
        <p className="text-[12px] text-gray-500 mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CertCard({
  title,
  org,
  img,
  link,
}: {
  title: string;
  org: string;
  img: string;
  link: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Expandable image */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${hovered ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex items-center justify-center">
          <img src={img} alt={title} loading="lazy" className="object-fit mb-4" />
        </div>
      </div>

      {/* Text */}
      <div className="">
        <p className="text-gray-800 font-medium">{title}</p>
        <p className="text-sm text-gray-600">{org}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#c8440a] inline-block hover:underline underline-offset-4"
        >
          Verify ↗
        </a>
      </div>
    </div>
  );
}
