import { NavLink } from "react-router-dom";
import { useState } from "react";
import BookACallBtn from "../BookAcCallBtn";
import { links } from "../../utils/AppConstants";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F8F8] backdrop-blur ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
            <NavLink to="/" className="relative group inline-flex items-center">
              <span className="text-gray-600 absolute -left-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                &lt;
              </span>
              <span className="px-0.5 uppercase">KAMAL</span>
              <span className="text-gray-600 absolute -right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                /&gt;
              </span>
            </NavLink>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {links.slice(1).map((link) => (
            <li key={link.name}>
              <NavLink className={({ isActive }) =>
              isActive ? 'text-gray-950 hover:text-black transition':'hover:text-black transition'}
                to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <BookACallBtn />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
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
          </ul>
        </div>
      )}
    </nav>
  );
}
