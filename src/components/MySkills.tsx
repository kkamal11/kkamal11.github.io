import { useState } from "react";
import { skills as stack } from "../utils/Data"
import Reveal from "./Reveal";

export default function MySkills() {
  const DEFAULT_COUNT = 24;
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? stack : stack.slice(0, DEFAULT_COUNT);

  return (
    <section className="bg-[#F8F8F8] pb-12">
      <h1 className="text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-8">
        My Skill Highlights
      </h1>
      <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
          <div className="max-w-6xl mx-auto px-4 sm:px-16">
            <div className="flex flex-wrap gap-3 justify-center">
              {visibleSkills.map((item, i) => (
                <SkillPill key={i} item={item} />
              ))}
            </div>
        </div>
      </Reveal>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="border border-gray-800 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer"
        >
          {expanded ? "Show Less" : "Expand All"}
        </button>
      </div>
    </section>
  );
}

function SkillPill({ item }: { item: { name: string; icon: string } }) {
  return (
    <div
      className="
        group flex items-center gap-2
        px-4 py-2
        rounded-2xl
        bg-white
        border border-gray-200
        text-xs uppercase tracking-wide
        text-gray-600
        transition-all duration-200
        hover:border-gray-400
        hover:text-gray-900
        hover:-translate-y-[2px]
        hover:shadow-sm
        cursor-default
      "
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
