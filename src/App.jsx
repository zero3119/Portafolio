import { useRef } from "react";
import Navbar from './modules/Navbar'
import Presentation from './modules/Presentation'
import Aboutme from './modules/Aboutme'
import Projects from './modules/Projects'
import Contactme from './modules/Contactme'
import Footer from './modules/Footer/'



function App() {

  const presentation = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const contactme = useRef(null);

  const scrollHandler = (elmRef) => {
    if (elmRef.current) {
      window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="h-full m-0 p-0 bg-[#002327] bg-cover relative">
    <Navbar scrollHandler={scrollHandler} section1={presentation} section2={aboutme} section3={projects} section4={contactme}/>

    
      
      <Presentation ref={presentation}/>
      <Aboutme ref={aboutme}/>
      <Projects ref={projects}/>
      <Contactme ref={contactme}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
