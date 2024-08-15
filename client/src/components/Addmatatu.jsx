// Addmatatu.js
import React, { useState } from 'react';
import './Addmatatu.css';

function Addmatatu() {
  const [busName, setBusName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [driverName, setDriverName] = useState('');
  const [route, setRoute] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      busName,
      licensePlate,
      seatingCapacity,
      driverName,
      route
    });
    setBusName('');
    setLicensePlate('');
    setSeatingCapacity('');
    setDriverName('');
    setRoute('');
  };

  return (
    <div className="bus-registration-form">
      <h1>Bus Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="busName">Bus Name:</label>
          <input
            type="text"
            id="busName"
            placeholder='Bus name'
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="licensePlate">License Plate:</label>
          <input
            type="text"
            id="licensePlate"
            placeholder='License Plate'
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seatingCapacity">Seating Capacity:</label>
          <input
            type="number"
            id="seatingCapacity"
            placeholder='Seating Capacity'
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            placeholder='Driver Name'
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="route">Route:</label>
          <input
            type="text"
            id="route"
            placeholder='Route'
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register Bus</button>
      </form>
    </div>
  );
}

export default Addmatatu;
