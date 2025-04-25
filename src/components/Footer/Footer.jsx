import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex justify-center "
      style={{ backgroundImage: "url('/images/background-4.png')" }}
    >
      <div className="w-full max-w-[1920px] flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-6 px-6 md:px-[20px] lg:px-[40px] xl:px-[180px] text-white border-t border-purple-200 font-poppins text-center lg:text-left">
          <div
            className="flex flex-col justify-start items-center lg:items-start gap-2 w-full lg:w-2/5 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <IoHeart color="white" size={24} />
              <p className="text-xl font-bold">Gia Portfolio</p>
            </div>
            <p className="text-sm text-white/60 ">
              I create high-quality, engaging videos that showcase your brand
              and vision. Explore my portfolio to see how I bring content to
              life with creativity, precision, and a style that stands out!
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5">
            <p className="font-bold cursor-pointer">Pages</p>
            <p
              className="text-sm text-white/60 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <p
              className="text-sm text-white/60 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </p>
            <p
              className="text-sm text-white/60 cursor-pointer"
              onClick={() => navigate("/404")}
            >
              404
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5">
            <p className="font-bold cursor-pointer">Contact</p>
            <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
              <MdEmail />
              <p className="text-sm text-white">geferlene@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
              <MdPhone />
              <p className="text-sm text-white">(+63) 927 2156 953</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
              <MdLocationPin />
              <p className="text-sm text-white">
                Cebu City, Philippines 
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5">
            <p className="font-bold cursor-pointer">Follow us</p>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="p-2 border border-zinc-500 rounded-full cursor-pointer">
                <FaFacebook />
              </div>
              <div className="p-2 border border-zinc-500 rounded-full cursor-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 border border-zinc-500 rounded-full cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="p-2 border border-zinc-500 rounded-full cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 sm:px-8 lg:px-[180px] font-poppins text-center lg:text-left">
          <div className="flex flex-col lg:flex-row flex-1 justify-between items-center gap-4 border-t border-purple-200/10 pt-4">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Gia Portfolio. All rights
              reserved.
            </p>
            <p className="text-white">
              Designed by{" "}
              <a
                href="https://reigne-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-purple-400 transition-colors underline"
              >
                Reigne
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
