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
    const DEFAULT_COUNT = 15;
    const [expanded, setExpanded] = useState(false);
    const visibleSkills = expanded ? stack : stack.slice(0, DEFAULT_COUNT);
    function toggleSkills() {
        setExpanded(prev => !prev);
    }

  return (
    <section className="bg-[#F8F8F8] py-8">
      <h1 className="text-3xl text-gray-800 font-semibold text-center mb-6">
        My Skill Highlights
      </h1>

      <div className="max-w-7xl px-2 sm:px-4 md:px-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleSkills.map((item) => (
            <SkillCard key={item.name} item={item} />
        ))}
        </div>
      </div>
          <div className="flex items-center justify-center mt-12">
            <button
            onClick={toggleSkills}
            className="border border-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
            >
            {expanded ? "Show Less" : "Expand All"}
            </button>
        </div>
    </section>
  );
}

function SkillCard({ item }: { item: { name: string; icon: string } }) {
  return (
    <div
      className="
        relative p-4 rounded-lg
        bg-gradient-to-br from-[#989898] via-[#686868] to-[#787777]
        border border-white/5
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        flex flex-col items-center justify-center gap-4
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
        cursor-pointer group
      "
    >
      {/* subtle gloss */}
      <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <img
        src={item.icon}
        alt={item.name}
        className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <p className="text-xs tracking-widest text-gray-100 uppercase font-medium">
        {item.name}
      </p>
    </div>
  );
}
