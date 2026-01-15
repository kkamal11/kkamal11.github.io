import { NavLink } from "react-router-dom";
import { LinkedButton, GithubButton } from "./SocialButtons";

export default function Footer() {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Me", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#1b1b1b] via-[#202020] to-[#1b1b1b] border-t border-white/10 overflow-hidden group">
      {/* Decorative squares */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/20 rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/10 rounded-xl transition-all duration-500 delay-75 group-hover:scale-110 group-hover:opacity-80" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/20 rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/10 rounded-xl transition-all duration-500 delay-75 group-hover:scale-110 group-hover:opacity-80" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-10 py-8 flex flex-col sm:flex-row space-y-7 sm:space-y-0 items-center justify-between">
        {/* Left */}
        <div>
          <nav className="flex items-center gap-4 text-sm text-gray-300">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-1.5 rounded-md bg-white/10 text-white"
                    : "hover:text-white transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 flex gap-3 justify-center sm:justify-start">
            <LinkedButton />
            <GithubButton />
          </div>
        </div>

        {/* Right email */}
        <div className="text-xl sm:text-3xl md:text-4xl font-light tracking-wide text-white">
          dev.kamal.kishor@gmail.com
        </div>
      </div>

      {/* Bottom credit */}
      <div className="relative text-center text-xs text-gray-400 pb-4 px-2">
        Developed & designed by <a href="https://github.com/kkamal11" target="_blank" className="text-gray-200 font-medium">Kamal</a> using{" "}
        <span className="text-blue-400">React</span>, {" "}
        <span className="text-cyan-400">TypeScript</span> &{" "}
        <span className="text-blue-300">Tailwind CSS</span>
      </div>
    </footer>
  );
}
