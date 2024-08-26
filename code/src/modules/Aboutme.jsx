import robotLogo from '../assets/robot.svg/'

function Aboutme() {
    return (
      <div className="mt-20 p-0 flex flex-wrap justify-center ">
        <h2 className="text-white text-6xl font-stencil">About Me</h2>
        <div className="w-5/6 h-96 my-20 flex flex-nowrap justify-evenly place-items-center border-solid border-4 border-white/10 bg-white/10 rounded-3xl">
            <img src={robotLogo} alt="AZ logo" className="h-60"/> 
            <p className='text-white font-stencil font-thin text-2xl w-1/2'>
              I am currently well furnished on front end development and focusing more on back end with a focuse on cybersecurity. I am someone who always tries to keep learning and always give the best results that I can.  <br /><br /> 
              <sample className="text-3xl">School:</sample> University of texas al el paso (UTEP)<br /><br /> 
              <sample className="text-3xl">Languages:</sample> Python, Java, Javascript, HTML, CSS
            </p>
        </div>
      </div>
    )
  }
  
  export default Aboutme;