import robotLogo from '../assets/robot.svg/'

function Logo() {
    return (
      <div className="h-20 w-80 ml-10">
        <img src={robotLogo} className="h-20 relative object-fit inline-block" alt="React logo" />
        <p className='text-5xl inline-block align-middle font-stencil text-white'>AZ</p>
      </div>
    )
  }
  
  export default Logo;