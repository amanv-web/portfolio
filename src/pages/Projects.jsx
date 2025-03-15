import React from 'react'
import Navbar from '../components/Home/Navbar'

import ProjectsTimeline from '../components/project/ProjectsTimeline1'
import ProjectsTimeline2 from '../components/project/ProjectsTimeline2'
import ProjectsTimeline3 from '../components/project/ProjectsTimeline3'
import ProjectsTimeline4 from '../components/project/ProjectsTimeline4'

function projects() {
  return (
    <>
     <Navbar/>
    <div className='      '>
        <div>
        <h1 className=" text-8xl font-extrabold flex justify-center">Projects</h1>

        </div>
            <div>
            <ProjectsTimeline />
            <ProjectsTimeline2 />
            <ProjectsTimeline3 />
            <ProjectsTimeline4 />

            </div>
    </div>
    </>
       
  )
}

export default projects