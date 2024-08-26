import { Logo } from "./Logo";

function Hire (){
    return(
        <div>
            <Logo isbig= {true}
            ></Logo>
            <div className="text-white flex flex-nowrap justify-around text-4xl font-stencil">
                <div className=" p-6 rounded-2xl border-white border-4">HIRE ME</div>
                <div className="bg-[#00957D] p-6 rounded-2xl flex place-items-center ">RESUME</div>
            </div>
        </div>
    );
};

export default Hire;