import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Showcase from "../Showcase/Showcase";

const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex justify-center bg-white ">
      <motion.div
        ref={ref}
        id="workflow"
        className=" font-poppins overflow-hidden w-full max-w-[1920px]"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Showcase />

        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-[180px] py-8 mt-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-purple-500 text-4xl font-bold">Workflow</p>
            <span className="text-zinc-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit
            </span>
          </div>

          {/* video templace container */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-[426px] md:w-[640px] lg:w-[854px] xl:w-[1280px] h-[240px] md:h-[360px] lg:h-[480px] xl:h-[720px] bg-zinc-200 rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jdRKfbjGmW4"
                title="Ground Mount Panel Installation || Option One Solar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Workflow;
