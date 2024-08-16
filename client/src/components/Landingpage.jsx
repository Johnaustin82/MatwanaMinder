import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./landingpage.css"

function LandingPage() {
  const images = [
    "https://i.pinimg.com/236x/45/00/c3/4500c3d9271d7ca978e06f41fa9610aa.jpg",
    "https://i.pinimg.com/236x/5e/34/c0/5e34c09f94d5b453e8010a444ca520c4.jpg",
    "https://i.pinimg.com/236x/d6/6d/cb/d66dcb567cf3fb9c97cd6fbec44d14d4.jpg",
    "https://i.pinimg.com/236x/c7/c4/8f/c7c48f1cee5c9362467f0b8cf86e067e.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="main-wrapper">
      <header>
        <div className="top-bar">
          <h3>Matwana Minder</h3>
          <ul className="nav-items">
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
        </div>
      </header>
      <div className="hero-section">
        <div className="content-area">
          <div className="text-block">
            <h1>Welcome to Matwana Minder</h1>
            <p> The ultimate platform designed to streamline fleet management for operators and provide seamless online booking for passengers. Whether you're managing a fleet of vehicles or looking for a convenient way to book your next trip, Matwana Minder offers powerful tools and features to simplify your journey. Join us today and experience a smarter, more efficient way to manage and travel.</p>
            <button className="cta-button"><Link to={'/Signup'}>Start now</Link></button>
          </div>
          <div className="image-box">
            <img src={images[currentImageIndex]} alt="Matwana Minder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
