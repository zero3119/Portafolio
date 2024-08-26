import {Contact} from '../components/Contact/';
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import mailLogo from '../assets/mail.svg';

function Contactme() {
    return (

        
        <div className="mt-20 flex flex-wrap justify-evenly">
          <h3 className="font-stencil text-white text-5xl w-auto">
          Want to know<br />me Better? <br /><br />We can talk <br />through...
          </h3>
          <div >
            <Contact
            to='https://www.youtube.com/'
            img= {linkedinLogo}
            name= 'Linkedin'
            >
            </Contact>
            <Contact
            to='https://www.youtube.com/'
            img= {githubLogo}
            name= 'Linkedin'
            >
            </Contact>
            <Contact
            to='https://www.youtube.com/'
            img= {mailLogo}
            name= 'Linkedin'
            >
            </Contact>
          </div>
        </div>

    )
  }
  
  export default Contactme;