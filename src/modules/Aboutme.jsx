import robotLogo from '../assets/robot.svg/'
import React, { forwardRef } from 'react';

const Aboutme = forwardRef((props, ref) => {
    return (
      <>
      <div ref={ref} className='pt-10'></div>
      <div  className="mt-16 p-0 flex flex-wrap justify-center ">
        <h2  className="text-white text-6xl font-stencil">About Me</h2>
        <div className="w-5/6 h-[26rem] my-20 flex flex-nowrap justify-evenly place-items-center border-solid border-4 border-white/10 bg-white/10 rounded-3xl">
            <img src={robotLogo} alt="AZ logo" className="h-60"/> 
            <p className='text-white font-stencil font-thin text-xl w-1/2'>
            I am a dedicated computer science student at the University of Texas at El Paso (UTEP), with a strong enthusiasm for knowledge and innovation. My expertise currently extends to front-end development, with a growing focus on back-end technologies and a priority on cybersecurity. 
            I consistently strive to expand my knowledge and give the best results.<br /><br /> 
              
              <sample className="text-3xl">Languages:</sample> Python, Java, Javascript, HTML, CSS<br /><br /> 
              <sample className="text-3xl">Tools:</sample>  Illustrator, Photoshop, React, Vite, Tailwind.
            </p>
        </div>
      </div>
      </>
    );
  });
  
  export default Aboutme;