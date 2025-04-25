import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-4.png')" }}
      id="about"
    >
      <div
        id="about"
        className="w-full max-w-[1900px] h-[60rem]  font-poppins overflow-hidden"
      >
        {/* <div className="md:absolute top-0 left-0 w-full">
        </div> */}

        <motion.div
          className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-6 px-[10px] h-full md:px-[20px] lg:px-[40px] xl:px-[180px] "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* image of gia */}
          <div className="flex justify-center md:justify-start items-center p-4 md:p-0">
            <div className="max-w-full md:max-w-none">
              <img
                src="/images/gia-2.jpeg"
                alt="Gia"
                className="w-full h-auto md:w-[500px]  rounded-full"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col items-start md:w-3/5">
            {/* Add status indicator here */}
            <div className="flex items-center gap-2 mb-3 px-3 py-1 bg-green-500/20 rounded-full">
              <span className="relative flex h-3 w-3 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-xs font-medium">
                Looking for Work
              </span>
            </div>

            <p className="text-6xl lg:text-8xl font-bold text-white px-4 md:p-0">
              Hello, I'm Gia
            </p>
            <p className="text mt-4 text-white/80 px-4 md:p-0 ">
              I’m a video editor with 3 years of experience crafting
              scroll-stopping reels, ads, and real estate showcases. I blend
              creative editing with marketing know-how to help brands and
              creators stand out. Let’s bring your vision to life—frame by
              frame.
            </p>

            <div className="flex flex-col md:flex-col lg:flex-row  items-center gap-4 mt-6 w-full px-4 md:p-0">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-full text-white transform transition-transform duration-400 hover:scale-110 shadow-lg shadow-violet-500/50 w-full lg:w-fit"
              >
                Let's Talk
              </Link>

              <a
                href="https://www.linkedin.com/in/geferlene-aznar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-4 bg-transparent text-white font-semibold text-sm px-4 py-3 rounded-full transform transition-transform duration-300 hover:scale-110 w-full lg:w-fit md:text-center"
              >
                <span>
                  <FaLink />
                </span>
                <p className="">linkedin.com/in/geferlene-aznar/</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
