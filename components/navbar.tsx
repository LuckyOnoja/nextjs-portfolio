import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full flex items-center justify-center p-4 z-50">
      <div className="w-[70vw] h-10 rounded-full flex items-center justify-between text-white p-6 bg-transparent backdrop-blur-md shadow shadow-zinc-900">
        <img
          src="/luckyb&w.jpg"
          alt="Lucky B&W"
          className="w-10 h-10 object-cover rounded-full shadow-2xl"
        />
        <div className="flex gap-12 justify-center">
          <a href="" className="hover:text-primary">
            Home
          </a>
          <a href="" className="hover:text-primary">
            Skills
          </a>
          <a href="" className="hover:text-primary">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
