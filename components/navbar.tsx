import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full flex items-center justify-center p-4 z-50">
      <div className="w-full md:w-[70vw] h-12 rounded-full flex items-center justify-between text-white p-4 md:p-6 bg-transparent backdrop-blur-md shadow shadow-zinc-900">
        {/* Logo */}
        <img
          src="/luckyb&w.jpg"
          alt="Lucky B&W"
          className="w-10 h-10 object-cover rounded-full shadow-2xl"
        />

        {/* Hamburger Icon (Visible on Small Screens) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="w-8 h-8" />
          ) : (
            <AiOutlineMenu className="w-8 h-8" />
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 right-4 md:right-0 w-[80vw] md:w-auto flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center bg-transparent md:bg-none backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-lg shadow-lg md:shadow-none transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-[200%]"
          } md:translate-y-0`}
        >
          <a
            href="#banner"
            className="text-white hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-white hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-primary transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
