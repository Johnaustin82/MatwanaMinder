import React from "react";
import "./HomePage.css";
// import "./Navbar/navbar.css"
import Navbar from "./Navbar/Navbar";

function HomePage() {
  return (
    <>
    <Navbar/>
      {/* <div className="nav">
        <div className="nav-logo">Matwana Minder</div>
        <ul className="nav-menu">
          <li>About us</li>
          <li>Our services</li>
        </ul>
      </div> */}
      <div className="home-page">
        <div className="Content"style={{ fontSize: '60px', fontWeight: 'bold', textAlign: 'left' }}>
        <p>"RIDE<br/>SMART,<br/>MANAGE<br/>BETTER:<br/>YOUR<br/>ULTIMATE<br/>MATATU<br/>SOLUTION"</p>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/34/3a/f4/343af4286a85b9a1765fd3df712b6a48.jpg"
            alt="Side"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
