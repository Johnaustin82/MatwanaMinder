import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login'
import SignupForm from './components/Sign';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices';
import Fleet from './components/Fleet';
import BusGrid from './components/BusGrid';
import ProfilePage from './components/ProfilePage';


function App() {
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
        <Route path='/profile'element={<ProfilePage/>}/>

      </Routes>
    </Router>
     </div>
    </>
  )
}

export default App;
