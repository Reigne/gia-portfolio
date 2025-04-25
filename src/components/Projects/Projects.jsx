import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const refShortForm = useRef(null);
  const refLongForm = useRef(null);
  const refAds = useRef(null);

  const isInViewShortForm = useInView(refShortForm, { once: true });
  const isInViewLongForm = useInView(refLongForm, { once: true });
  const isInViewAds = useInView(refAds, { once: true });

  // Added state for slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLongFormSlide, setCurrentLongFormSlide] = useState(0);

  // Short-form videos data
  const shortFormVideos = [
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/m1h0Le6JjdQ",
      title: "The Story of Repair.sg",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/R8ER9BfbnJc",
      title: "The Story of Repair.sg",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/3U6OHt-CGHo",
      title: "The Story of Repair.sg",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/Jp6MAD3YD7I",
      title: "Every Entrepreneur Should Know This!",
    },
    {
      type: "video",
      src: "/videos/short-form/Why house hacking needs a long-term plan.mp4",
    },
    {
      type: "video",
      src: "/videos/short-form/The Truth About Interest Rates Lenders Won't Tell.mp4",
    },
    {
      type: "video",
      src: "/videos/short-form/Why House Hacking Is the Smartest Way to Start.mp4",
    },
    {
      type: "video",
      src: "/videos/short-form/Before You Sign That Loan, Watch This!.mp4",
    },
  ];

  // Long-form videos data
  const longFormVideos = [
    {
      src: "https://www.youtube.com/embed/sm4f33tKyQ8",
      title: "Ground Mount Panel Installation || Option One Solar",
    },
    {
      src: "https://www.youtube.com/embed/jdRKfbjGmW4",
      title: "Ground Mount Panel Installation || Option One Solar",
    },
    {
      src: "https://www.youtube.com/embed/gGPZmM8JSHA",
      title: "Ground Mount Panel Installation || Option One Solar",
    },
    {
      src: "https://www.youtube.com/embed/Y7F5uVba2A0",
      title: "Ground Mount Panel Installation || Option One Solar",
    },
  ];

  // Ads square videos data
  const adsVideos = [
    {
      src: "https://www.youtube.com/embed/XRP_GhySBjE?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/n_xrYTgYPQI?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/AdPYy0fCEGM?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/Cg19ZH4ey4o?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
  ];

  const adsLongVideos = [
    {
      src: "https://www.youtube.com/embed/jM4kh6Y-tKo?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/xevHz3N53f4?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/xCKzbzXck4A?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
    {
      src: "https://www.youtube.com/embed/PeEuHr1kFjE?enablejsapi=1",
      hasTitle: false,
      type: "iframe",
    },
  ];

  // Calculate max slides
  const maxSlides = Math.max(0, shortFormVideos.length - 4);
  const maxLongFormSlides = Math.max(
    0,
    Math.ceil(longFormVideos.length / 2) - 1
  );

  // Slideshow navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextLongFormSlide = () => {
    setCurrentLongFormSlide((prev) =>
      prev < maxLongFormSlides ? prev + 1 : prev
    );
  };

  const prevLongFormSlide = () => {
    setCurrentLongFormSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

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

        {/* short-form - modified to be a slideshow */}
        <motion.div
          ref={refShortForm}
          initial={{ y: 150, opacity: 0 }}
          animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-col gap-2 overflow-hidden"
        >
          <div className="flex justify-between items-center">
            <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
              SHORT-FORM
            </p>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`px-3 py-1 rounded-full ${
                  currentSlide === 0
                    ? "bg-gray-300"
                    : "bg-purple-500 text-white"
                }`}
              >
                &larr;
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= maxSlides}
                className={`px-3 py-1 rounded-full ${
                  currentSlide >= maxSlides
                    ? "bg-gray-300"
                    : "bg-purple-500 text-white"
                }`}
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="relative ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {shortFormVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 150, opacity: 0 }}
                  animate={isInViewShortForm ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="relative w-1/4 flex-shrink-0 p-1"
                >
                  <div className="bg-zinc-200 rounded h-full">
                    {video.type === "iframe" ? (
                      <iframe
                        className="rounded-lg w-full aspect-[9/16]"
                        src={video.src}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={video.src}
                        controls
                        className="rounded-lg w-full h-full object-cover"
                      ></video>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* long-form - modified to be a slideshow */}
        <motion.div
          ref={refLongForm}
          initial={{ y: 200, opacity: 0 }}
          animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="mt-12 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
              LONG-FORM
            </p>
            <div className="flex gap-2">
              <button
                onClick={prevLongFormSlide}
                disabled={currentLongFormSlide === 0}
                className={`px-3 py-1 rounded-full ${
                  currentLongFormSlide === 0
                    ? "bg-gray-300"
                    : "bg-purple-500 text-white"
                }`}
              >
                &larr;
              </button>
              <button
                onClick={nextLongFormSlide}
                disabled={currentLongFormSlide >= maxLongFormSlides}
                className={`px-3 py-1 rounded-full ${
                  currentLongFormSlide >= maxLongFormSlides
                    ? "bg-gray-300"
                    : "bg-purple-500 text-white"
                }`}
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentLongFormSlide * 100}%)`,
              }}
            >
              {longFormVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 200, opacity: 0 }}
                  animate={isInViewLongForm ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="w-full md:w-1/2 flex-shrink-0 p-2"
                >
                  <div className="w-full h-[430px] bg-zinc-200 rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ads square videos - modified to show all videos */}
        <motion.div
          ref={refAds}
          initial={{ y: 250, opacity: 0 }}
          animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-12 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
              ADS SQUARE
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {adsVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ y: 250, opacity: 0 }}
                animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: index * 0.2 }}
                className="relative w-full aspect-square bg-zinc-200 rounded"
              >
                {video.hasTitle && (
                  <div className="absolute top-0 left-0 p-2 w-full backdrop-filter backdrop-blur-sm z-10">
                    <p className="text-white text-sm font-bold">
                      {video.title}
                    </p>
                  </div>
                )}
                {video.type === "iframe" ? (
                  <iframe
                    src={video.src}
                    title={video.title || `Ad video ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                  ></video>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ads long videos - updated to reel size and showing all videos */}
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.6 }}
          className="mt-12 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <p className="bg-purple-500 text-white px-6 rounded-full w-fit">
              ADS LONG FORM
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {adsLongVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ y: 250, opacity: 0 }}
                animate={isInViewAds ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.6, delay: index * 0.2 }}
                className="relative w-full bg-zinc-200 rounded-lg overflow-hidden"
              >
                <div className="pb-[177.78%] relative"> {/* 16:9 inverse for vertical orientation */}
                  {video.hasTitle && (
                    <div className="absolute top-0 left-0 p-2 w-full backdrop-filter backdrop-blur-sm z-10">
                      <p className="text-white text-sm font-bold">
                        {video.title}
                      </p>
                    </div>
                  )}
                  {video.type === "iframe" ? (
                    <iframe
                      src={video.src}
                      title={video.title || `Long ad video ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={video.src}
                      controls
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    ></video>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
