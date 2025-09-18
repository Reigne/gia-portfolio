import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import Showcase from "../Showcase/Showcase";

const AboutMe = () => {
  return (
    <section className="  bg-violet-50 h-full " id="about">
      <div className="py-40 flex items-center max-w-[1920px] mx-auto font-poppins px-4 md:px-8 lg:px-16 xl:px-[180px] overflow-hidden gap-10">
        {/* Replace with your actual image */}

        <div className="flex flex-col gap-5 w-3/5">
          <h4 className="text-violet-600 font-semibold text-xl">ABOUT ME</h4>

          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            More Than 3+ Years Video Editing Experience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            With 3 years of experience in video editing for marketing, content
            creation, and real estate, I turn raw footage into videos that tell
            stories and grab attention. Combining editing skills with my
            background in SEO and marketing, I help craft content strategies and
            bring them to life through engaging visuals.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From social media reels to ads and real estate showcases, I create
            videos that help businesses and creators stand out and connect with
            their audience.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Let’s work together to bring your ideas to life!
          </p>

          <div>
            <div>
              {/* skills in icons (colors by on the original color of the app) */}
              <div className="flex flex-wrap gap-2 mt-2 text-6xl">
                <img
                  src="/icons/adobe-photoshop-icon.svg"
                  alt="photoshop"
                  className="w-14"
                />
                <img
                  src="/icons/adobe-after-effects-icon.svg"
                  alt="figma"
                  className="w-14"
                />
                <img
                  src="/icons/adobe-premiere-pro-icon.svg"
                  alt="illustrator"
                  className="w-14"
                />
                <img
                  src="/icons/capcut-icon.svg"
                  alt="capcut"
                  className="w-14"
                />
                <img
                  src="/icons/canva-icon.svg"
                  alt="capcut"
                  className="w-14"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-2">
            <a
              href="/gia-resume.pdf"
              className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-full text-white transform transition-transform duration-400 hover:scale-110 shadow-lg shadow-violet-500/50 w-full lg:w-fit"
              download
            >
              Download Resume
            </a>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Follow me</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all"
                >
                  <FaTwitter className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <img className="w-2/5 rounded-full" src="/images/gia-6.png" alt="Profile" />
      </div>
    </section>
  );
};

export default AboutMe;
