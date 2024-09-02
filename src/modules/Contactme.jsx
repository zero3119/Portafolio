import React, { forwardRef } from 'react';
import {Contact} from '../components/Contact/';
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import mailLogo from '../assets/mail.svg';

const Contactme = forwardRef((props, ref) => {
    return (

        <>
        
        <div ref={ref} className="my-40 flex flex-wrap justify-evenly">
          <h3 className="font-stencil text-white text-5xl w-auto">
          Want to know<br />me Better? <br /><br />We can talk <br />through...
          </h3>
          <div >
            <Contact
            to='https://www.linkedin.com/in/adan-zamorano-6769a9288'
            img= {linkedinLogo}
            name= 'Linkedin'
            >
            </Contact>
            <Contact
            to='https://github.com/zero3119'
            img= {githubLogo}
            name= 'Github'
            >
            </Contact>
            <Contact
            to= 'mailto: coco.adan31@gmail.com'
            img= {mailLogo}
            name= 'E-mail'
            >
            </Contact>
          </div>
        </div>
        </>
    );
  });
  
  export default Contactme;