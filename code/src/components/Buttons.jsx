import { Link } from 'react-router-dom';

export const Buttons = ({ to, name, isgreen }) => {
  return (
    <>
      {isgreen ? (
        <a
        href={to}
        className=" h-14 w-44 m-2 rounded-xl bg-[#00957D] text-center text-white flex justify-center place-items-center text-[2rem] font-stencil"
      >{name}
        
      </a>
      ) : (
        <a
      href={to}
      className=" h-14 w-44 m-2 rounded-xl bg-white text-center text-black flex justify-center place-items-center text-[2rem] font-stencil"
    >
      {name}
    </a>
      )}
    
    </>
  );
};

