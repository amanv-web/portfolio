import React from "react";
import { motion } from "framer-motion";

function ProjectsTimeline4() {
  return (
    <div>
      <div className="max-w-5xl md:px-4 md:py-12 mx-auto">
        <motion.div className="grid gap-4 mx-4 sm:grid-cols-12 py-3">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-1 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#3cd597]">
              <h3 className="text-3xl font-semibold text-left">
                Password Generator
              </h3>
              <img
                className="w-full md:h-full h-56 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nZFKBtMqEPK6jGteuXQYONRAyCtW2FCH1A&s"
                alt=""
              />
            </div>
          </div>
          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-3 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300 md:text-md text-sm">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#3cd597]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Key Features
                </h3>
                <li>Instant Password Generation – Get secure passwords with a single click.</li>
                <li>Customizable Options – Choose password length, uppercase/lowercase, numbers, and special characters.</li>
                <li>Copy to Clipboard – Easily copy the generated password with one click.</li>
                <li>User-Friendly UI – Clean and minimalistic interface for ease of use.</li>
                <li>Responsive Design – Works seamlessly on all devices.</li>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#3cd597]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Tech Stack:
                </h3>
                <li>Frontend: React, JavaScript, HTML, CSS</li>
                <li>State Management: React Hooks for real-time updates</li>
                <li>Styling: Tailwind CSS for a modern look</li>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsTimeline4;