import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black px-8 py-4 flex justify-between items-center shadow-md">
      {/* Brand Name */}
      <div className="text-white text-2xl font-bold">
        <Link to="/">Movie App</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-white">
        <Link to="/" className="text-lg px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10">
          Home
        </Link>
        <Link to="/favourites" className="text-lg px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
