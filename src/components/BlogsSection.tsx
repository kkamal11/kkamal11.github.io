import { blogs } from "../utils/Data";
import { type Blog } from "../utils/Data";
import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
import { useState } from "react";

export default function BlogsSection() {
  return (
    <section
      className="bg-white pb-12 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-gray-900">
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900"
          >
            Technology <em className="text-[#c8440a]">Insights</em>
          </h2>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            {blogs.length} articles
          </span>
        </div>

        {/* ── Cards grid — max-w constrains card size ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog, i) => (
            <Reveal key={blog.id} hiddenClass="opacity-0 translate-y-8">
              <BlogCard blog={blog} index={i} />
            </Reveal>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex items-center justify-center mt-10">
          <NavLink
            to="/blog"
          className="border border-gray-400 text-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
          >
            View All Articles →
          </NavLink>
        </div>

      </div>
    </section>
  );
}

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [hovered, setHovered] = useState(false);

  const accents = ["#c8440a", "#0a6bc8", "#0a8c5a", "#7c3ac8", "#b87d0a"];
  const accent = accents[index % accents.length];

  return (
    <NavLink
      to={`/blog/${blog.id}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-full flex flex-col bg-[#f5f3ee] border border-[#e8e6df] rounded-md
          transition-all duration-300"
        style={hovered ? { borderColor: accent, background: "#fff" } : {}}
      >
        {/* Image — fixed height, overflow-hidden on THIS div only */}
        <div
          className="relative w-full overflow-hidden rounded-t-md"
          style={{ height: "180px", flexShrink: 0 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.5s ease-out",
            }}
          />
          {/* Accent bar */}
          <div
            className="absolute top-0 left-0 h-[2px] w-full origin-left"
            style={{
              background: accent,
              transform: hovered ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.3s ease",
            }}
          />
          {/* Read time */}
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="absolute bottom-2 right-2 text-[9px] tracking-widest uppercase
              bg-white/90 rounded-[2px] px-2 py-0.5 text-gray-500"
          >
            {blog.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-2.5">

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {blog.category.map((cat, i) => (
              <span
                key={cat + String(i)}
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df]
                  rounded-[2px] px-2 py-0.5 text-gray-400"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="text-[13px] font-medium leading-snug transition-colors duration-200"
            style={{ color: hovered ? accent : "#111827" }}
          >
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-gray-500 leading-relaxed flex-1 line-clamp-3">
            {blog.description}
          </p>

          {/* Read more */}
          <div
            style={{ fontFamily: "'DM Mono', monospace", color: accent }}
            className="text-[11px] tracking-widest uppercase flex items-center gap-1
            transition-opacity duration-200 mt-1"
          >
            Read article
            <span
              style={{
                display: "inline-block",
                transform: hovered ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.2s",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}