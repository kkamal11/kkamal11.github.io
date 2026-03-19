import React from "react";
import { NavLink } from "react-router-dom";

const BookACallBtn: React.FC = () => {
  return (
    <NavLink
      to="/contact"
      className="inline-flex items-center gap-1.5
        text-[11px] tracking-wide uppercase
        border border-[#c8440a] text-[#c8440a]
        px-3.5 py-2 rounded-[3px]
        hover:bg-[#c8440a] hover:text-white
        transition-colors duration-150"
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#c8440a] shrink-0
          transition-colors duration-150 group-hover:bg-white"
        style={{ background: "currentColor" }}
      />
      Book a Call
    </NavLink>
  );
};

export default BookACallBtn;