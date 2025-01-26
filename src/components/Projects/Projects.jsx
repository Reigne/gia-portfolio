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
    <div className="w-full flex justify-center bg-gray-50">
      <div
        id="projects"
        className="max-w-[1920px] font-poppins px-4 md:px-8 lg:px-16 xl:px-[180px] py-8 overflow-hidden "
      >
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
          <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
            SHORT-FORM
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why house hacking needs a long-term plan.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/The Truth About Interest Rates Lenders Won't Tell.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why House Hacking Is the Smartest Way to Start.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Before You Sign That Loan, Watch This!.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>

            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why house hacking needs a long-term plan.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/The Truth About Interest Rates Lenders Won't Tell.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why House Hacking Is the Smartest Way to Start.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Before You Sign That Loan, Watch This!.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          </div>
        </motion.div>

        {/* long-form */}
        <motion.div
          ref={refLongForm}
          initial={{ y: 200, opacity: 0 }}
          animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="mt-12 flex flex-col gap-2"
        >
          <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
            LONG-FORM
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="w-full h-[430px] bg-zinc-200 rounded"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xAWDqdpOlu8?list=RDxAWDqdpOlu8"
                title="Billie Eilish – WILDFLOWER (Live Performance from Amazon Music’s Songline)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4 }}
              className="w-full h-[430px] bg-zinc-200 rounded"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xAWDqdpOlu8?list=RDxAWDqdpOlu8"
                title="Billie Eilish – WILDFLOWER (Live Performance from Amazon Music’s Songline)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </motion.div>
          </div>
        </motion.div>

        {/* ads */}
        <motion.div
          ref={refAds}
          initial={{ y: 250, opacity: 0 }}
          animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-12 flex flex-col gap-2"
        >
          <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
            ADS
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0 }}
              className="relative w-full aspect-square bg-zinc-200 rounded"
            >
              <div className="absolute top-0 left-0 p-2 w-full backdrop-filter backdrop-blur-sm">
                <p className="text-white text-sm font-bold">
                  Option One Solar Ads
                </p>
              </div>
              <video
                src="/videos/ads/Option One Solar Ads.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="relative w-full aspect-square bg-zinc-200 rounded"
            >
              <div className="absolute top-0 left-0 p-2 w-full backdrop-filter backdrop-blur-sm">
                <p className="text-white text-sm font-bold">
                  Option One Solar Ads
                </p>
              </div>
              <video
                src="/videos/ads/Option One Solar Ads.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="relative w-full aspect-square bg-zinc-200 rounded"
            >
              <video
                src="/videos/ads/Option One Solar Ads.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="relative w-full aspect-square bg-zinc-200 rounded"
            >
              <video
                src="/videos/ads/Option One Solar Ads.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why house hacking needs a long-term plan.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/The Truth About Interest Rates Lenders Won't Tell.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Why House Hacking Is the Smartest Way to Start.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4}}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Before You Sign That Loan, Watch This!.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className="relative w-full bg-zinc-200 rounded"
            >
              <video
                src="/videos/short-form/Before You Sign That Loan, Watch This!.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
