import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  ArrowLeft, Clock, Buildings, Briefcase,
  CheckCircle, XCircle, Lightbulb, Star,
  CaretRight, ArrowUp,
} from "phosphor-react";

// ── Types ─────────────────────────────────────────────────────

type Round = {
  number: number;
  title: string;
  type: "online-assessment" | "technical" | "hr" | "managerial" | "system-design";
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: string[];
  notes: string;
};

type InterviewPost = {
  id: string;
  company: string;
  role: string;
  outcome: "Selected" | "Rejected" | "On Hold" | "Withdrew";
  level: string;
  location: string;
  date: string;
  totalRounds: number;
  duration: string;
  ctc?: string;
  tags: string[];
  overview: string;
  preparation: string[];
  rounds: Round[];
  tips: string[];
  verdict: string;
};

// ── Sample data — replace with real content ───────────────────

const POSTS: Record<string, InterviewPost> = {
  "3": {
    id: "3",
    company: "Oracle",
    role: "Associate Software Developer",
    outcome: "Selected",
    level: "Entry Level",
    location: "Bengaluru, India",
    date: "March 2023",
    totalRounds: 4,
    duration: "3 weeks",
    ctc: "₹10 LPA",
    tags: ["Java", "SQL", "Data Structures", "System Design", "OOP"],
    overview:
      "Oracle campus recruitment at NIT Kurukshetra. The process was rigorous — spanning an online assessment, two technical rounds, and an HR round. The focus was heavily on core computer science fundamentals, Java OOP, and database knowledge.",
    preparation: [
      "Solved 150+ problems on LeetCode (Easy & Medium)",
      "Revised OOP concepts — polymorphism, inheritance, design patterns",
      "Practiced SQL queries, joins, indexing, and query optimisation",
      "Went through DBMS fundamentals — normalisation, ACID properties",
      "Revised OS concepts — process scheduling, deadlocks, memory management",
      "Prepared a strong walkthrough of all major projects",
    ],
    rounds: [
      {
        number: 1,
        title: "Online Assessment",
        type: "online-assessment",
        duration: "90 minutes",
        difficulty: "Medium",
        questions: [
          "2 coding problems — array manipulation and a graph BFS problem",
          "20 MCQs on Java, SQL, OS, and DBMS fundamentals",
          "5 output-based Java questions",
        ],
        notes:
          "The coding section was on HackerRank. Both problems were solvable with basic DSA knowledge. The MCQs covered tricky Java behaviour like static initialisation, exception handling order, and SQL join types.",
      },
      {
        number: 2,
        title: "Technical Round 1",
        type: "technical",
        duration: "60 minutes",
        difficulty: "Medium",
        questions: [
          "Explain the four pillars of OOP with real-world examples",
          "What is method overloading vs overriding? Can we override static methods?",
          "Write a program to find the longest common subsequence",
          "Difference between HashMap and TreeMap in Java",
          "Explain indexing in databases — clustered vs non-clustered",
          "Write a SQL query to find the second highest salary",
          "What happens when you type a URL in the browser?",
        ],
        notes:
          "The interviewer was conversational and genuinely curious about my thought process. He asked me to write code on paper for the LCS problem — focus was on correctness over syntax. Deep follow-ups on every answer.",
      },
      {
        number: 3,
        title: "Technical Round 2",
        type: "technical",
        duration: "45 minutes",
        difficulty: "Hard",
        questions: [
          "Design a library management system — classes, relationships, DB schema",
          "How would you handle concurrent book reservations?",
          "Explain your final year project in detail — architecture, challenges",
          "What is a deadlock? How does the OS detect and recover from it?",
          "Write a query to find departments with more than 10 employees",
          "Difference between process and thread — when to use each?",
        ],
        notes:
          "This round felt more like a conversation than an interview. The system design question was open-ended — I drew the schema on paper and talked through normalisation. The interviewer pushed me on concurrency and transaction isolation levels.",
      },
      {
        number: 4,
        title: "HR Round",
        type: "hr",
        duration: "30 minutes",
        difficulty: "Easy",
        questions: [
          "Tell me about yourself",
          "Why Oracle? Why not a startup?",
          "Where do you see yourself in 5 years?",
          "Describe a time you handled a conflict in a team",
          "Are you comfortable with relocation to Bengaluru?",
          "Do you have any questions for us?",
        ],
        notes:
          "Standard HR round. Be genuine and confident. Research Oracle's products beforehand — mentioning Java and MySQL (both Oracle-owned technologies) in my motivation answer landed well.",
      },
    ],
    tips: [
      "Master Java fundamentals — Oracle loves Java. Know collections, generics, and exception handling deeply",
      "SQL is non-negotiable — practice complex joins, subqueries, window functions",
      "For paper coding, think out loud — interviewers value approach over syntax",
      "Prepare 2-3 project deep dives — be ready for architecture and design questions",
      "Read about Oracle's products before the HR round — shows genuine interest",
    ],
    verdict:
      "Overall a well-structured process that genuinely tested fundamentals rather than trick questions. The interviewers were approachable. Solid preparation in Java, SQL, and DBMS is all you need to clear this.",
  },
};

