import React from "react";
import Showcase from "../Showcase/Showcase";

const Workflow = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Showcase />

      <div className="flex flex-col justify-center items-center px-[180px] py-8 mt-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-purple-500 text-4xl font-bold">Workflow</p>
          <span className="text-zinc-600">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </span>
        </div>

        {/* video templace container */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-[1280px] h-[650px] bg-zinc-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
