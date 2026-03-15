import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

const NotFoundPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden px-6"
    >
      {/* Corner marks */}
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gray-200" />
      <span className="absolute top-5 right-5 w-4 h-4 border-t border-r border-gray-200" />
      <span className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-gray-200" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gray-200" />
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-lg">

        {/* 404 — large editorial number */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.06em",
              lineHeight: 1,
              WebkitTextStroke: "1px #e8e6df",
            }}
            className="text-[10rem] md:text-[14rem] font-light text-transparent select-none"
          >
            4
            <span style={{ WebkitTextStroke: "1px #c8440a" }} className="text-transparent">
              0
            </span>
            4
          </span>
        </div>

        {/* Label + heading */}
        <div
          className="flex flex-col gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.25s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s",
          }}
        >
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center justify-center gap-2"
          >
            <span className="w-4 h-px bg-gray-300 inline-block" />
            Page not found
            <span className="w-4 h-px bg-gray-300 inline-block" />
          </span>

          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-3xl md:text-4xl font-light text-gray-900 leading-tight"
          >
            Looks like you're <em className="text-[#c8440a]">lost</em>.
          </h1>

          <p className="text-[14px] text-gray-500 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-wide uppercase
              text-gray-900 border border-gray-900 px-6 py-2.5 rounded-[3px]
              hover:bg-gray-900 hover:text-white transition-colors duration-150"
          >
            <ArrowLeft size={12} />
            Back to Home
          </Link>
        </div>

        {/* Wordmark watermark */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none"
          style={{
            opacity: visible ? 0.04 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <span
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.04em" }}
            className="text-[8rem] font-light text-gray-900 whitespace-nowrap"
          >
            Kamal.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;