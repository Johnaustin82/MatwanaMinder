import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import AboutUs from './AboutUs'
import BusGrid from './BusGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
     <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/" element={<SignupForm/>} />
        <Route path='/homepage'element={<HomePage/>}/>
        <Route path='/About'element={<AboutUs/>}/>
        <Route path='/services'element={<OurServices/>}/>
        <Route path='/fleet'element={<Fleet/>}/>
        <Route path='/booking'element={<BusGrid/>}/>

      </Routes>
    </Router>
     </div>
    </>
  )
}

export default App
