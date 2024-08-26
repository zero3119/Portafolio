import PresentationText from "../components/PresentationText";
import Hire from "../components/Hire";

function Presentation() {
    return (
      <div className="h-[36rem] bg-[url('./assets/circles.svg')] bg-cover relative">
        <div className="h-[38rem] backdrop-blur-lg flex place-items-center justify-evenly">
          <PresentationText/>
          <Hire></Hire>
        </div>
      </div>
    )
  }
  
  export default Presentation;