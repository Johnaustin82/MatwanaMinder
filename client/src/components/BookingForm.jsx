import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ bus, onClose, onBookTicket }) => {
    const [travelDate, setTravelDate] = useState('');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const email = localStorage.getItem('email'); 

        if (!email) {
            setError('email not logged in.');
            setLoading(false);
            return;
        }

    
        const travelTimeWithSeconds = `${hours}:${minutes}:${seconds}`;

        const ticketData = {
            travelDate,
            travelTime: travelTimeWithSeconds, 
            email, 
            vehicleId: bus.id  
        };

        try {
            const response = await fetch('http://localhost:5000/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticketData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create ticket');
            }

            const data = await response.json();
            onBookTicket(data);
            alert('Successfully booked ticket!');
            onClose();
        } catch (error) {
            console.error('Error creating ticket:', error);
            setError('There was an error booking the ticket. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-popup">
            <form onSubmit={handleSubmit}>
                <h2>Book a ticket for vehicle with license plate {bus.license_plate}</h2>

                <label htmlFor="travelDate">Travelling On:</label>
                <input 
                    type="date" 
                    id="travelDate" 
                    value={travelDate} 
                    onChange={(e) => setTravelDate(e.target.value)} 
                    required 
                />

                <label htmlFor="travelTime">Travel Time:</label>
                <div className="time-input">
                    <input
                        type="number"
                        min="0"
                        max="23"
                        placeholder="HH"
                        value={hours}
                        onChange={(e) => setHours(e.target.value.padStart(2, '0'))}
                    />
                    :
                    <input
                        type="number"
                        min="0"
                        max="59"
                        placeholder="MM"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value.padStart(2, '0'))}
                    />
                    :
                    <input
                        type="number"
                        min="0"
                        max="59"
                        placeholder="SS"
                        value={seconds}
                        onChange={(e) => setSeconds(e.target.value.padStart(2, '0'))}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default BookingForm;





