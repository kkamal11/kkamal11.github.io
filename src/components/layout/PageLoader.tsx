import { useEffect, useState } from "react";

export default function PageLoader() {
  const [dot, setDot] = useState(0);

  // Cycle the active bar
  useEffect(() => {
    const t = setInterval(() => setDot((p) => (p + 1) % 3), 400);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="flex flex-col items-center gap-6">

        {/* Wordmark */}
        <div className="flex items-baseline gap-0.5">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-2xl font-light text-gray-900"
          >
            Kamal
          </span>
          <span className="text-2xl font-light text-[#c8440a]">.</span>
        </div>

        {/* Three bar indicator */}
        <div className="flex items-end gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1 rounded-full transition-all duration-300"
              style={{
                height: dot === i ? "20px" : "8px",
                background: dot === i ? "#c8440a" : "#e8e6df",
              }}
            />
          ))}
        </div>

        {/* Label */}
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[10px] tracking-widest uppercase text-gray-400"
        >
          Loading
        </span>
      </div>
    </div>
  );
}