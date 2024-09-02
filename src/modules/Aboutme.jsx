import robotLogo from '../assets/robot.svg/'
import React, { forwardRef } from 'react';

const Aboutme = forwardRef((props, ref) => {
    return (
      <>
      <div ref={ref} className='pt-10'></div>
      <div  className="mt-16 h-[100vh] p-0 flex flex-wrap justify-center ">
        <h2  className="text-white text-5xl px-20 font-stencil">About Me</h2>
        <div className="w-4/5 h-[24rem] mb-20 flex flex-nowrap justify-evenly place-items-center border-solid border-4 border-white/10 bg-white/10 rounded-3xl">
            <img src={robotLogo} alt="AZ logo" className="h-60"/> 
            <p className='text-white font-stencil font-thin text-xl w-1/2'>
            I am a dedicated computer science student at the University of Texas at El Paso (UTEP), with a strong enthusiasm for knowledge and innovation. My expertise currently extends to front-end development, with a growing focus on back-end technologies and a priority on cybersecurity. 
            I consistently strive to expand my knowledge and give the best results.<br /><br /> 
              
              <sample className="text-2xl">Languages:</sample> Python, Java, Javascript, HTML, CSS. <br /><br /> 
              <sample className="text-2xl">Tools:</sample>  Illustrator, Photoshop, React, Vite, Tailwind, VS Code, github.
            </p>
        </div>
      </div>
      </>
    );
  });
  
  export default Aboutme;