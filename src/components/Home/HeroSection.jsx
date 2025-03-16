import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import ImageDot from "../features/smoothScroll";

function HeroSection() {
  return (
    <>
      <ImageDot className=" " />
      <div className="flex items-center justify-around gap-40  h-screen pb-10">
        <motion.div
          initial={{ y: "5vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, delay: 0.5 }}
          className="w-2/6"
        >
          <h1 className="text-3xl font-bold text-[#3cd597]">
            Hey there!, I'm-
          </h1>
          <h1 className="text-8xl font-extrabold">Aman </h1>

          <h1 className="text-8xl font-extrabold text-gray-600">Vishwakarma</h1>
          <Typewriter />

          <div>
            <p className="text-md flex pt-5 f">
              currently focused on building user experiences that drive growth.
            </p>
          </div>
          <div className="flex space-x-4 pt-5 ">
            <button className=" hover:bg-[#3cd597] text-white font-bold py-2 px-4 rounded-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
              Hire Me
            </button>
            <a rel="stylesheet" href="#" download>
              <button className=" hover:bg-[#3cd597] text-white font-bold py-2 px-4 rounded-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                View Resume
              </button>
            </a>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ y: "-5vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{  type: "spring", duration: 1, delay: 0.5 }}
            className="w-90 h-90 overflow-hidden rounded-full shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a] hover:scale-105 transition-all"
          >
            <motion.img
              src="https://imgur.com/zjs5lRE.png"
              alt="Profile"
              className="w-90 h-105 overflow-hidden rounded-full shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a] hover:scale-105 transition-all"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
