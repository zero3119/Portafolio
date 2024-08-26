import { Cards } from "../components/Cards";
import Tradaphoto from "../assets/Tradaphoto.png";
import Massaphoto from "../assets/Massaphoto.jpg"

function Projects() {
    return (
      <div className="mt-10 p-0 h-[40rem] relative bg-[#001212] ">
        <div className="absolute h-[44rem] w-full -top-10 backdrop-blur-lg">
          <h2 className="text-white text-6xl w-full font-stencil my-20 p-0 text-center">Projects</h2>
          <div className="flex flex-nowrap justify-evenly">
            <Cards
            img={Massaphoto}
            name="Massa Partner"
            description="A presentation page to get to know a company and schedule a conversation with them"
            to="">
            </Cards>
            <Cards
            img={Tradaphoto}
            name="TRADA"
            description="A presentation page to get to know a company and schedule a conversation with them"
            to="">
            </Cards>
            
            
            </div>
        </div>
        
      </div>
    )
  }
  
  export default Projects;