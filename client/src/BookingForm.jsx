
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ bus, onClose }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [travelDate, setTravelDate] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Booking Details:\nFrom: ${from}\nTo: ${to}\nTravel Date: ${travelDate}\nReturn Date: ${returnDate}`);
        onClose();
    };

    return (
        <div className="form-popup">
            <form onSubmit={handleSubmit}>
                <h2>Book a ticket for {bus.name}</h2>
                <label htmlFor="from">Leaving From:</label>
                <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)} required />
                <label htmlFor="to">Travelling To:</label>
                <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)} required />
                <label htmlFor="travelDate">Travelling On:</label>
                <input type="date" id="travelDate" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} required />
                <button type="button" className="close-btn" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default BookingForm;
