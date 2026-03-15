import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";

const VisionComp: React.FC = () => {
  return (
    <Reveal hiddenClass="opacity-0 translate-y-8">
      <div
        style={{ fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden" }}
        className="bg-[#efeded] border-y border-[#e8e6df] py-16 px-6"
      >
        <div className="relative max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

          {/* Label */}
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center gap-2"
          >
            <span className="w-4 h-px bg-gray-400 inline-block" />
            Let's Collaborate
            <span className="w-4 h-px bg-gray-400 inline-block" />
          </span>

          {/* Heading */}
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight"
          >
            Got a <em className="text-[#c8440a]">Vision</em>?<br />
            Let's Bring it to Life.
          </h2>

          {/* Body */}
          <p className="text-[14px] text-gray-500 leading-relaxed max-w-md">
            Always excited to collaborate on new and innovative projects — whether starting from scratch or redefining something existing.
          </p>

          {/* CTA */}
          <div className="pt-2">
              <NavLink to={'/contact'} className="border border-gray-400 px-7 py-3 rounded-md text-sm text-gray-800 hover:bg-black hover:text-white transition">
                Book a Call
            </NavLink>
          </div>

        </div>
      </div>
    </Reveal>
  );
};

export default VisionComp;