import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      {/* <div className="nav">
        <div className="nav-logo">Matwana Minder</div>
        <ul className="nav-menu">
          <li>About us</li>
          <li>Our services</li>
          <li>Profile</li>
        </ul>
      </div> */}
      <div className="home-page">
        <div
          className="Content"
        >
          <span>"RIDE SMART,MANAGE BETTER: YOUR ULTIMATE MATATU SOLUTION"</span>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/34/3a/f4/343af4286a85b9a1765fd3df712b6a48.jpg"
            alt="Side"
          />
        </div>
      </div>
      <div className="About">
        
      </div>
      <footer>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further information, please feel
          free to contact us at:
        </p>
        <p>Email: info@matwanaminder.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Transport Lane, Nairobi, Kenya</p>
      </footer>
      
    </>
  );
}

export default HomePage;
