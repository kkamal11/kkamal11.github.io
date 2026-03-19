import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BookACallBtn from "../BookAcCallBtn";
import { links } from "../../utils/AppConstants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur 
    ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e8e6df]"
          : "bg-[#F8F8F8] border-b border-transparent"
        }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tight">
            <NavLink to="/" className="relative group inline-flex items-center">
              <span className="text-[#c8440a] absolute -left-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                &lt;
              </span>
            <span className={`px-0.5 uppercase tracking-wide
              ${location.pathname === '/' ? 'underline underline-offset-6 decoration-[#c8440a] decoration-2' : ''}`}>
              <em>KAMAL</em>
            </span>
              <span className="text-[#c8440a] absolute -right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                /&gt;
              </span>
            </NavLink>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-1 flex-1 text-sm font-medium text-gray-700">
          {links.slice(1).map((link) => (
            <li key={link.name}>
              <NavLink className={({ isActive }) =>
                `text-[12px] px-3 py-1.5 uppercase tracking-wide transition-colors duration-150 ${isActive ? 'text-gray-950 hover:text-black transition underline underline-offset-6 decoration-[#c8440a] decoration-2' : 'hover:text-black transition-colors duration-150 hover:bg-[#f0ede5] rounded-[3px]'}`}
                to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* ── Right actions ── */}
        <div className="flex items-center gap-2 shrink-0">
          <BookACallBtn />

          {/* Hamburger */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8
              border border-[#e8e6df] rounded-[3px] bg-white hover:border-gray-900
              transition-colors duration-150 cursor-pointer gap-[5px] px-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-px bg-gray-700 transition-all duration-300 origin-center
              ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-full h-px bg-gray-700 transition-all duration-200
              ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-full h-px bg-gray-700 transition-all duration-300 origin-center
              ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          border-b border-[#e8e6df] bg-white
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((link, i) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${i * 30}ms` : "0ms",
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-[3px]
                  text-[12px] tracking-wide uppercase transition-colors duration-150
                  ${isActive
                    ? "bg-[#f0ede5] text-gray-900"
                    : "text-gray-500 hover:text-gray-900 hover:bg-[#f5f3ee]"
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
