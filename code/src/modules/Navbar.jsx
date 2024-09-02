import {Logo} from '../components/Logo/'
import {Buttons} from '../components/Buttons'

function Navbar({ scrollHandler, section1, section2, section3, section4}) {
    return (
      <div className="h-24 bg-[#101010] w-full fixed m-0 inline-flex place-items-center place-content-between z-10">
        <Logo
        isbig={false}
        ></Logo>
        
        <ol className='inline-flex mr-10'>
        <Buttons 
        to={section1}
        scrollHandler={scrollHandler}
        name='Home'
        isgreen={true}
        />
        <Buttons 
        to={section2}
        scrollHandler={scrollHandler}
        name='About me'
        isgreen={false}
        />
        <Buttons 
        to={section3}
        scrollHandler={scrollHandler}
        name='Projects'
        isgreen={false}
        />
        <Buttons 
        to={section4}
        scrollHandler={scrollHandler}
        name='Contact me'
        isgreen={false}
        />
        </ol>
        
      </div>
    )
  }
  
  export default Navbar;