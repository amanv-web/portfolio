import React from 'react'
import HeroSection from '../components/Home/HeroSection'

import About from './About'
import Contact from './Contact'
import Projects from './projects'
import Navbar from '../components/Home/Navbar'
import Skills from './Skills'

function  Home() {
  return (
    <>
    <Navbar/>
    
   
   <div className="relative" >
      <HeroSection/>
        <Skills/>
        <About/>
        <Projects/>
        <Contact/>

       <div className="absolute w-48 h-48 bg-green-200 opacity-100 rounded-xl left-270 top-150 blur-3xl " >
      
    </div>
   

   </div>
   </>
  )
}
export default Home