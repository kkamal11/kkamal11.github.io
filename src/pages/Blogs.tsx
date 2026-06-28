import { useState } from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";
import {
  Code, TreeStructure, Brain, Cpu, Cloud,
  Briefcase, Books, ArrowRight, Clock, Tag,
} from "phosphor-react";

// ── Types ─────────────────────────────────────────────────────

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured?: boolean;
};

// ── Categories — add new ones here freely ────────────────────

export const CATEGORIES = [
  { id: "all",               label: "All",               icon: <Books size={14} /> },
  { id: "programming",       label: "Programming",       icon: <Code size={14} /> },
  { id: "system-design",     label: "System Design",     icon: <TreeStructure size={14} /> },
  { id: "cs-concepts",       label: "CS Concepts",       icon: <Cpu size={14} /> },
  { id: "ai-ml",             label: "AI / ML",           icon: <Brain size={14} /> },
  { id: "cloud-devops",      label: "Cloud & DevOps",    icon: <Cloud size={14} /> },
  { id: "interview",         label: "Interview Exp.",    icon: <Briefcase size={14} /> },
];

// ── Sample posts — replace with your real data ───────────────

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Understanding the Event Loop in JavaScript",
    excerpt: "A deep dive into how JavaScript handles asynchronous code, the call stack, microtasks, and macrotasks — with visual examples.",
    category: "programming",
    tags: ["JavaScript", "Async", "Node.js"],
    readTime: "8 min read",
    date: "2024-05-12",
    featured: true,
  },
  {
    id: "2",
    title: "Designing a URL Shortener at Scale",
    excerpt: "Walking through the system design of a URL shortener — from hashing strategies and database choices to handling billions of redirects.",
    category: "system-design",
    tags: ["System Design", "Databases", "Scalability"],
    readTime: "12 min read",
    date: "2024-04-28",
    featured: true,
  },
  {
    id: "3",
    title: "My Oracle Interview Experience",
    excerpt: "A candid account of my interview process at Oracle — rounds, questions asked, what went well, and what I'd do differently.",
    category: "interview",
    tags: ["Oracle", "Interview", "SDE"],
    readTime: "6 min read",
    date: "2024-03-15",
    featured: true,
  },
  {
    id: "4",
    title: "Transformers Explained Intuitively",
    excerpt: "Breaking down the transformer architecture — attention mechanisms, positional encoding, and why they changed everything in NLP.",
    category: "ai-ml",
    tags: ["AI", "Deep Learning", "NLP"],
    readTime: "14 min read",
    date: "2024-02-20",
  },
  {
    id: "5",
    title: "CAP Theorem: A Practical Guide",
    excerpt: "What CAP theorem actually means for building distributed systems, with concrete examples from Redis, Cassandra, and DynamoDB.",
    category: "cs-concepts",
    tags: ["Distributed Systems", "Databases"],
    readTime: "10 min read",
    date: "2024-01-30",
  },
  {
    id: "6",
    title: "Docker & Kubernetes from Zero",
    excerpt: "A practical introduction to containerisation and orchestration — from writing your first Dockerfile to deploying on a Kubernetes cluster.",
    category: "cloud-devops",
    tags: ["Docker", "Kubernetes", "DevOps"],
    readTime: "16 min read",
    date: "2024-01-10",
  },
];

// ── Helpers ───────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

const categoryAccent: Record<string, string> = {
  programming:   "#0a6bc8",
  "system-design": "#c8440a",
  "cs-concepts": "#0a8c5a",
  "ai-ml":       "#7c3ac8",
  "cloud-devops": "#0a9eb8",
  interview:     "#b87d0a",
};

// ── Sub-components ────────────────────────────────────────────

function CategoryPill({
  cat, active, onClick,
}: {
  cat: typeof CATEGORIES[0];
  active: boolean;
  onClick: () => void;
}) {
  const accent = categoryAccent[cat.id] ?? "#1a1916";
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'DM Mono', monospace",
        borderColor: active ? accent : "#e8e6df",
        color:       active ? accent : "#6b6b66",
        background:  active ? `${accent}12` : "transparent",
        transition: "border-color 0.15s, color 0.15s, background 0.15s",
      }}
      className="flex items-center gap-1.5 border rounded-[3px] px-3 py-1.5
        text-[9px] tracking-widest uppercase cursor-pointer whitespace-nowrap"
    >
      {cat.icon}
      {cat.label}
    </button>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const accent = categoryAccent[post.category] ?? "#1a1916";
  const cat    = CATEGORIES.find((c) => c.id === post.category);

  return (
    <NavLink
      to={post.category != `interview` ? `/blog/${post.id}` : `/interview/${post.id}`}
      className="group block h-full bg-[#f5f3ee] border border-[#e8e6df] rounded-md p-5
        hover:bg-white hover:border-gray-300 hover:shadow-sm
        transition-all duration-300"
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-full"
        style={{ background: accent }}
      />

      {/* Category */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-gray-400" style={{ color: accent }}>{cat?.icon}</span>
        <span
          style={{ fontFamily: "'DM Mono', monospace", color: accent }}
          className="text-[9px] tracking-widest uppercase"
        >
          {cat?.label}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.01em" }}
        className="text-[15px] font-medium text-gray-900 leading-snug mb-2
          group-hover:text-gray-700 transition-colors duration-200"
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[12px] text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="flex items-center gap-1 text-[10px] text-gray-400"
          >
            <Clock size={10} /> {post.readTime}
          </span>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] text-gray-400"
          >
            {formatDate(post.date)}
          </span>
        </div>
        <ArrowRight
          size={14}
          className="text-gray-300 group-hover:text-gray-600
            group-hover:translate-x-0.5 transition-all duration-200"
        />
      </div>
    </NavLink>
  );
}

