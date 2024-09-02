import { Logo } from "./Logo";
import Resume from "../assets/Resume.pdf"

function Hire (){
    return(
        <div>
            <Logo isbig= {true}
            ></Logo>
            <div className="text-white flex flex-nowrap justify-around text-4xl font-stencil mt-6">
                <a target="blank" href="https://www.linkedin.com/in/adan-zamorano-6769a9288"><div className=" p-6 rounded-2xl border-white border-4 btn-14 ">HIRE ME</div></a>
                <a target="blank" href={Resume}><div className="bg-[#00957D] p-6 rounded-2xl flex place-items-center  btn-5">RESUME</div></a>
            </div>
        </div>
    );
};

export default Hire;