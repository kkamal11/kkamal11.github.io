import { useState } from "react";
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
          <div className="flex flex-wrap gap-3 justify-center">
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
  const isActive =
    activeCategory === "All" || item.category === activeCategory;

  return (
    <div
      className={`
        group flex items-center gap-2
        px-4 py-2 rounded-2xl
        bg-white border border-gray-200
        text-xs uppercase tracking-wide
        transition-all duration-200 cursor-default
        hover:-translate-y-[2px] hover:shadow-sm

        ${
          isActive
            ? "text-gray-700 opacity-100 hover:border-gray-400"
            : "text-gray-400 opacity-30"
        }
      `}
    >
      <img
        src={item.icon}
        alt={item.name}
        className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100"
      />
      <span>{item.name}</span>
    </div>
  );
}
