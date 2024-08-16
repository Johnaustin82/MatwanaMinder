import React from "react";
import "./AboutUs.css";

const services = [
  {
    title: "Booking Tickets Online",
    description:
      "Effortlessly book tickets for your preferred vehicles online.",
  },
  {
    title: "Fleet Management",
    description: "Manage your fleet efficiently with our comprehensive tools.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-background">
      <div className="about-us-container">
        <h2>About Us</h2>
        <div className="top-section">
          <p className="tagline">
            Transforming Transportation: Effortless Booking, Seamless Fleet
            Management
          </p>
        </div>
        <div className="bottom-section">
          <div className="text-container">
            <p className="description">
              Matwana Minder offers a robust platform that revolutionizes the
              way transportation services are managed and utilized.
              <br />
              <br />
              Passengers can easily book tickets online for their preferred
              vehicles, view detailed schedules, and check routes to find the
              most convenient options for their travel needs.
              <br />
              <br />
              For operators, the system provides a comprehensive suite of tools
              to manage their fleet efficiently.
              <br />
              <br />
              Operators can add, update, and monitor their vehicles from any
              location, ensuring seamless operations and optimal vehicle
              utilization.
              <br />
              <br />
              Our solution aims to enhance the overall experience for both
              passengers and operators, making transportation management smarter
              and more accessible.
            </p>
          </div>
        </div>
        <div className="services-section">
          <h2 className="services-title">Our Services</h2>
          <div className="services-container">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="contact-us-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need further information, please feel
            free to contact us at:
          </p>
          <p>Email: info@matwanaminder.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Transport Lane, Nairobi, Kenya</p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
