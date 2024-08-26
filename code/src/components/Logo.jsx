import robotLogo from '../assets/robot.svg/'

export const Logo = ({isbig}) => {
  return (
    <>
      {isbig ? (
        <div className="h-64 w-auto ml-10">
        <img src={robotLogo} className="h-60 relative object-fit inline-block" alt="React logo" />
        <p className='text-[10rem] inline-block align-middle font-stencil text-white tracking-widest'>AZ</p>
      </div>
      ) : (
        <div className="h-20 w-80 ml-10">
            <img src={robotLogo} className="h-20 relative object-fit inline-block" alt="React logo" />
            <p className='text-5xl inline-block align-middle font-stencil text-white tracking-widest'>AZ</p>
          </div>
      )}
    
    </>
  );
};