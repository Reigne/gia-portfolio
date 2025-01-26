import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9hthklk",
        "template_jz44fpj",
        e.target,
        "MLwtI9VnLQZGM9OPW"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          e.target.reset();

          // thanks
          toast.success(
            "Thank you for your message. I will get back to you as soon as possible."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);

          toast.error("Sorry, please try again.");
        }
      );
  };

  return (
    <div
      className="w-full flex justify-center font-poppins bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-4.png')" }}
    >
      <motion.div
        className="flex flex-col items-center justify-center h-[60rem] text-white px-6 md:px-[20px] lg:px-[40px] xl:px-[180px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl md:text-6xl font-bold">Contact Me</p>
        <p className="text-base md:text-lg mt-4 text-center">
          Do you have a project you'd like assistance with?
        </p>

        {/* input name and email and message */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-6 w-full lg:w-[700px]"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="border-white text-white font-poppins text-lg w-full"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              type="text"
              name="email"
              placeholder="Email"
              className="border-white text-white font-poppins text-lg w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <Textarea
            name="message"
            placeholder="Message"
            className="border-white text-white font-poppins text-lg w-full"
            minRows={10}
            maxRows={18}
            value={formData.message}
            onChange={handleChange}
          ></Textarea>

          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-lg px-10 py-3 rounded-xl text-white transform transition-transform duration-400 hover:scale-110 shadow-xl shadow-violet-500/50 flex items-center justify-center"
            disabled={isLoading}
            size="lg"
            isLoading={isLoading}
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
