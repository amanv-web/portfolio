import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

  function Skills() {

    const frontendTech = [
      { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" }
    ];

    const backendTech = [
      { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },

      { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    ];

    const devTools = [
      { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
      { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { name: "Framer Motion", logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
      { name: "GSAP", logo: "https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256" },
      { name: "Netlify", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" },
      { name: "Vercel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouZBkJ8YNlcyGGdZ3WJzwLQWK8HDnDY-YOA&s" },

    ];

useEffect(() => {
  gsap.registerPlugin(scrollTrigger);
  gsap.fromTo(
    ".movh1",
    { opacity: 0, scale: 0.8, x: 0 }, // Initial state
    {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 3,
      delay: 1,
      scrollTrigger: {
        trigger: ".movh1",
        start: "top 50%",
        end: "bottom 30%",
        scrub: 1, // Smooth animation during scroll
      },
    }
  );
  gsap.to(".movimg1", {
    opacity: 0,
    scale: 0.8,
    duration: 5,
    delay: 1,
    scrollTrigger: {
      trigger: ".movimg1",
      start: "top 25%",
      end: "bottom 25%",
      scrub: true,
   
      opacity: 1,
    },
  });

  gsap.to(".movimg2", {
    opacity: 0,
    scale: 0.8,
    duration: 5,
    delay: 1,
    scrollTrigger: {
      trigger: ".movimg2",
      start: "top 25%",
      end: "bottom 25%",
      scrub: true,
    
      opacity: 1,
    },
  });

  gsap.to(".movimg3", {
    opacity: 0,
    scale: 0.8,
    duration: 5,
    delay: 1,
    scrollTrigger: {
      trigger: ".movimg3",
      start: "top 25%",
      end: "bottom 25%",
      scrub: true,

      opacity: 1,
    },
  });


}, []);

    return (
      <>

        <Navbar />
        <div className='pb-20'>
          <div>
            <h1 className='text-8xl font-extrabold flex justify-center mt-10'>Skills</h1>
          </div>
          <div>
            <h1 className="movh1 text-2xl  pl-40 ">
              FrontendTech
            </h1>
            <div className="movimg1 flex flex-wrap justify-center gap-6 p-6">
              {frontendTech.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.logo} alt={tech.name} className="w-16 h-16" />
                  <p className="text-sm font-semibold mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="movh1 text-2xl pl-40">
                DevTools & Animation
              </h1>
              <div className="movimg2 flex flex-wrap justify-center gap-6 p-6">
                {devTools.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img src={tech.logo} alt={tech.name} className="w-16 h-16" />
                    <p className="text-sm font-semibold mt-2">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div></div>
          <div>
            <h1 className="movh1 text-2xl  pl-40 text-gray-500 ">
              BackendTech & <span className='text-white'>Database</span>
            </h1>
            <div className="movimg3 flex flex-wrap justify-center gap-6 p-6">
              {backendTech.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.logo} alt={tech.name} className="w-16 h-16" />
                  <p className="text-sm font-semibold mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>




      </>

    );
  };


export default Skills