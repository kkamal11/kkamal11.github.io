import { useState } from "react";
import { X } from "phosphor-react";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
};

export default function PimageCard({ src, alt = "", caption }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* ── Card ── */}
      <div className="flex flex-col items-center">
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative w-40 h-28 rounded-[6px] overflow-hidden cursor-zoom-in
            bg-[#e8e5de] border border-black/[0.08]
            transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:-translate-y-[3px] hover:scale-[1.02]
            hover:shadow-[0_12px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)]
            group"
        >
          {/* Skeleton shimmer while image loads */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-[#e0ddd5]" />
          )}

          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Bottom vignette — appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none" />

          {/* Top-left accent bar — slides in on hover */}
          <div className="absolute top-0 left-0 h-[2px] w-6 bg-[#c8440a]
            scale-x-0 group-hover:scale-x-100 origin-left
            transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10" />

          {/* Expand icon — fades in on hover */}
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white/90
            flex items-center justify-center
            opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
            transition-all duration-200 z-10">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#1a1916">
              <path d="M1 4.5V1.5H4M8 1.5H11V4.5M11 7.5V10.5H8M4 10.5H1V7.5" />
            </svg>
          </div>
        </div>

        {/* Optional caption */}
        {caption && (
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="mt-1.5 text-[9px] tracking-[0.06em] uppercase text-[#9a9890] text-center"
          >
            {caption}
          </p>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
          style={{ background: "rgba(20,18,15,0.85)" }}
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close label */}
          <button
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="absolute top-5 right-6 text-xl font-bold tracking-[0.1em] uppercase
              text-white/50 hover:text-white bg-transparent border-none cursor-pointer
              transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Full image */}
          <img
            src={src}
            alt={alt}
            className="max-w-[88vw] max-h-[82vh] rounded-[6px] border border-white/10"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}