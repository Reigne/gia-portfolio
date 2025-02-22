import React, { useState, useEffect } from "react";
import { IoHeart, IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        scrollToSection(id);
        setIsMenuOpen(false);
      }, 100);
    } else {
      scrollToSection(id);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <div className="w-full flex justify-center absolute top-0 left-0 bg-transparent md:bg-transparent">
      <div className="w-full max-w-[1900px] flex justify-between items-center gap-8 py-6 px-6 md:px-[20px] lg:px-[40px] xl:px-[180px] text-white font-poppins overflow-hidden ">
        <a
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          {/* <IoHeart size={24} /> */}

          <img src="/logo.png" alt="Gia" className="w-6 h-6" />
          <p className="text-4xl font-bold">Gia</p>
        </a>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:static lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:gap-14 lg:translate-x-0`}
        >
          {isMenuOpen && (
            <button
              className="absolute top-6 right-6 text-white"
              onClick={toggleMenu}
            >
              <IoClose size={24} />
            </button>
          )}
          <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
            {/* <li
              className="cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleNavigation("home");
                setIsMenuOpen(false);
              }}
            >
              Home
            </li> */}
            <li
              className="cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleNavigation("about");
                setIsMenuOpen(false);
              }}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleNavigation("workflow");
                setIsMenuOpen(false);
              }}
            >
              Workflow
            </li>
            <li
              className="cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleNavigation("projects");
                setIsMenuOpen(false);
              }}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleNavigation("testimonials");
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </li>
            <Link to="/contact">
              <li className="cursor-pointer border border-transparent bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-border py-2 px-6 rounded-full shadow-lg shadow-violet-500/50 transform transition-transform duration-400 hover:scale-110">
                Contact Me
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
