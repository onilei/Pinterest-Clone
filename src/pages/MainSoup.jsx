import '../assets/css/PinStyle.css'
import Pin2 from '../component/Pin2'
import Navbar from './Navbar'
import Data2 from '../component/Data2'

export default function MainSoup() {

  return (
    <>
      <div className='soup'>
        <main>
            <div className='mainContainer'>
              {
                Data2 && Data2.map((data)=>  <Pin2 key={data.id} pinSize2={data.size} img2={data.img2}/>)
              }
          </div>
        </main>
        <Navbar />
      </div>
    </>

  )
}
