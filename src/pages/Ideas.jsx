import '../assets/css/PinStyle.css'
import Pin from '../component/Pin'
import Data from '../component/Data'
import Navbar from './Navbar'

export default function Ideas() {

  return (
    <>
      <div className='First'>
        <main>
            <div className='mainContainer'>
              {
                 Data && Data.map((data)=>  <Pin key={data.id} pinSize={data.size} img={data.img}/>)
              }
          </div>
        </main>
        <Navbar />
      </div>
    </>

  )
}
