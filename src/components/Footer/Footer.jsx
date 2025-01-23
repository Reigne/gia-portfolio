import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundImage: "url('/images/background-2.png')" }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-6 px-4 sm:px-8 lg:px-[180px] text-white border-t border-purple-200 font-poppins text-center lg:text-left">
        <div className="flex flex-col justify-start items-center lg:items-start gap-2 w-full lg:w-2/5">
          <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
            <IoHeart color="white" size={24} />
            <p className="text-xl font-bold">Gia Portfolio</p>
          </div>
          <p className="text-sm text-white/60 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5">
          <p className="font-bold cursor-pointer">Pages</p>
          <p className="text-sm text-white/60 cursor-pointer">Home</p>
          <p className="text-sm text-white/60 cursor-pointer">Contact</p>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5">
          <p className="font-bold cursor-pointer">Contact</p>
          <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
            <MdEmail />
            <p className="text-sm text-white">example@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
            <MdPhone />
            <p className="text-sm text-white">(+64) 922 1231 123</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
            <MdLocationPin />
            <p className="text-sm text-white">
              1234 St. California, USA <br />
              Cityvillem State, 1234
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
          <p className="text-white">© Valour 2024. All Rights Reserved.</p>
          <p className="text-white cursor-pointer">Designed by Reigne</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