// ── Round type config ─────────────────────────────────────────

const roundConfig = {
  "online-assessment": { label: "Online Assessment", color: "#0a6bc8" },
  technical:           { label: "Technical",         color: "#c8440a" },
  hr:                  { label: "HR",                color: "#0a8c5a" },
  managerial:          { label: "Managerial",        color: "#7c3ac8" },
  "system-design":     { label: "System Design",     color: "#b87d0a" },
};

const difficultyColor = { Easy: "#0a8c5a", Medium: "#b87d0a", Hard: "#c8440a" };

const outcomeConfig = {
  Selected: { color: "#0a8c5a", icon: <CheckCircle size={14} weight="fill" /> },
  Rejected:  { color: "#c8440a", icon: <XCircle size={14} weight="fill" /> },
  "On Hold": { color: "#b87d0a", icon: <Clock size={14} weight="fill" /> },
  Withdrew:  { color: "#6b6b66", icon: <XCircle size={14} weight="fill" /> },
};

// ── Main Page ─────────────────────────────────────────────────

export default function InterviewPost() {
  const { id }                        = useParams<{ id: string }>();
  const post                          = POSTS[id ?? ""];
  const [activeRound, setActiveRound] = useState(0);
  const [showTop, setShowTop]         = useState(false);
  const roundRefs                     = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active round via IntersectionObserver
  useEffect(() => {
    const observers = roundRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveRound(i); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[11px] tracking-widest uppercase text-gray-400">
          Post not found
        </p>
      </div>
    );
  }

  const outcome = outcomeConfig[post.outcome];

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white"
    >
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#e8e6df]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <NavLink
            to="/blog"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-widest uppercase hidden sm:block">
              Blog
            </span>
          </NavLink>

          <div className="flex items-center gap-2">
            <Buildings size={13} className="text-gray-400" />
            <span style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[11px] tracking-wide text-gray-500 truncate max-w-[200px]">
              {post.company} — {post.role}
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] border"
            style={{ borderColor: `${outcome.color}40`, color: outcome.color,
              background: `${outcome.color}10` }}
          >
            {outcome.icon}
            <span style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[9px] tracking-widest uppercase">
              {post.outcome}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* ════════════ LEFT SIDEBAR ════════════ */}
          <aside className="lg:sticky lg:top-20 flex flex-col gap-6">

            {/* Company card */}
            <div className="bg-[#f5f3ee] border border-[#e8e6df] rounded-md p-5">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border mb-4"
                style={{ borderColor: `${outcome.color}40`, color: outcome.color,
                  background: `${outcome.color}10` }}
              >
                {outcome.icon}
                <span style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[9px] tracking-widest uppercase">
                  {post.outcome}
                </span>
              </div>

              <h1
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                className="text-2xl font-light text-gray-900 leading-tight mb-1"
              >
                {post.company}
              </h1>
              <p className="text-[13px] text-gray-500 mb-5">{post.role}</p>

              <div className="space-y-2.5 border-t border-[#e8e6df] pt-4">
                {[
                  { icon: <Briefcase size={11} />, label: "Level",    value: post.level },
                  { icon: <Buildings size={11} />, label: "Location", value: post.location },
                  { icon: <Clock size={11} />,     label: "Date",     value: post.date },
                  { icon: <Clock size={11} />,     label: "Duration", value: post.duration },
                  ...(post.ctc ? [{ icon: <Star size={11} />, label: "CTC", value: post.ctc }] : []),
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-gray-400">
                      {row.icon}
                      <span style={{ fontFamily: "'DM Mono', monospace" }}
                        className="text-[9px] tracking-widest uppercase">
                        {row.label}
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Round navigator */}
            <div className="border border-[#e8e6df] rounded-md overflow-hidden">
              <div className="px-4 py-2.5 bg-[#f5f3ee] border-b border-[#e8e6df]">
                <span style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[9px] tracking-widest uppercase text-gray-400">
                  {post.totalRounds} Rounds
                </span>
              </div>
              {post.rounds.map((round, i) => {
                const cfg = roundConfig[round.type];
                return (
                  <button
                    key={i}
                    onClick={() => {
                      roundRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5
                      border-b border-[#e8e6df] last:border-0
                      hover:bg-[#f5f3ee] transition-colors duration-150"
                    style={{ background: activeRound === i ? "#f0ede5" : "white" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: activeRound === i ? cfg.color : "#d4d0c8" }}
                      />
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          color: activeRound === i ? cfg.color : "#6b6b66",
                        }}
                        className="text-[10px] tracking-wide uppercase text-left"
                      >
                        R{round.number} · {cfg.label}
                      </span>
                    </div>
                    {activeRound === i && (
                      <CaretRight size={10} style={{ color: cfg.color }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tags */}
            <div>
              <p style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[9px] tracking-widest uppercase text-gray-400 mb-2">
                Topics covered
              </p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[9px] tracking-widest uppercase bg-[#f5f3ee]
                      border border-[#e8e6df] rounded-[2px] px-2 py-0.5 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* ════════════ RIGHT CONTENT ════════════ */}
          <main className="flex flex-col gap-10 min-w-0">

            {/* Overview */}
            <section>
              <SectionLabel label="Overview" />
              <p className="text-[14px] text-gray-600 leading-[1.85] mt-4
                border-l-2 border-[#c8440a] pl-4 italic">
                {post.overview}
              </p>
            </section>

            {/* Preparation */}
            <section>
              <SectionLabel label="How I Prepared" />
              <ul className="mt-4 space-y-2">
                {post.preparation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-gray-700">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c8440a] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Rounds */}
            <section>
              <SectionLabel label="Interview Rounds" />
              <div className="mt-4 flex flex-col gap-6">
                {post.rounds.map((round, i) => {
                  const cfg  = roundConfig[round.type];
                  const diff = difficultyColor[round.difficulty];
                  return (
                    <div
                      key={i}
                      ref={(el) => { roundRefs.current[i] = el; }}
                      className="border border-[#e8e6df] rounded-md overflow-hidden
                        scroll-mt-24 transition-shadow duration-300 hover:shadow-sm"
                    >
                      {/* Round header */}
                      <div
                        className="flex items-center justify-between px-5 py-3 border-b border-[#e8e6df]"
                        style={{ background: `${cfg.color}08` }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0"
                            style={{ background: cfg.color }}
                          >
                            <span style={{ fontFamily: "'DM Mono', monospace" }}
                              className="text-[10px] font-bold">
                              {round.number}
                            </span>
                          </div>
                          <div>
                            <p className="text-[13px] font-medium text-gray-900">{round.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span style={{ fontFamily: "'DM Mono', monospace", color: cfg.color }}
                                className="text-[9px] tracking-widest uppercase">
                                {cfg.label}
                              </span>
                              <span className="text-gray-300 text-[10px]">·</span>
                              <span style={{ fontFamily: "'DM Mono', monospace" }}
                                className="text-[10px] text-gray-400 flex items-center gap-1">
                                <Clock size={9} /> {round.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span
                          style={{ fontFamily: "'DM Mono', monospace", color: diff,
                            borderColor: `${diff}40`, background: `${diff}10` }}
                          className="text-[9px] tracking-widest uppercase border rounded-[2px] px-2 py-0.5"
                        >
                          {round.difficulty}
                        </span>
                      </div>

                      <div className="p-5 flex flex-col gap-4">
                        {/* Questions asked */}
                        <div>
                          <p style={{ fontFamily: "'DM Mono', monospace" }}
                            className="text-[9px] tracking-widest uppercase text-gray-400 mb-3">
                            Questions Asked
                          </p>
                          <ul className="space-y-2.5">
                            {round.questions.map((q, qi) => (
                              <li key={qi} className="flex items-start gap-3">
                                <span
                                  style={{ fontFamily: "'DM Mono', monospace", color: cfg.color }}
                                  className="text-[10px] tracking-wide shrink-0 mt-0.5"
                                >
                                  Q{qi + 1}.
                                </span>
                                <span className="text-[13px] text-gray-700 leading-relaxed">
                                  {q}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Notes */}
                        <div
                          className="rounded-[3px] px-4 py-3"
                          style={{ background: `${cfg.color}06`, borderLeft: `2px solid ${cfg.color}40` }}
                        >
                          <p style={{ fontFamily: "'DM Mono', monospace" }}
                            className="text-[9px] tracking-widest uppercase text-gray-400 mb-1">
                            My Notes
                          </p>
                          <p className="text-[12px] text-gray-600 leading-relaxed">
                            {round.notes}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Tips */}
            <section>
              <SectionLabel label="Tips for Aspirants" icon={<Lightbulb size={13} className="text-[#c8440a]" />} />
              <div className="mt-4 border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
                {post.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-3.5
                    hover:bg-[#f5f3ee] transition-colors duration-150">
                    <span
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[10px] text-[#c8440a] shrink-0 mt-0.5"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Verdict */}
            <section>
              <SectionLabel label="Final Verdict" />
              <div
                className="mt-4 rounded-md p-5"
                style={{ background: `${outcome.color}08`, border: `1px solid ${outcome.color}25` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: outcome.color }}>{outcome.icon}</span>
                  <span
                    style={{ fontFamily: "'DM Mono', monospace", color: outcome.color }}
                    className="text-[10px] tracking-widest uppercase"
                  >
                    {post.outcome}
                  </span>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed">{post.verdict}</p>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* ── Scroll to top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-24 z-40 flex items-center justify-center
          w-8 h-8 rounded-full border transition-all duration-300"
        style={{
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          borderColor: "#1a1916",
          background: "#1a1916",
          color: "white",
          transform: showTop ? "translateY(0)" : "translateY(8px)",
        }}
        title="Back to top"
      >
        <ArrowUp size={12} />
      </button>
    </div>
  );
}

function SectionLabel({
  label, icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[11px] tracking-widest uppercase text-gray-400"
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-[#e8e6df]" />
    </div>
  );
}