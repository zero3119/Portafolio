import { Link } from 'react-router-dom';

export const Cards = ({ to, name, description, img }) => {
  return (
    <>
      <div className='h-96 w-64 bg-[#00343A] rounded-xl flex flex-wrap font-stencil text-white'>
        <img src={img} alt="" className='w-2/3 h-32 mx-auto  mt-2 rounded-lg' />
        <h3 className='w-2/3 mx-auto text-xl '>{name}</h3>
        <p className='w-2/3 mx-auto '>{description}</p>
        <a href={to} className='flex w-2/3 h-12 mx-auto border-solid border-[3px] border-white/10 bg-white/10 rounded-3xl justify-center text-2xl place-items-center'>visit</a>
    </div>
    
    </>
  );
};

