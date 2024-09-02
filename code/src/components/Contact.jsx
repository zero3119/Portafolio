import { Link } from 'react-router-dom';


export const Contact = ({ to, name, img }) => {
  return (
    <>
        <a href={to} target='blank' className='group font-stencil text-white flex flex-wrap text-3xl mb-4'>
            <div className='h-20 w-auto flex flex-wrap place-items-center'>

                  <div className='h-20 w-20 bg-white/10 border-white/50 border-solid border-2 rounded-2xl flex justify-center place-items-center group-hover:bg-white/20 group-hover:border-white duration-500'>
                    <img src={img} alt="" className='h-12 w-12'/>
                  </div>
                  
                <h3 className='m-4'>{name}</h3>
            </div>
        </a>
    </>
  );
};

