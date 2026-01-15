import React from "react";
import { NavLink } from "react-router-dom";

const BookACallBtn: React.FC = () => { 
    return (
        <div>
            <NavLink to={'/contact'} className="border border-gray-800 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
                Book a Call
            </NavLink>
        </div>
    )
}

export default BookACallBtn