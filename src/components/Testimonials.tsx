import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { testimonials } from "../utils/Data";

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

const avatarColors = [
  { bg: "#f5f3ee", border: "#c8440a", text: "#c8440a" },
  { bg: "#f0f6ff", border: "#0a6bc8", text: "#0a6bc8" },
  { bg: "#f0fff8", border: "#0a8c5a", text: "#0a8c5a" },
  { bg: "#f8f0ff", border: "#7c3ac8", text: "#7c3ac8" },
  { bg: "#fffbf0", border: "#b87d0a", text: "#b87d0a" },
  { bg: "#fff0f5", border: "#c8406a", text: "#c8406a" },
];

const PER_PAGE = 4; // 2 rows × 2 cols

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const slice = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-white pb-14 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-5 border-b border-gray-900">
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900"
          >
            What People <em className="text-[#c8440a]">Say</em>
          </h2>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            {testimonials.length} testimonials
          </span>
        </div>

        {/* ── Cards grid — 2×2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:mx-20">
          {slice.map((t, i) => {
            const globalIdx = page * PER_PAGE + i;
            const color = avatarColors[globalIdx % avatarColors.length];
            return (
              <Reveal key={t.id} hiddenClass="opacity-0 translate-y-4">
                <div
                  className="group h-full bg-[#f5f3ee] border border-[#e8e6df] rounded-md
                    p-4 flex flex-col gap-3
                    hover:bg-white hover:border-gray-300
                    transition-all duration-300"
                >
                  {/* Quote mark */}
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}
                    className="text-3xl font-light text-[#e8e6df]
                      group-hover:text-[#c8440a]/20 transition-colors duration-300 select-none"
                  >
                    "
                  </span>

                  {/* Quote */}
                  <p className="text-[12px] text-gray-600 leading-relaxed flex-1 italic">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-[#e8e6df]" />

                  {/* Person row */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border"
                      style={{
                        background: color.bg,
                        borderColor: color.border,
                        color: color.text,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.05em",
                        fontWeight: 500,
                      }}
                    >
                      {initials(t.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-gray-900 leading-none truncate">
                        {t.name}
                      </p>
                      <p
                        style={{ fontFamily: "'DM Mono', monospace" }}
                        className="text-[9px] tracking-widest uppercase text-gray-400 mt-0.5 truncate"
                      >
                        {t.role}
                        <span className="text-[#d4d0c8] mx-1">·</span>
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-end gap-3 mt-5 sm:mx-20">
          {/* Page indicator */}
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400 mr-1"
          >
            {page + 1} / {totalPages}
          </span>

          {/* Prev */}
          <button
            onClick={() => canPrev && setPage((p) => p - 1)}
            disabled={!canPrev}
            className="flex items-center justify-center w-8 h-8 rounded-[3px]
              border transition-all duration-150"
            style={{
              borderColor: canPrev ? "#1a1916" : "#e8e6df",
              color:       canPrev ? "white" : "#d4d0c8",
              cursor:      canPrev ? "pointer" : "not-allowed",
              background:  canPrev ? "#1a1916" : "white",
            }}
          >
            <ArrowLeft size={13} />
          </button>

          {/* Next */}
          <button
            onClick={() => canNext && setPage((p) => p + 1)}
            disabled={!canNext}
            className="flex items-center justify-center w-8 h-8 rounded-[3px]
              border transition-all duration-150"
            style={{
              borderColor: canNext ? "#1a1916" : "#e8e6df",
              color:       canNext ? "white"   : "#d4d0c8",
              background:  canNext ? "#1a1916" : "white",
              cursor:      canNext ? "pointer" : "not-allowed",
            }}
          >
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}