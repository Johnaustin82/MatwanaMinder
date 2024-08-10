import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import AboutUs from './AboutUs'
import BusGrid from './BusGrid'
import ProfilePage from './ProfilePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        {/* <AboutUs/>  
       <BusGrid />  */}
       <ProfilePage/>
     </div>
    </>
  )
}

export default App
