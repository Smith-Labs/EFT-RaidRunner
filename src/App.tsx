
import './App.css'
import Navbar from '@components/Navbar'
import InfoPage from './components/InfoPage'

function App() {

  return (
    <>
      <div className=' xl:w-lvw'>
        <div className='pb-16'>
          <Navbar />
        </div>

        <InfoPage/>
        
      </div>
    </>
  )
}

export default App
