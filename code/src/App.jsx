import Navbar from './modules/Navbar'
import Presentation from './modules/Presentation'
import Aboutme from './modules/Aboutme'
import Projects from './modules/Projects'
import Contactme from './modules/Contactme'
import Footer from './modules/Footer/'
import reactLogo from './assets/robot.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <>
    <div className="h-full m-0 p-0 bg-[#002327] bg-cover relative">
    <Navbar/>
      <div className='h-24'></div>
      <Presentation/>
      <Aboutme/>
      <Projects/>
      <Contactme/>
      <Footer/>
    </div>
    </>
  )
}

export default App
