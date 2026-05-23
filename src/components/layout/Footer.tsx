import { NavLink } from "react-router-dom";
import { SocialButton } from "../SocialButtons";
import Reveal from "../Reveal";
import { links } from "../../utils/AppConstants";
import { useState, useCallback } from "react";

// ── Light switch sound via Web Audio API (no audio file needed) ──
function playSwitch(on: boolean) {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    if (on) {
      // Turn ON — satisfying mechanical click + brief electrical buzz
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.connect(clickGain);
      clickGain.connect(ctx.destination);
      click.type = "square";
      click.frequency.setValueAtTime(800, ctx.currentTime);
      click.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);
      clickGain.gain.setValueAtTime(0.4, ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      click.start(ctx.currentTime);
      click.stop(ctx.currentTime + 0.04);

      const hum = ctx.createOscillator();
      const humGain = ctx.createGain();
      hum.connect(humGain);
      humGain.connect(ctx.destination);
      hum.type = "sawtooth";
      hum.frequency.setValueAtTime(120, ctx.currentTime + 0.04);
      humGain.gain.setValueAtTime(0.08, ctx.currentTime + 0.04);
      humGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      hum.start(ctx.currentTime + 0.04);
      hum.stop(ctx.currentTime + 0.25);

    } else {
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.connect(clickGain);
      clickGain.connect(ctx.destination);
      click.type = "square";
      click.frequency.setValueAtTime(200, ctx.currentTime);
      click.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.06);
      clickGain.gain.setValueAtTime(0.3, ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      click.start(ctx.currentTime);
      click.stop(ctx.currentTime + 0.06);
    }

    setTimeout(() => ctx.close(), 500);
  } catch {
    // Silently fail if audio not supported
  }
}

// ── Bulb SVG ─────────────────────────────────────────────────
function Bulb({ on, side }: { on: boolean; side: "l" | "r" }) {
  const id = `glow-${side}`;
  return (
    <svg viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {on && (
        <ellipse cx="11" cy="12" rx="11" ry="11"
          fill="rgba(255,220,100,0.25)" filter={`url(#${id})`} />
      )}
      <ellipse
        cx="11" cy="11" rx="7.5" ry="8"
        fill={on ? "#ffe066" : "#2a2a28"}
        stroke={on ? "#ffd700" : "rgba(255,255,255,0.2)"}
        strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }}
      />
      <path
        d="M8.5 14 Q11 11 13.5 14"
        stroke={on ? "#b87d0a" : "rgba(255,255,255,0.2)"}
        strokeWidth="1" fill="none" strokeLinecap="round"
        style={{ transition: "stroke 0.4s" }}
      />
      <rect x="8" y="18" width="6" height="1.5" rx="0.5"
        fill={on ? "#ffd700" : "rgba(255,255,255,0.15)"}
        style={{ transition: "fill 0.4s" }} />
      <rect x="8.5" y="20.5" width="5" height="1.5" rx="0.5"
        fill={on ? "#ffd700" : "rgba(255,255,255,0.12)"}
        style={{ transition: "fill 0.4s" }} />
      <defs>
        <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
    </svg>
  );
}

