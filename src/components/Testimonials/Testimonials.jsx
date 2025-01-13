import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "John Doe",
    avatar: "/images/Gia.png",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "Jane Doe",
    avatar: "/images/Gia.png",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "Alice Smith",
    avatar: "/images/Gia.png",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "Bob Johnson",
    avatar: "/images/Gia.png",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "Charlie Brown",
    avatar: "/images/Gia.png",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lorem at massa. Facilisis in pretium nisl aliquet. Nulla volutpat aliquam velit. Donec sit amet nunc id libero suscipit.",
    author: "David Wilson",
    avatar: "/images/Gia.png",
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
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center px-[180px] py-8 min-h-screen font-poppins bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-lg text-purple-500  border border-purple-400 px-4 rounded-full">
            Testimonials
          </p>
          <span className="text-5xl font-bold text-white w-[500px] text-center">
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
              className="px-4"
            >
              <div className="w-[480px] h-[300px] bg-purple-400/10 rounded-2xl mx-auto border-2 border-purple-300/10">
                <div className="flex flex-col gap-4 p-6 h-full">
                  <div className="flex gap-2">
                    <TiStarFullOutline className="text-purple-500" size={20} />
                    <TiStarFullOutline className="text-purple-500" size={20} />
                    <TiStarFullOutline className="text-purple-500" size={20} />
                    <TiStarFullOutline className="text-purple-500" size={20} />
                    <TiStarFullOutline className="text-purple-500" size={20} />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <p className="text-white text-">{comment.text}</p>
                  </div>
                  <div className="flex justify-between items-center gap-4 mt-auto">
                    <p className="text-white font-bold">{comment.author}</p>
                    <img
                      src={comment.avatar}
                      alt="Avatar"
                      width={35}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
