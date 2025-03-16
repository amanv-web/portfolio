import React from "react";
import Navbar from "../components/Home/Navbar";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".myimage",
      {
      opacity: 0,
      scale: 0.8,
      x: -40,
      },
      {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".myimage",
        start: "top 90%",
        end: "bottom 95%",
        scrub: true,
        markers: true,
      },
      }
    );



  }, []);

  const text =
    "I am Aman Vishwakarma, a passionate React Developer and tech nerd from Azamgarh, India - 276201. With experience in building modern,  responsive web applications, I specialize in JavaScript (ES6+),  React v19, Redux, Context API, Tailwind CSS, and Bootstrap. I focus on delivering seamless user experiences and optimized performance. As a dedicated Freelancer, I have successfully completed multiple projects, consistently exceeding client expectations with clean, efficient, and scalable code.My strong problem-solving skills and attention to detail allow me to tackle complex challenges, creating solutions that are both innovative and practical. I take pride in writing clean, maintainable code and continuously improving my skills to stay updated with the latest industry trends. Beyond  coding, I enjoy exploring new technologies, collaborating with fellow developers, and contributing to projects that push the boundaries of web development. I believe that great digital experiences are built on both creativity and technical excellence,and I strive to combine these elements in every project I undertake.";
  const words = text.split(" ");

  return (
    <>
      
      <div className="h-screen flex justify-around wrap text-white overflow-hidden">
        <div
          className="  p-10 pl-20 w-100 h-110"
        >
          <img
            src="https://imgur.com/ScTLwjd.png"
            alt="Profile"
            className=" myimage w-90 h-110 "
          />
        </div>
        <div className="  pt-5 w-4/6  h-screen ">
          <h1 className=" text-8xl font-extrabold">About me</h1>
          <p className="text-1xl font-bold text-gray-400 pt-5 w-5/6 flex   flex-wrap ">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-2"
                initial={{ opacity: 0, y: 10 }}
                transition={{
                  delay: index * 0.01,
                  duration: 1,
                  type: "spring",
                  bounce: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
