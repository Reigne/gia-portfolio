import React from "react";
import { IoHeart } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";

const Showcase = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-[180px] py-8 font-poppins  border-b border-zinc-200">
      <p className="text-xl font-bold">MONTAGE</p>
      <IoHeart size={24} />
      <p className="text-xl font-bold">SHORT-FORM</p>
      <IoHeart size={24} />
      <p className="text-xl font-bold">LONG-FORM</p>
      <IoHeart size={24} />
      <p className="text-xl font-bold">TESTIMONIALS</p>
      <IoHeart size={24} />
      <p className="text-xl font-bold">ADS</p>
    </div>
  );
};

export default Showcase;
