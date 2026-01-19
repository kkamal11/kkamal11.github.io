import { NavLink } from "react-router-dom";
import { useState } from "react";
import BookACallBtn from "./BookAcCallBtn";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About Me", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F8F8] backdrop-blur ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
             <NavLink to='/'>KAMAL</NavLink>     
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink className={({ isActive }) =>
              isActive ? 'text-gray-950 hover:text-black transition':'hover:text-black transition'}
                to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <BookACallBtn />
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.to} onClick={() => setOpen(false)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
            <a
              href="/contact"
              className="mt-4 border border-gray-800 px-4 py-2 rounded-full text-sm text-center hover:bg-black hover:text-white transition">
              Book a Call
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
