import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login'
import SignupForm from './components/Sign';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'
import BusGrid from './components/BusGrid';
import ProfilePage from './components/ProfilePage';
import Addmatatu from './components/Addmatatu';
import Landingpage from './components/Landingpage';
import Dashboard from './components/Dashboard/Dashboard';
import ListMatatus from './components/Listmatatu';
import Review from './components/Review';
import ViewReviews from './components/ViewReviews';


function App() {
  return (
    <>
     <div>
     <Router>
      <Routes>
        <Route path='/view-reviews'element={<ViewReviews/>}/>
        <Route path="/reviews"element={<Review/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/list-matatu'element={<ListMatatus/>}/>
        <Route path='/'element={<Landingpage/>}/>
        <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/" element={<SignupForm/>} />
        <Route path='/homepage'element={<HomePage/>}/>
        <Route path='/About'element={<AboutUs/>}/>
        <Route path='/services'element={<BusGrid/>}/>
        <Route path='/profile'element={<ProfilePage/>}/>
        <Route path='/add-matatu'element={<Addmatatu/>}/>
      </Routes>
    </Router>
     </div>
    </>
  )
}

export default App;
