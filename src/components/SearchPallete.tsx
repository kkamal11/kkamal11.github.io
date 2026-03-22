import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, ArrowElbowDownLeft } from "phosphor-react";
import { links } from "../utils/AppConstants";

type SearchPaletteProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchPalette({ open, onClose }: SearchPaletteProps) {
  const [query, setQuery]       = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef                = useRef<HTMLInputElement>(null);
  const navigate                = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset active index on query change
  useEffect(() => { setActiveIdx(0); }, [query]);

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filtered = links.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (to: string) => {
    navigate(to);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((p) => Math.min(p + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((p) => Math.max(p - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIdx]) {
      handleSelect(filtered[activeIdx].to);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
      style={{ background: "rgba(20,18,15,0.5)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white border border-[#e8e6df] rounded-md overflow-hidden
          shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* ── Input ── */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e8e6df]">
          <MagnifyingGlass size={15} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages…"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="flex-1 text-[13px] text-gray-700 placeholder:text-gray-400
              bg-transparent focus:outline-none"
          />
          <kbd
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[9px] tracking-widest uppercase text-gray-400
              border border-[#e8e6df] rounded-[2px] px-1.5 py-0.5 shrink-0"
          >
            esc
          </kbd>
        </div>

        {/* ── Results ── */}
        <ul className="py-1.5 max-h-64 overflow-y-auto">
          {filtered.length === 0 ? (
            <li
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="px-4 py-3 text-[11px] tracking-widest uppercase text-gray-400 text-center"
            >
              No results
            </li>
          ) : (
            filtered.map((link, i) => (
              <li key={link.to}>
                <button
                  onClick={() => handleSelect(link.to)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`w-full flex items-center justify-between px-4 py-2.5
                    transition-colors duration-100 cursor-pointer
                    ${activeIdx === i ? "bg-[#f0ede5]" : "hover:bg-[#f5f3ee]"}`}
                >
                  <span
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-[11px] tracking-widest uppercase text-gray-700"
                  >
                    {link.name}
                  </span>
                  {activeIdx === i && (
                    <ArrowElbowDownLeft size={12} className="text-gray-400 shrink-0" />
                  )}
                </button>
              </li>
            ))
          )}
        </ul>

        {/* ── Footer hints ── */}
        <div
          className="flex items-center justify-center gap-4 px-4 py-2 border-t border-[#e8e6df] bg-[#f5f3ee]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {[
            { key: "↑↓", label: "navigate" },
            { key: "↵",  label: "select"   },
            { key: "esc", label: "close"    },
          ].map((h) => (
            <span key={h.key} className="flex items-center gap-1 text-[9px] tracking-widest uppercase text-gray-400">
              <kbd className="border border-[#e8e6df] bg-white rounded-[2px] px-1 py-0.5 text-gray-500">
                {h.key}
              </kbd>
              {h.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}