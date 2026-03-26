import { useState, useRef } from "react";
import { skills as stack } from "../utils/Data";
import Reveal from "./Reveal";

const categories = ["All", "Frontend", "Backend", "Database", "AI/ML", "Tools", "Cloud"];

const categoryAccent: Record<string, { border: string; bg: string; dot: string }> = {
  All:      { border: "#1a1916", bg: "#f5f3ee", dot: "#1a1916" },
  Frontend: { border: "#c8440a", bg: "#fff5f0", dot: "#c8440a" },
  Backend:  { border: "#0a6bc8", bg: "#f0f6ff", dot: "#0a6bc8" },
  Database: { border: "#0a8c5a", bg: "#f0fff8", dot: "#0a8c5a" },
  "AI/ML":  { border: "#7c3ac8", bg: "#f8f0ff", dot: "#7c3ac8" },
  Tools:    { border: "#b87d0a", bg: "#fffbf0", dot: "#b87d0a" },
  Cloud:    { border: "#0a7ab8", bg: "#f0faff", dot: "#0a7ab8" },
};

export default function MySkills() {
  const DEFAULT_COUNT = 24;
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? stack
      : stack.filter((s) => s.category === activeCategory);

  const visibleSkills = expanded || activeCategory !== "All"
    ? filteredSkills
    : filteredSkills.slice(0, DEFAULT_COUNT);

  const handleSelectedCategory = (cat: string) => {
    setActiveCategory(cat);
  };

  const count = filteredSkills.length;

  return (
    <section className="bg-[#F8F8F8] pb-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900"
          >
            My <em className="text-[#c8440a]">Skills</em>
          </h1>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            {count} {activeCategory === "All" ? "technologies" : `in ${activeCategory}`}
          </span>
        </div>
      <div className="max-w-6xl mx-auto">
      <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => {
              const acc = categoryAccent[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectedCategory(cat)}
                  style={
                    isActive
                      ? {
                          background: acc.bg,
                          borderColor: acc.border,
                          color: acc.border,
                        }
                      : {}
                  }
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm border transition-all duration-200 hover:cursor-pointer ${activeCategory === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                >
                  {isActive && (
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: acc.dot }}
                    ></span>
                  )}
                  {cat}
                </button>
              )
            })}
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-16">
          <div className="flex flex-wrap gap-3 justify-center will-change-transform">
            {visibleSkills.map((item) => (
              <SkillPill
                key={item.name}
                item={item}
                activeCategory={activeCategory}
              />
            ))}
          </div>
        </div>
      </Reveal>

        {count > DEFAULT_COUNT &&
          <div className="flex items-center justify-center mt-10">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="border border-gray-500 uppercase px-6 py-2.5 rounded-md text-[11px] tracking-wide text-gray-700 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {expanded ? "Show Less" : "Expand All"}
            </button>
          </div>
        }
        </div>
    </section>
  );
}

function SkillPill({
  item,
  activeCategory,
}: {
  item: { name: string; icon: string; category: string };
  activeCategory: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isActive =
    activeCategory === "All" || item.category === activeCategory;

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.09}px, ${
      y * 0.09
    }px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`
        group flex items-center gap-2
        px-4 py-2 rounded-2xl
        bg-white border
        text-xs uppercase tracking-wide
        cursor-default
        transition-all duration-500 ease-out
        ${
          isActive
            ? `
              text-gray-700
              border-gray-300
              opacity-100
              scale-100
              shadow-[0_2px_10px_rgba(0,0,0,0.06)]
            `
            : `
              text-gray-400
              border-gray-200
              opacity-35
              scale-[0.97]
            `
        }
        hover:shadow-md
      `}
    >
      <img
        src={item.icon}
        alt={item.name}
        className={`w-4 h-4 object-contain transition-all duration-500 ${
          isActive ? "opacity-90" : "opacity-40"
        }`}
      />
      <span>{item.name}</span>
      </div>
  );
}


