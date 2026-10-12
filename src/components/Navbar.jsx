import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-[#0a0d14] border-b border-[#1e2530] font-sans">
      {/* Left side: Text Logo */}
      <div className="text-xl font-bold text-white tracking-wide select-none">
        Media Search
      </div>

      {/* Right side: Navigation Links/Buttons */}
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : "text-slate-400 bg-transparent hover:text-white hover:bg-[#1e2530]"
            }`
          }
        >
          Search
        </NavLink>
       <NavLink
          to="/collection"
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : "text-slate-400 bg-transparent hover:text-white hover:bg-[#1e2530]"
            }`
          }
        >
          Collection
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
