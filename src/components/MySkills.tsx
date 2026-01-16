import { useState } from "react";

const stack = [
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "Tailwind CSS", icon: "/icons/tcss.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "React JS", icon: "/icons/react.svg" },
    { name: "Vue JS", icon: "/icons/vue.svg" },
    { name: "React JS", icon: "/icons/react.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "C", icon: "/icons/c.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "Flask", icon: "/icons/flask.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Spring Boot", icon: "/icons/sping.svg" },
    { name: "Microservices", icon: "/icons/msc.svg" },
    { name: "Node JS", icon: "/icons/node.svg" },
    { name: "Numpy", icon: "/icons/python.svg" },
    { name: "Pandas", icon: "/icons/python.svg" },
    { name: "Matplotlib", icon: "/icons/python.svg" },
    { name: "sklearn", icon: "/icons/python.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
];

export default function MySkills() {
  const DEFAULT_COUNT = 25;
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? stack : stack.slice(0, DEFAULT_COUNT);

  return (
    <section className="bg-[#F8F8F8] pb-12">
      <h1 className="text-2xl sm:text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-8">
        My Skill Highlights
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {visibleSkills.map((item, i) => (
            <SkillPill key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="border border-gray-900 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition cursor-pointer"
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
