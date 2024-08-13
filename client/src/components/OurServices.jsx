import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices.css";

const OurServices = () => {
  const navigate = useNavigate();
  return (
    <section className="our-services">
      <div className="services-half left-half">
        <img
          src="https://i.pinimg.com/236x/be/d9/5f/bed95f67a0643a9dcd08b39554c52f0e.jpg"
          alt="Matwana Minder Bus Service"
          className="matwana-image"
        />
        <p className="service-description">
          Matwana Minder offers a reliable and efficient bus service that keeps
          you connected with
          <br />
          timely arrivals and safe journeys.
          <br />
          Enjoy a seamless travel experience with real-time updates and advanced
          booking options.
        </p>
      </div>
      <div className="services-half right-half">
        <div className="service-item">
          <div className="service-icon">🚍</div>
          <h3 className="service-title">Fleet Management</h3>
          <button className="service-button" onClick={() => navigate("/fleet")}>
            Go to Fleet
          </button>
        </div>
        <div className="service-item">
          <div className="service-icon">📅</div>
          <h3 className="service-title">Online Booking</h3>
          <button
            className="service-button"
            onClick={() => navigate("/booking")}
          >
            Go to Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
