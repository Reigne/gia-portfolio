import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundMessage = () => {
  return (
    <div
      className="font-poppins flex justify-center items-center px-4 bg-background bg-bottom bg-cover"
      style={{ backgroundImage: "url('/images/background-4.png')" }}
    >
      <div className="w-full min-h-[924px] max-w-screen-2xl px-4 md:px-8 overflow-hidden flex items-center justify-center gap-8 py-24 text-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[250px] font-bold  leading-[280px]">404</h1>
          <h2 className="text-lg md:text-xl text-zinc-200">
            Sorry, the page you are looking for could not be found
          </h2>
          <Link to="/">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent font-semibold text-md px-10 py-3 rounded-full text-white transform transition-transform duration-400 hover:scale-110 shadow-xl shadow-violet-500/50 flex items-center justify-center mt-6"
              size="md"
            >
              BACK TO HOMEPAGE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundMessage;
