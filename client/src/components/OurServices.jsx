import React from 'react';

const services = [
  {
    title: 'Fleet Optimization',
    description: 'Enhance the efficiency of your bus fleet with real-time tracking and intelligent route management, ensuring optimal performance and cost savings.',
    icon: '🚍',
  },
  {
    title: 'Seamless Booking Experience',
    description: 'Enjoy a hassle-free booking process with our online reservation system, offering instant confirmations and easy access to your travel plans.',
    icon: '📅',
  },
  {
    title: 'Smart Ticketing Solutions',
    description: 'Experience the convenience of digital ticketing with our automated system, designed for easy purchase, quick validation, and secure transactions.',
    icon: '🎫',
  },
  {
    title: 'Timely Bus Schedules',
    description: 'Stay informed with real-time updates on bus schedules and route changes, ensuring you always know when and where your next ride will be.',
    icon: '🕒',
  },
  {
    title: 'Operational Hours Tracking',
    description: 'Monitor and manage bus service hours efficiently, ensuring accurate tracking of operational times and staff schedules for improved service reliability.',
    icon: '⏰',
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
