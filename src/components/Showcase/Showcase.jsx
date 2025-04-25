import React from "react";
import { IoHeart } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";

const Showcase = () => {
  return (
    <div className="text-zinc-900 flex justify-between items-center gap-4 px-[10px] md:px-[20px] lg:px-[40px] xl:px-[180px] py-8 font-poppins  border-b border-zinc-200 max-w-[1920px] mx-auto">
      <p className="text-xs md:text-lg font-bold">MONTAGE</p>
      <IoHeart className="md:text-[24px] text-[16px]" />
      <p className="text-xs md:text-lg font-bold">SHORT-FORM</p>
      <IoHeart className="md:text-[24px] text-[16px]" />
      <p className="text-xs md:text-lg font-bold">LONG-FORM</p>
      <IoHeart className="md:text-[24px] text-[16px]" />
      <p className="text-xs md:text-lg font-bold">TESTIMONIALS</p>
      <IoHeart className="md:text-[24px] text-[16px]" />
      <p className="text-xs md:text-lg font-bold">ADS</p>
    </div>
  );
};

export default Showcase;
