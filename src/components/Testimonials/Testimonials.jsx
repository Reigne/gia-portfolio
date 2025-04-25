import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    text: "I think it will be a perfect video. Good job! That's great, I like it! ",
    author: "Max",
    avatar: "",
  },
  {
    text: "I think you got the style and have good skills. You also understood feedback well.",
    author: "Market Street Pod",
    avatar: "",
  },
  {
    text: "I love it!! Good job Gia!!!! ",
    author: "Joe",
    avatar: "",
  },
  {
    text: "Thank you for this. The video looks great, thanks.",
    author: "Anders",
    avatar: "",
  },
  {
    text: "Really great video! I love how it turned out.",
    author: "Rosebelle",
    avatar: "",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full flex justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/images/background-3.png')" }}
    >
      <div
        id="testimonials"
        className="w-full max-w-[1920px] h-[60rem] flex flex-col justify-center items-center px-4 md:px-12 lg:px-[180px] py-8 font-poppins"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-24"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-sm md:text-lg text-purple-500 border border-purple-400 px-2 md:px-4 rounded-full">
              Testimonials
            </p>
            <span className="text-3xl md:text-5xl font-bold text-white w-full md:w-[500px] text-center">
              What my clients say about me.
            </span>
          </div>
        </motion.div>

        <div ref={ref} className="w-full">
          <Slider {...settings}>
            {comments.map((comment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="px-2 md:px-4"
              >
                <div className="w-full bg-purple-400/10 rounded-2xl mx-auto border-2 border-purple-300/10">
                  <div className="flex flex-col gap-4 p-4 md:p-6 h-full">
                    <div className="flex gap-2">
                      <TiStarFullOutline
                        className="text-purple-500"
                        size={20}
                      />
                      <TiStarFullOutline
                        className="text-purple-500"
                        size={20}
                      />
                      <TiStarFullOutline
                        className="text-purple-500"
                        size={20}
                      />
                      <TiStarFullOutline
                        className="text-purple-500"
                        size={20}
                      />
                      <TiStarFullOutline
                        className="text-purple-500"
                        size={20}
                      />
                    </div>
                    <div className="flex flex-col flex-grow min-h-24">
                      <p className="text-white">{comment.text}</p>
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-auto">
                      <p className="text-white font-bold">{comment.author}</p>
                      {comment.avatar ? (
                        <img
                          src={comment.avatar}
                          alt="Avatar"
                          width={35}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <p className="text-white font-bold text-sm">
                            {comment.author.charAt(0)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
