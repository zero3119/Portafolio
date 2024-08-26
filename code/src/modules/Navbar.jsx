import Logo from '../components/Logo/'
import {Buttons} from '../components/Buttons'

function Navbar() {
    return (
      <div className="h-24 bg-[#101010] w-full fixed m-0 inline-flex place-items-center place-content-between z-10">
        <Logo/>
        
        <ol className='inline-flex mr-10'>
        <Buttons 
        to='https://google.com'
        name='Home'
        isgreen={true}
        />
        <Buttons 
        to='https://google.com'
        name='About me'
        isgreen={false}
        />
        <Buttons 
        to='https://google.com'
        name='Projects'
        isgreen={false}
        />
        <Buttons 
        to='https://google.com'
        name='Contact me'
        isgreen={false}
        />
        </ol>
        
      </div>
    )
  }
  
  export default Navbar;