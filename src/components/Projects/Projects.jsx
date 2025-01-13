import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const refShortForm = useRef(null);
  const refLongForm = useRef(null);
  const refAds = useRef(null);

  const isInViewShortForm = useInView(refShortForm, { once: true });
  const isInViewLongForm = useInView(refLongForm, { once: true });
  const isInViewAds = useInView(refAds, { once: true });

  return (
    <div id="projects" className="min-h-screen bg-gray-50 font-poppins px-[180px] py-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-500">Projects</p>
        <p className="text-lg text-zinc-600">Here are some of my projects</p>
      </div>

      <motion.div
        ref={refShortForm}
        initial={{ y: 150, opacity: 0 }}
        animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="mt-12 flex flex-col gap-2"
      >
        <p className="text-lg text-purple-500 border border-purple-400 px-6 rounded-full w-fit">
          SHORT-FORM
        </p>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={refLongForm}
        initial={{ y: 200, opacity: 0 }}
        animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="mt-12 flex flex-col gap-2"
      >
        <p className="text-lg text-purple-500 border border-purple-400 px-6 rounded-full w-fit">
          LONG-FORM
        </p>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="w-1/2 h-[470px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-1/2 h-[470px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="w-1/2 h-[470px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-1/2 h-[470px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={refAds}
        initial={{ y: 250, opacity: 0 }}
        animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.4 }}
        className="mt-12 flex flex-col gap-2"
      >
        <p className="text-lg text-purple-500 border border-purple-400 px-6 rounded-full w-fit">
          ADS
        </p>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-[380px] h-[380px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.6 }}
            className="w-[380px] h-[380px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 350, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.8 }}
            className="w-[380px] h-[380px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2 }}
            className="w-[380px] h-[380px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.6 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
          <motion.div
            initial={{ y: 350, opacity: 0 }}
            animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.8 }}
            className="w-[1136px] h-[640px] bg-zinc-200 rounded"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
