import React from 'react';

export const Buttons = ({ scrollHandler, to, name, isgreen }) => {
  return (
    <>
      {isgreen ? (
        <div
        onClick={() => scrollHandler(to)} className=" h-14 w-44 m-2 rounded-xl bg-[#00957D] text-center text-white flex justify-center place-items-center text-[2rem] font-stencil cursor-pointer hover:bg-[#23655a] hover:text-[#dcdcdc]"
      >{name}
        
      </div>
      ) : (
        <div
        onClick={() => scrollHandler(to)} className=" h-14 w-44 m-2 rounded-xl bg-white text-center text-black flex justify-center place-items-center text-[2rem] font-stencil cursor-pointer hover:bg-[#949494] "
    >
      {name}
    </div>
      )}
    
    </>
  );
};

