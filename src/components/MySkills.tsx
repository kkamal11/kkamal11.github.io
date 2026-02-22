import { useState, useRef } from "react";
import { skills as stack } from "../utils/Data";
import Reveal from "./Reveal";

const categories = ["All", "Frontend", "Backend", "Database", "AI/ML", "Tools", "Cloud"];

export default function MySkills() {
  const DEFAULT_COUNT = 24;
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleSkills = expanded ? stack : stack.slice(0, DEFAULT_COUNT);

  const handleSelectedCategory = (category: string) => {
    setExpanded(true);
    setActiveCategory(category);
  }

  return (
    <section className="bg-[#F8F8F8] pb-12">
      <h1 className="text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-6">
        My Skill Highlights
      </h1>
      <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm border transition-all duration-200 hover:cursor-pointer ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
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

      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="border border-gray-800 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer"
        >
          {expanded ? "Show Less" : "Expand All"}
        </button>
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


