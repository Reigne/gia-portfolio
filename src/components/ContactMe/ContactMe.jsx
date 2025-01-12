import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  return (
    <div
      className="min-h-screen font-poppins bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      <motion.div
        className="flex flex-col items-center justify-center h-screen text-white"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-6xl font-bold">Contact Me</p>
        <p className="text-lg mt-4">
          Do you have a project you'd like assistance with?
        </p>

        {/* input name and email and message */}
        <div className="flex flex-col gap-4 mt-6 w-1/3">
          <div className="flex items-center gap-4 ">
            <Input
              type="text"
              placeholder="Name"
              className="border-white text-white font-poppins text-lg"
            />

            <Input
              type="text"
              placeholder="Email"
              className="border-white text-white font-poppins text-lg"
            />
          </div>

          <Textarea
            placeholder="Message"
            className="border-white text-white font-poppins text-lg"
            minRows={10}
            maxRows={18}
          ></Textarea>

          <button className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-xl text-white transform transition-transform duration-400 hover:scale-110 shadow-xl shadow-violet-500/50">
            Send Message
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
