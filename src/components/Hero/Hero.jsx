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
                src="/images/Gia.png"
                alt="Gia"
                className="w-full h-auto md:w-[500px]  rounded-full"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col items-start md:w-3/5">
            <p className="text-6xl lg:text-8xl font-bold text-white px-4 md:p-0">
              Hello, I'm Gia
            </p>
            <p className="text mt-4 text-white/80 px-4 md:p-0">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dis primis
              sodales bibendum sed quisque tempus ad primis. Tortor felis sem
              lacinia rhoncus per non massa felis. Amet commodo inceptos feugiat
              dolor pulvinar penatibus urna consequat facilisi.
            </p>

            <div className="flex flex-col md:flex-col lg:flex-row  items-center gap-4 mt-6 w-full px-4 md:p-0">
              <button
                onClick={() => scrollToSection("workflow")}
                className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-full text-white transform transition-transform duration-400 hover:scale-110 shadow-lg shadow-violet-500/50 w-full lg:w-fit"
              >
                Contact Me
              </button>

              <button className="bg-trnsparent border-white text-white font-semibold text-sm px-10 py-3 rounded-full transform transition-transform duration-300 hover:scale-110 w-full lg:w-fit md:text-center">
                <div className="flex justify-center items-center gap-4 ">
                  <span>
                    <FaLink />
                  </span>
                  <p className="">linkedin.com/ph/geferlene-aznar/</p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
