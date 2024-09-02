import React, { forwardRef } from 'react';
import PresentationText from "../components/PresentationText";
import Hire from "../components/Hire";

const Presentation = forwardRef((props, ref) => {
    return (
      <>
      <div ref={ref} className='pt-24'></div>
      <div className="pt--24 h-[36rem] bg-[url('./assets/circles.svg')] bg-cover relative">
        <div className="h-[38rem] backdrop-blur-lg flex place-items-center justify-evenly">
          <PresentationText/>
          <Hire></Hire>
        </div>
      </div>
      </>
    );
  });
  
  export default Presentation;