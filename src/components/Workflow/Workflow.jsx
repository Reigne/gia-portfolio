import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Showcase from "../Showcase/Showcase";

const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      id="workflow"
      className="min-h-screen bg-white font-poppins overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <Showcase />

      <div className="flex flex-col justify-center items-center px-4 md:px-[180px] py-8 mt-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-purple-500 text-4xl font-bold">Workflow</p>
          <span className="text-zinc-600">
            Lorem ipsum odor amet, consectetuer adipiscing elit
          </span>
        </div>

        {/* video templace container */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-full md:w-[1280px] h-[200px] md:h-[650px] bg-zinc-200 rounded"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workflow;
