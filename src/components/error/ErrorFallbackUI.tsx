import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowClockwise, WarningCircle } from "phosphor-react";

type Props = {
  error?: Error;
};

const FallbackUI: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Corner marks */}
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gray-200" />
      <span className="absolute top-5 right-5 w-4 h-4 border-t border-r border-gray-200" />
      <span className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-gray-200" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gray-200" />

      <div className="w-full max-w-lg flex flex-col items-center gap-8 text-center">

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[#f5f3ee] border border-[#e8e6df] flex items-center justify-center">
          <WarningCircle size={24} className="text-[#c8440a]" weight="duotone" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center justify-center gap-2"
          >
            <span className="w-4 h-px bg-gray-300 inline-block" />
            Error
            <span className="w-4 h-px bg-gray-300 inline-block" />
          </span>
          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900 leading-tight"
          >
            Something went <em className="text-[#c8440a]">wrong</em>.
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm mx-auto">
            An unexpected error occurred. You can go back home or reload the page.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase
              text-gray-900 border border-gray-900 px-5 py-2.5 rounded-[3px]
              hover:bg-gray-900 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            <ArrowLeft size={12} />
            Go Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase
              text-gray-500 border border-[#e8e6df] px-5 py-2.5 rounded-[3px]
              hover:border-gray-900 hover:text-gray-900 transition-colors duration-150 cursor-pointer"
          >
            <ArrowClockwise size={12} />
            Reload
          </button>
        </div>

        {/* Dev error log */}
        {import.meta.env.VITE_APP_ENV === "DEV" && (
          <div className="w-full mt-2 border border-[#e8e6df] rounded-md overflow-hidden text-left">
            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f3ee] border-b border-[#e8e6df]">
              <span className="w-2 h-2 rounded-full bg-[#c8440a]" />
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-gray-400"
              >
                error stack trace
              </span>
            </div>
            <pre
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[11px] text-red-500 bg-white p-4 overflow-auto whitespace-pre-wrap leading-relaxed max-h-60"
            >
              {error?.stack || "No error details available."}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};

export default FallbackUI;