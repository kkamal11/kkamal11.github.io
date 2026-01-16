import { Laptop, GraduationCap, Briefcase, Sparkle, Medal } from "phosphor-react";
import focusImg from '../assets/focus.jpg'
import { certificates } from "../utils/Data";
import { useState } from "react";
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
        <div className="flex items-center gap-6">
          <h1 className="text-4xl font-light tracking-tight text-gray-800 whitespace-nowrap">
            About Me
          </h1>
          <div className="flex-1 h-px bg-gray-300 opacity-60" />
        </div>

        {/* ===== Row 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I build intelligent, scalable software systems with a strong focus on clean architecture,
              performance, and user-centric design.
            </p>
            <p className="leading-relaxed">
              My work spans full-stack development, backend systems, data-driven applications, and
              performance-critical services — always focusing on simplicity and long-term maintainability.
            </p>
          </div>

          {/* Oracle */}
          <div className="md:mt-10">
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <Laptop size={22} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Associate Consultant</h3>
                  <p className="text-sm text-gray-500">Oracle</p>
                </div>
              </div>

              <div className="h-px bg-gray-200" />

              <p className="text-sm leading-relaxed">
                Currently, at Oracle, I work on building and improving enterprise systems that power critical business operations. My role focuses on enhancing performance, reliability, and scalability by refining system design, optimizing workflows, and strengthening data processing.  
              </p>

              <div className="pt-2 border-t border-gray-200 text-xs text-gray-500">
              Software Development • Microservices • FinTech • System Design • Software Testing
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-gray-500" />
              <h4 className="uppercase tracking-widest text-xs text-gray-500">Education</h4>
            </div>

            <div className="space-y-6 text-sm">
              <EduBlock
                institute="National Institute of Technology Kurukshetra"
                location="Kurukshetra, Haryana"
                degree="Bachelor of Technology (B.Tech)"
                period="Aug 2019 – June 2023"
                grade="Grade: 8.46 CGPA"
              />

              <EduBlock
                institute="Indian Institute of Technology Madras"
                location="Chennai, Tamil Nadu"
                degree="BSc in Programming and Data Science"
                period="Mar 2021 – Dec 2025"
                grade="Grade: 9.40 CGPA"
              />

              <EduBlock
                institute="MS Memorial Public School"
                location="East Champaran, Bihar"
                degree="Senior Secondary (PCM)"
                period=""
                grade="Aggregate: 90%"
              />
            </div>
          </div>
        </div>

        {/* ===== Row 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Internships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={20} className="text-gray-500" />
              <h4 className="uppercase tracking-widest text-xs text-gray-500">Early Experience</h4>
            </div>

            <Timeline>
              <TimelineItem
                title="Python Academic Mentor - IIT Madras"
                period="Aug–Sep 2022"
                desc="Guided students in enhancing their computational thinking and problem-solving abilities through hands-on Python programming."
              />
              <TimelineItem
                title="Machine Learning TA — IIT Madras"
                period="Sep–Dec 2022"
                desc="Assisted students in strengthening their analytical reasoning and conceptual understanding of machine learning through structured guidance and practical examples."
              />
              <TimelineItem
                title="Project Intern - NIT Kurukshetra"
                period="Jan–May 2022"
                desc="Contributed to applied academic projects by translating problem statements into structured technical solutions and well-documented implementations."
              />
            </Timeline>
          </div>

          {/* Core Focus */}
          <div className="p-10 flex items-center justify-center">
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
          </div>
        </div>

        {/* ===== Row 3 ===== */}
        <div className="space-y-12">

          {/* Certificates */}
          <div>
              <div className="flex items-center gap-3 mb-6">
                <Medal size={20} className="text-gray-500" />
              <h4 className="uppercase tracking-widest text-xs text-gray-500">Certifications</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleCertificates.map(cert => {
                return <CertCard
                  title={cert.title}
                  org={cert.org}
                  img={cert.image}
                  link={cert.verify_link} key={cert.id} />
              })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
            onClick={toggleCertCount}
            className="border border-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
            >
            {showAllCerts ? "Show Less" : "Show All"}
            </button>
        </div>

          <p className="text-sm text-gray-500 text-center">
              I continuously invest in learning to design and build reliable, scalable systems that create lasting impact in real-world applications, while actively exploring new technologies across Software Engineering, Machine Learning, and Artificial Intelligence.          </p>
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
    <div className="space-y-1">
      <p className="text-gray-800 font-medium uppercase">{institute}</p>
      <p className="text-xs text-gray-500">{location}</p>
      <p className="italic">{degree}</p>
      <p className="text-xs text-gray-500">{period}</p>
      <p className="text-xs text-gray-500">{grade}</p>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="relative pl-6 border-l border-gray-300 space-y-6">{children}</div>;
}

function TimelineItem({
  title,
  period,
  desc,
}: {
  title: string;
  period: string;
  desc: string;
}) {
  return (
    <div className="relative">
      <span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full"><Sparkle weight="fill" /></span>
      <div className="ml-3">
          <p className="text-gray-800 font-medium">{title}</p>
          <p className="text-xs text-gray-500">{period}</p>
          <p className="text-xs text-gray-600 mt-1">{desc}</p>
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
          <img src={img} alt={title} className="object-fit mb-4" />
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
          className="text-xs text-blue-600 inline-block hover:underline underline-offset-4"
        >
          Verify ↗
        </a>
      </div>
    </div>
  );
}
