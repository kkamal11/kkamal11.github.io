import { Wrench } from "phosphor-react";

const docs = [
  { label: "Python",     href: "https://docs.python.org/3/" },
  { label: "Flask",      href: "https://flask.palletsprojects.com/en/stable/" },
  { label: "FastAPI",    href: "https://fastapi.tiangolo.com/" },
  { label: "React",      href: "https://react.dev/" },
  { label: "Java",       href: "https://docs.oracle.com/en/java/" },
  { label: "SpringBoot", href: "https://docs.spring.io/spring-boot/index.html" },
  { label: "Vue.js",     href: "https://vuejs.org/guide/introduction.html" },
];

export default function Blogs() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Corner marks */}
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gray-200" />
      <span className="absolute top-5 right-5 w-4 h-4 border-t border-r border-gray-200" />
      <span className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-gray-200" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gray-200" />

      <div className="w-full max-w-md flex flex-col items-center gap-8 text-center">

        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-[#f5f3ee] border border-[#e8e6df] flex items-center justify-center">
          <Wrench size={18} className="text-[#c8440a]" weight="duotone" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center justify-center gap-2"
          >
            <span className="w-4 h-px bg-gray-300 inline-block" />
            Coming Soon
            <span className="w-4 h-px bg-gray-300 inline-block" />
          </span>

          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900 leading-tight"
          >
            Blogs under <em className="text-[#c8440a]">development</em>.
          </h1>

          <p className="text-[13px] text-gray-500 leading-relaxed max-w-sm mx-auto">
            Currently writing and curating technical blogs. In the meantime,
            explore the docs for the technologies I work with.
          </p>
        </div>

        {/* Doc links */}
        <div className="w-full border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
          {docs.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between px-5 py-3
                bg-white hover:bg-[#f5f3ee] transition-colors duration-150"
            >
              <span className="text-[13px] text-gray-700 group-hover:text-gray-900 transition-colors">
                {doc.label}
              </span>
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-gray-400
                  group-hover:text-[#c8440a] transition-colors flex items-center gap-1"
              >
                Docs
                <span className="transition-transform duration-150 group-hover:translate-x-0.5 inline-block">↗</span>
              </span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <span
          className="text-[10px] tracking-wide uppercase text-gray-400 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8440a] animate-pulse inline-block" />
          New articles coming soon
        </span>

      </div>
    </section>
  );
}