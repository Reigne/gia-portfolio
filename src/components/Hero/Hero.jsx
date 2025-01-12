import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaLink } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="min-h-screen font-poppins bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      {/* <p className="font-poppins">hero page</p> */}

      {/* <div>
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <p className="text-4xl font-bold">Welcome to Gia</p>
          <p className="text-lg mt-4">We provide the best services</p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold text-lg mt-6 px-10 py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div> */}

      <motion.div
        className="flex justify-between items-center h-screen px-[180px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* image of gia */}
        <div className="flex justify-start items-center w-2/5">
          <div>
            <img src="/images/Gia.png" alt="Gia" width={500} />
          </div>
        </div>

        {/* text */}
        <div className="flex flex-col items-start w-3/5">
          <p className="text-8xl font-bold text-white">Hello, I'm Gia</p>
          <p className="text mt-4 text-white">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dis primis
            sodales bibendum sed quisque tempus ad primis. Tortor felis sem
            lacinia rhoncus per non massa felis. Amet commodo inceptos feugiat
            dolor pulvinar penatibus urna consequat facilisi.
          </p>

          {/* button hire me */}
          <div className="flex items-center gap-4 mt-6 ">
            <button
              onClick={() => scrollToSection("workflow")}
              className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-full text-white transform transition-transform duration-400 hover:scale-110 shadow-lg shadow-violet-500/50"
            >
              Contact Me
            </button>

            <button className="bg-transparent  border-white text-white font-semibold text-sm px-10 py-3 rounded-full transform transition-transform duration-300 hover:scale-110 ">
              <div className="flex items-center gap-4">
                <span>
                  <FaLink />
                </span>

                <p> linkedin.com/ph/geferlene-aznar/</p>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
