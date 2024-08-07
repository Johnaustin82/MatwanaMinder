import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import AboutUs from './AboutUs'
import BusGrid from './BusGrid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <AboutUs/> */}
      <BusGrid />
     </div>
    </>
  )
}

export default App
