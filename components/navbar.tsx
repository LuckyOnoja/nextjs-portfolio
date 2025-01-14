import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

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
            <div className="flex items-center justify-center p-2 rounded-full bg-transparent backdrop-blur-md shadow shadow-gray-700">
              <AiOutlineClose className="w-6 h-6" />
            </div>
          ) : (
            <div className="flex items-center justify-center p-2 rounded-full bg-transparent backdrop-blur-md shadow shadow-gray-700">
              <AiOutlineMenu className="w-6 h-6" />
            </div>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 right-4 md:right-0 w-[80vw] md:w-auto flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center md:bg-none backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-lg shadow-lg md:shadow-none transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-[200%]"
          } md:translate-y-0 ${menuOpen ? "bg-zinc-900" : ""}`}
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
          <a
            href="#contact"
            className="text-white hover:text-primary transition-colors"
          >
            Contact
          </a>

          {/* Social Icons */}
          <div className="social-icon flex gap-4">
            <a
              href="http://wa.me/2347042351981"
              className="social-icon-link hover:bg-white hover:text-black"
              aria-label="Facebook"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://x.com/luckylkonoja?s=21"
              className="social-icon-link hover:bg-white hover:text-black"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucky-onoja-6926842b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              className="social-icon-link hover:bg-white hover:text-black"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
