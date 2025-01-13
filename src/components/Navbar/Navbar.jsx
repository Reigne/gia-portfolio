import React from "react";
import { IoHeart } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="flex justify-between items-center py-6 px-[180px] text-white font-poppins">
      <a
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavigation("home")}
      >
        <IoHeart size={24} />
        <p className="text-4xl font-bold">Gia</p>
      </a>

      <div>
        <ul className="flex items-center gap-14">
          <li
            className="cursor-pointer hover:text-purple-400"
            onClick={() => handleNavigation("home")}
          >
            Home
          </li>
          <li className="cursor-pointer hover:text-purple-400">About</li>
          <li
            className="cursor-pointer hover:text-purple-400"
            onClick={() => handleNavigation("workflow")}
          >
            Workflow
          </li>
          <li
            className="cursor-pointer hover:text-purple-400"
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </li>
          <li className="cursor-pointer hover:text-purple-400">Testimonials</li>
          <Link to="/contact">
            <li className="cursor-pointer border border-transparent bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-border py-2 px-6 rounded-full shadow-lg shadow-violet-500/50 transform transition-transform duration-400 hover:scale-110">
              Contact Me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
