import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from '../components/Home/Navbar'

function Contact() {
  return (
      <>
      <Navbar/>
      
    
    <div className=" flex justify-center items-center h-screen pb-40 ">


      <div className=" w-1/2 p-10 ">
        <h1 className=" text-6xl font-extrabold text-center  ">Get in touch</h1>
        <p className="pt-4">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div>
          <div
            className=" flex
         justify-around pt-7 gap-2"
          >
            <div className="flex items-center gap-2 bg-[#3cd597] p-2 rounded-2xl">
              {" "}
              <FaLinkedin /> <button>Linked In</button>
            </div>{" "}
            <div className="flex items-center gap-2 bg-[#3cd597] p-2 rounded-2xl">
              {" "}
              <FaLinkedin /> <button>Email</button>
            </div>{" "}
            <div className="flex items-center gap-2 bg-[#3cd597] p-2 rounded-2xl">
              {" "}
              <FaLinkedin /> <button>Resume</button>
         
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
