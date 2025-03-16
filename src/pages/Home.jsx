import React from 'react'
import HeroSection from '../components/Home/HeroSection'

import About from './About'
import Contact from './Contact'
import Projects from './projects'
import Navbar from '../components/Home/Navbar'
import Skills from './Skills'
import { motion } from 'framer-motion'
function  Home() {
  return (
    <>
    <Navbar/>
   
    <motion.img src="https://imgur.com/8cYZYJC.png" 
    animate={{ x:20}}
    transition={{ duration: 1, 
      delay: 0,
    }}
    className=" absolute top-15 left-14 w-35 h-35 -z-1 brightness-50" alt="" />
   <div className="relative" >
      <HeroSection/>
        <Skills/>
        <About/>
        <Projects/>
        <Contact/>

       <div className="absolute w-48 h-48 bg-green-700 opacity-100 rounded-xl left-270 top-150 blur-3xl " >
      
    </div>
   

   </div>
   </>
  )
}
export default Home