function PostRow({ post }: { post: BlogPost }) {
  const accent = categoryAccent[post.category] ?? "#1a1916";
  const cat    = CATEGORIES.find((c) => c.id === post.category);

  return (
    <NavLink
      to={`/blog/${post.id}`}
      className="group flex items-start justify-between gap-4 py-4
        border-b border-[#e8e6df] last:border-0
        hover:bg-[#f5f3ee] -mx-4 px-4 rounded-[3px]
        transition-colors duration-150"
    >
      <div className="flex items-start gap-3 min-w-0">
        {/* Accent dot */}
        <span
          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: accent }}
        />
        <div className="min-w-0">
          <h3
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[13px] font-medium text-gray-900 leading-snug mb-0.5
              group-hover:text-[#c8440a] transition-colors duration-150 truncate"
          >
            {post.title}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              style={{ fontFamily: "'DM Mono', monospace", color: accent }}
              className="text-[9px] tracking-widest uppercase"
            >
              {cat?.label}
            </span>
            <span className="text-gray-300 text-[10px]">·</span>
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] text-gray-400"
            >
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[10px] text-gray-400 hidden sm:block"
        >
          {formatDate(post.date)}
        </span>
        <ArrowRight
          size={12}
          className="text-gray-300 group-hover:text-[#c8440a]
            group-hover:translate-x-0.5 transition-all duration-150"
        />
      </div>
    </NavLink>
  );
}

// ── Main Page ─────────────────────────────────────────────────

export default function BlogHome() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery]       = useState("");

  const filtered = POSTS.filter((p) => {
    const matchCat  = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = searchQuery
      ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchCat && matchSearch;
  });

  const featured = filtered.filter((p) => p.featured).slice(0, 3);
  const rest     = filtered.filter((p) => !p.featured || featured.indexOf(p) === -1);

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white px-6 md:px-12 py-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <Reveal hiddenClass="opacity-0 translate-y-6">
          <div className="pb-8 border-b border-gray-900 mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center gap-2 mb-3"
                >
                  <span className="w-4 h-px bg-gray-300 inline-block" />
                  Technical Writing
                </span>
                <h1
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                  className="text-4xl md:text-5xl font-light text-gray-900 leading-tight"
                >
                  Thoughts &amp; <em className="text-[#c8440a]">Insights</em>
                </h1>
                <p className="text-[14px] text-gray-500 leading-relaxed mt-3 max-w-lg">
                  Deep dives into programming, system design, CS concepts, AI, cloud, and interview experiences.
                </p>
              </div>

              {/* Search */}
              <div className="relative shrink-0 w-full md:w-64">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles…"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="w-full border border-[#e8e6df] rounded-[3px] pl-9 pr-4 py-2.5
                    text-[12px] text-gray-700 bg-[#fafaf8] placeholder:text-gray-400
                    focus:outline-none focus:border-gray-900 transition-colors duration-150"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Category filter ── */}
        <Reveal hiddenClass="opacity-0 translate-y-4">
          <div className="flex gap-2 flex-wrap mb-10 pb-6 border-b border-[#e8e6df]">
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat.id}
                cat={cat}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="ml-auto self-center text-[10px] tracking-wide text-gray-400"
            >
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </Reveal>

        {filtered.length === 0 ? (

          /* ── Empty state ── */
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Books size={32} className="text-[#e8e6df]" />
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[11px] tracking-widest uppercase text-gray-400"
            >
              No articles found
            </p>
          </div>

        ) : (
          <div className="flex flex-col gap-12">

            {/* ── Featured cards ── */}
            {featured.length > 0 && (
              <Reveal hiddenClass="opacity-0 translate-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[10px] tracking-widest uppercase text-gray-400"
                    >
                      Featured
                    </span>
                    <div className="flex-1 h-px bg-[#e8e6df]" />
                  </div>
                  <div className={`grid gap-4 ${
                    featured.length === 1 ? "grid-cols-1 max-w-sm" :
                    featured.length === 2 ? "grid-cols-1 md:grid-cols-2" :
                    "grid-cols-1 md:grid-cols-3"
                  }`}>
                    {featured.map((post) => (
                      <FeaturedCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* ── All posts list ── */}
            {rest.length > 0 && (
              <Reveal hiddenClass="opacity-0 translate-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[10px] tracking-widest uppercase text-gray-400"
                    >
                      {featured.length > 0 ? "More Articles" : "All Articles"}
                    </span>
                    <div className="flex-1 h-px bg-[#e8e6df]" />
                  </div>
                  <div className="border border-[#e8e6df] rounded-md overflow-hidden px-4">
                    {rest.map((post) => (
                      <PostRow key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* ── Tags cloud ── */}
            <Reveal hiddenClass="opacity-0 translate-y-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} className="text-gray-400" />
                  <span
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[10px] tracking-widest uppercase text-gray-400"
                  >
                    Topics
                  </span>
                  <div className="flex-1 h-px bg-[#e8e6df]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(POSTS.flatMap((p) => p.tags))).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[9px] tracking-widest uppercase
                        bg-[#f5f3ee] border border-[#e8e6df] rounded-[2px]
                        px-2.5 py-1 text-gray-500
                        hover:bg-[#1a1916] hover:border-[#1a1916] hover:text-white
                        transition-all duration-150 cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        )}

      </div>
    </div>
  );
}