import React from "react";
import { IoHeart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-[180px] text-white font-poppins">
      <div className="flex items-center gap-2 cursor-pointer">
        <IoHeart size={24} />
        <p className="text-4xl font-bold">Gia</p>
      </div>

      <div>
        <ul className="flex items-center gap-14">
          <li className="cursor-pointer hover:text-purple-400">Home</li>
          <li className="cursor-pointer hover:text-purple-400">About</li>
          <li className="cursor-pointer hover:text-purple-400">Workflow</li>
          <li className="cursor-pointer hover:text-purple-400">Projects</li>
          <li className="cursor-pointer border border-transparent bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-border py-2 px-6 rounded-full">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