// ── Light button ─────────────────────────────────────────────
function LightButton({
  on, side, onClick,
}: {
  on: boolean;
  side: "left" | "right";
  onClick: () => void;
}) {
  const handle = useCallback(() => {
    playSwitch(!on);
    onClick();
  }, [on, onClick]);

  return (
    <button
      onClick={handle}
      className="absolute top-0 z-20 flex flex-col items-center cursor-pointer"
      style={{ [side]: "2rem", transform: "translateY(-1px)" }}
      title={on ? "Turn off" : "Turn on"}
    >
      {/* Wire */}
      <div
        className="w-px transition-colors duration-500"
        style={{
          height: "28px",
          background: on ? "rgba(255,220,120,0.6)" : "rgba(255,255,255,0.15)",
        }}
      />
      {/* Bulb */}
      <div className="relative" style={{ width: "26px", height: "30px" }}>
        <Bulb on={on} side={side === "left" ? "l" : "r"} />
        {/* Rays */}
        {on && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ animation: "bulbPulse 2s ease-in-out infinite" }}
          >
            {[[-14,-8],[14,-8],[0,-16],[-10,6],[10,6]].map(([x,y], i) => (
              <div
                key={i}
                className="absolute w-px rounded-full"
                style={{
                  height: "8px",
                  background: "rgba(255,220,100,0.5)",
                  left: `calc(50% + ${x}px)`,
                  top:  `calc(50% + ${y}px)`,
                  transform: `rotate(${i * 36}deg)`,
                  transformOrigin: "bottom center",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

// ── Footer ────────────────────────────────────────────────────
export default function Footer() {
  const [copied, setCopied]   = useState(false);
  const [leftOn, setLeftOn]   = useState(false);
  const [rightOn, setRightOn] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dev.kamal.kishor@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative w-full bg-[#111110] border-t border-white/8 overflow-hidden group"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8440a]/60 to-transparent" />

      {/* Left glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "1000px", height: "1000px",
          background: leftOn
            ? "radial-gradient(ellipse at top left, rgba(255,220,120,0.18) 0%, rgba(255,180,60,0.08) 40%, transparent 70%)"
            : "none",
          transition: "background 0.6s ease",
        }}
      />

      {/* Right glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "1000px", height: "1000px",
          background: rightOn
            ? "radial-gradient(ellipse at top right, rgba(255,220,120,0.18) 0%, rgba(255,180,60,0.08) 40%, transparent 70%)"
            : "none",
          transition: "background 0.6s ease",
        }}
      />

      {/* Both on — warm room tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: leftOn && rightOn ? "rgba(255,200,80,0.03)" : "transparent",
          transition: "background 0.8s ease",
        }}
      />

      {/* Light buttons */}
      <LightButton on={leftOn}  side="left"  onClick={() => setLeftOn((p) => !p)}  />
      <LightButton on={rightOn} side="right" onClick={() => setRightOn((p) => !p)} />

      {/* Decorative squares — left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-52 h-52 border border-white/10 rounded-xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:border-white/20 group-hover:rotate-3" />
        <div className="absolute inset-0 m-8 border border-white/6 rounded-xl transition-all duration-700 ease-out delay-75 group-hover:scale-110 group-hover:border-[#c8440a]/20 group-hover:-rotate-2" />
        <div className="absolute inset-0 m-16 border border-white/4 rounded-lg transition-all duration-700 ease-out delay-150 group-hover:scale-125 group-hover:border-white/10" />
      </div>

      {/* Decorative squares — right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-52 h-52 border border-white/10 rounded-xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:border-white/20 group-hover:-rotate-3" />
        <div className="absolute inset-0 m-8 border border-white/6 rounded-xl transition-all duration-700 ease-out delay-75 group-hover:scale-110 group-hover:border-[#c8440a]/20 group-hover:rotate-2" />
        <div className="absolute inset-0 m-16 border border-white/4 rounded-lg transition-all duration-700 ease-out delay-150 group-hover:scale-125 group-hover:border-white/10" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-6 items-start pb-12 border-b border-white/8">

          <Reveal hiddenClass="opacity-0 -translate-x-8">
            <div className="flex flex-col gap-8">
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                  className="text-3xl font-light text-white">
                  Kamal<span className="text-[#c8440a]">.</span>
                </p>
                <p style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase text-white/30 mt-1">
                  Software Engineer · Full Stack Developer
                </p>
              </div>

              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <NavLink key={link.to} to={link.to}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className={({ isActive }) =>
                      `text-[12px] tracking-widest uppercase transition-colors duration-200 ${
                        isActive ? "text-[#c8440a]" : "text-white/40 hover:text-white hover:scale-105"
                      }`
                    }
                  >{link.name}</NavLink>
                ))}
              </nav>

              <div className="flex flex-wrap gap-2">
                <SocialButton link="https://www.linkedin.com/in/kkamal11"             name="LinkedIn"   bgColor="blue"   />
                <SocialButton link="https://github.com/kkamal11"                       name="Github"     bgColor="gray"   />
                <SocialButton link="https://www.hackerrank.com/profile/kishorkamal7091" name="Hackerrank" bgColor="green"  />
                <SocialButton link="https://app.onlinedegree.iitm.ac.in/student/21F2000804" name="IIT Madras" bgColor="maroon" />
              </div>
            </div>
          </Reveal>

          <Reveal hiddenClass="opacity-0 translate-x-8">
            <div className="flex flex-col items-start md:items-end gap-3">
              <NavLink to="/contact">
                <span style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase text-white/30 flex items-center gap-2">
                  <span className="w-4 h-px bg-white/20 inline-block" />
                  Get in touch
                </span>
              </NavLink>

              <button onClick={copyEmail} className="group/email text-left cursor-pointer">
                <p style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.01em" }}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 group-hover/email:text-white transition-colors duration-200">
                  dev.kamal.kishor<span className="text-[#c8440a]">@gmail.com</span>
                </p>
                <span style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase mt-1 flex items-center gap-1.5">
                  {copied
                    ? <span className="text-emerald-400">✓ Copied</span>
                    : <span className="text-white/30 group-hover/email:text-white/60 transition-colors">Click to copy</span>
                  }
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal hiddenClass="opacity-0 translate-y-2">
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-wide text-white/25">
              © {new Date().getFullYear()} Kamal Kishor Chaurasiya. All rights reserved.
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-wide text-white/25">
              <NavLink to="/site"
                className="text-[9px] tracking-widest uppercase text-white/25 hover:text-white/60 transition-colors duration-200 hover:scale-105">
                Site Info
              </NavLink>
              {" · "}Built with{" "}
              <span className="text-blue-400/70">React</span>
              {" · "}
              <span className="text-cyan-400/70">TypeScript</span>
              {" · "}
              <span className="text-sky-400/70">Tailwind CSS</span>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes bulbPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
}