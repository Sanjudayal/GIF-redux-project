import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-[#0a0d14] border-b border-[#1e2530] font-sans">
      {/* Left side: Text Logo */}
      <div className="text-xl font-bold text-white tracking-wide select-none">
        Media Search
      </div>

      {/* Right side: Navigation Links/Buttons */}
      <div className="flex gap-3">
        {/* Active Button */}
        {/* <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Search
        </button> */}

        {/* Inactive Button */}
        <button className="px-4 py-2 text-sm font-medium text-slate-400 bg-transparent rounded-lg hover:text-white hover:bg-[#1e2530] transition-all duration-200">
          Collection
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
