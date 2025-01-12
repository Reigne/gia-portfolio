import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins px-[180px] py-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-500">Projects</p>
        <p className="text-lg text-zinc-600">Here are some of my projects</p>
      </div>

      {/* 3 reels size video placeholder container */}
      <div className="mt-12 flex flex-col gap-2">
        <p className="text-lg text-purple-500 border border-purple-400 px-6  rounded-full w-fit">SHORT-FORM</p>
        <div className="flex justify-between items-center gap-2">
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <p className="text-lg text-purple-500 border border-purple-400 px-6  rounded-full w-fit">LONG-FORM</p>
        <div className="flex justify-between items-center gap-2">
          <div className="w-1/2 h-[470px] bg-zinc-200 rounded"></div>
          <div className="w-1/2 h-[470px] bg-zinc-200 rounded"></div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="w-1/2 h-[470px] bg-zinc-200 rounded"></div>
          <div className="w-1/2 h-[470px] bg-zinc-200 rounded"></div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <p className="text-lg text-purple-500 border border-purple-400 px-6  rounded-full w-fit">ADS</p>
        <div className="flex justify-between items-center gap-2">
          <div className="w-[380px] h-[380px] bg-zinc-200 rounded"></div>
          <div className="w-[380px] h-[380px] bg-zinc-200 rounded"></div>
          <div className="w-[380px] h-[380px] bg-zinc-200 rounded"></div>
          <div className="w-[380px] h-[380px] bg-zinc-200 rounded"></div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
          <div className="w-[1136px] h-[640px] bg-zinc-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
