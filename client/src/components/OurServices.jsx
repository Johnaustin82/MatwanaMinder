import React from 'react';

const services = [
    {
        title: 'Fleet Managment',
        description: 'Streamline your transportation operations with advanced fleet management. Our system provides real-time insights into vehicle locations, performance metrics, and maintenance schedules, allowing you to maximize efficiency and minimize downtime. With intelligent route planning and automated reporting, you can ensure your fleet is always running at peak performance.',
        icon: '🚍',
      },
      {
        title: 'Online Booking',
        description: 'Simplify your travel experience with our user-friendly online booking platform. Whether you are planning your daily commute or a long-distance journey, our seamless booking process ensures quick and easy reservations. With instant confirmation and the ability to manage your bookings on the go, traveling has never been more convenient.',
        icon: '📅',
      },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
