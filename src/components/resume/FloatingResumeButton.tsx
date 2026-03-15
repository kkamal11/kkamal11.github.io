import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "phosphor-react";

export default function FloatingResumeButton() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Link
      to="/resume"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "'DM Mono', monospace" }}
      className={`
        fixed right-5 bottom-6 z-50
        flex items-center gap-2
        border border-gray-900 bg-white text-gray-900
        rounded-[4px] overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:bg-gray-900 hover:text-white
        shadow-[0_4px_24px_rgba(0,0,0,0.10)]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Accent bar — left edge */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c8440a]
          transition-opacity duration-200"
        style={{ opacity: hovered ? 0 : 1 }}
      />

      <span className="flex items-center gap-2 px-3 py-2">
        <FileText
          size={14}
          weight={hovered ? "fill" : "regular"}
          className="shrink-0 transition-all duration-200"
        />
        <span className="text-[12px] tracking-wide uppercase">
          Resume
        </span>
      </span>
    </Link>
  );
}