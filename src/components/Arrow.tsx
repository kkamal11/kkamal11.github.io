import { useEffect, useRef, useState } from "react";

export default function Arrow() {
  const pathRef   = useRef<SVGPathElement>(null);
  const dotRef    = useRef<SVGCircleElement>(null);
  const svgRef    = useRef<SVGSVGElement>(null);
  const rafRef    = useRef<number>(0);
  const stateRef  = useRef<"auto" | "scrub">("auto");
  const progressRef = useRef(0);   // current position 0..1
  const cycleStartRef = useRef<number | null>(null);

  const [drawn, setDrawn] = useState(false);

  // ── helpers ──────────────────────────────────────────────
  const ease = (t: number) => t * t * (3 - 2 * t);

  const placeDot = (progress: number, opacity: number) => {
    const path = pathRef.current;
    const dot  = dotRef.current;
    if (!path || !dot) return;
    const length = path.getTotalLength();
    const pt = path.getPointAtLength(progress * length);
    dot.setAttribute("cx", String(pt.x));
    dot.setAttribute("cy", String(pt.y));
    dot.style.opacity = String(Math.max(0, Math.min(1, opacity)));
  };

  // ── draw-on + auto loop ──────────────────────────────────
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray  = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const TRAVEL = 1400;
    const PAUSE  = 400;
    const CYCLE  = TRAVEL + PAUSE;

    const drawDelay = setTimeout(() => {
      setDrawn(true);

      const loop = (now: number) => {
        if (stateRef.current === "scrub") {
          // Paused for scrubbing — just keep rAF alive
          rafRef.current = requestAnimationFrame(loop);
          return;
        }

        // Auto mode
        if (!cycleStartRef.current) cycleStartRef.current = now;
        const elapsed = (now - cycleStartRef.current) % CYCLE;

        if (elapsed < TRAVEL) {
          const t       = ease(elapsed / TRAVEL);
          const fadeOut = elapsed / TRAVEL > 0.85
            ? 1 - (elapsed / TRAVEL - 0.85) / 0.15
            : 1;
          progressRef.current = t;
          placeDot(t, fadeOut);
        } else {
          placeDot(0, 0);
          progressRef.current = 0;
        }

        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    }, 300);

    return () => {
      clearTimeout(drawDelay);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── mouse scrub ──────────────────────────────────────────
  const handleMouseEnter = () => {
    stateRef.current = "scrub";
    cycleStartRef.current = null; // reset cycle so resume starts fresh
    placeDot(progressRef.current, 1);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg  = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const rect   = svg.getBoundingClientRect();
    const length = path.getTotalLength();

    // Convert mouse Y into a 0..1 progress along the path
    // Arrow goes from bottom (y≈190 in viewBox) to top (y≈60)
    // Map mouse Y within SVG bounds → invert so top=1
    const relY    = (e.clientY - rect.top) / rect.height;         // 0=top 1=bottom
    const progress = Math.max(0, Math.min(1, 1 - relY));          // invert: top=1

    progressRef.current = progress;
    placeDot(progress, 1);
  };

  const handleMouseLeave = () => {
    stateRef.current = "auto";
    // Resume cycle from current progress position
    // Back-calculate a cycleStart so the dot continues from where it is
    const TRAVEL = 1400;
    const PAUSE  = 400;
    const CYCLE  = TRAVEL + PAUSE;
    const currentElapsed = progressRef.current * TRAVEL; // approx
    cycleStartRef.current = performance.now() - currentElapsed;
  };

  return (
    <div className="w-72 h-72 select-none">
      <svg
        ref={svgRef}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full cursor-crosshair"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Curve */}
        <path
          ref={pathRef}
          d="M35 190 C75 120, 150 120, 190 60"
          stroke="#d4d0c8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDashoffset: drawn ? 0 : undefined,
            transition: drawn
              ? "stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)"
              : "none",
          }}
        />

        {/* Arrowhead */}
        <path
          d="M175 55 L205 50 L195 80"
          stroke="#d4d0c8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: drawn ? 1 : 0,
            transition: "opacity 0.3s ease 0.9s",
          }}
        />

        {/* Travelling dot */}
        <circle
          ref={dotRef}
          cx="35"
          cy="190"
          r="5"
          fill="#c8440a"
          opacity="0"
        />
      </svg>
    </div>
  );
}