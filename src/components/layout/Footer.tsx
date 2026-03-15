import { NavLink } from "react-router-dom";
import { SocialButton } from "../SocialButtons";
import Reveal from "../Reveal";
import { links } from "../../utils/AppConstants";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

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
      {/* ── Dot grid ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8440a]/60 to-transparent" />

      {/* ── Decorative squares — left ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-52 h-52 border border-white/10 rounded-xl
          transition-all duration-700 ease-out
          group-hover:scale-105 group-hover:border-white/20 group-hover:rotate-3" />
        <div className="absolute inset-0 m-8 border border-white/6 rounded-xl
          transition-all duration-700 ease-out delay-75
          group-hover:scale-110 group-hover:border-[#c8440a]/20 group-hover:-rotate-2" />
        <div className="absolute inset-0 m-16 border border-white/4 rounded-lg
          transition-all duration-700 ease-out delay-150
          group-hover:scale-125 group-hover:border-white/10" />
      </div>

      {/* ── Decorative squares — right ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-52 h-52 border border-white/10 rounded-xl
          transition-all duration-700 ease-out
          group-hover:scale-105 group-hover:border-white/20 group-hover:-rotate-3" />
        <div className="absolute inset-0 m-8 border border-white/6 rounded-xl
          transition-all duration-700 ease-out delay-75
          group-hover:scale-110 group-hover:border-[#c8440a]/20 group-hover:rotate-2" />
        <div className="absolute inset-0 m-16 border border-white/4 rounded-lg
          transition-all duration-700 ease-out delay-150
          group-hover:scale-125 group-hover:border-white/10" />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-6 items-start pb-12 border-b border-white/8">

          {/* Left — wordmark + nav + socials */}
          <Reveal hiddenClass="opacity-0 -translate-x-8">
            <div className="flex flex-col gap-8">

              {/* Wordmark */}
              <div>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                  className="text-3xl font-light text-white"
                >
                  Kamal<span className="text-[#c8440a]">.</span>
                </p>
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase text-white/30 mt-1"
                >
                  Software Engineer · Full Stack Developer 
                </p>
              </div>

              {/* Nav */}
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className={({ isActive }) =>
                      `text-[12px] tracking-widest uppercase transition-colors duration-200 ${
                        isActive ? "text-[#c8440a]" : "text-white/40 hover:text-white hover:scale-105"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Socials */}
              <div className="flex flex-wrap gap-2">
                <SocialButton link="https://www.linkedin.com/in/kkamal11" name="LinkedIn" bgColor="blue"   />
                <SocialButton link="https://github.com/kkamal11" name="Github" bgColor="gray"   />
                <SocialButton link="https://www.hackerrank.com/profile/kishorkamal7091" name="Hackerrank" bgColor="green"  />
                <SocialButton link="https://app.onlinedegree.iitm.ac.in/student/21F2000804" name="IIT Madras" bgColor="maroon" />
              </div>
            </div>
          </Reveal>

          {/* Right — email */}
          <Reveal hiddenClass="opacity-0 translate-x-8">
            <div className="flex flex-col items-start md:items-end gap-3">
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-white/30 flex items-center gap-2"
              >
                <span className="w-4 h-px bg-white/20 inline-block" />
                Get in touch
              </span>

              <button onClick={copyEmail} className="group/email text-left">
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.01em" }}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white/80
                    group-hover/email:text-white transition-colors duration-200"
                >
                  dev.kamal.kishor
                  <span className="text-[#c8440a]">@gmail.com</span>
                </p>
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[10px] tracking-widest uppercase mt-1 flex items-center gap-1.5"
                >
                  {copied ? (
                    <span className="text-emerald-400">✓ Copied</span>
                  ) : (
                    <span className="text-white/30 group-hover/email:text-white/60 transition-colors cursor-pointer">
                      Click to copy
                    </span>
                  )}
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal hiddenClass="opacity-0 translate-y-2">
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-wide text-white/25"
            >
              © {new Date().getFullYear()} Kamal Kishor Chaurasiya. All rights reserved.
            </p>
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-wide text-white/25"
            >
              Built with{" "}
              <span className="text-blue-400/70">React</span>
              {" · "}
              <span className="text-cyan-400/70">TypeScript</span>
              {" · "}
              <span className="text-sky-400/70">Tailwind CSS</span>
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}