import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketsPage.css';

const TicketsPage = ({ onBack }) => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const email = localStorage.getItem('email'); 
                const response = await fetch(`https://matwanaminder-7.onrender.com/tickets?email=${email}`);
                const data = await response.json();
                setTickets(data);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        fetchTickets();
    }, []);

    const handleReview = () => {
        navigate('/reviews');
    };

    const handleDelete = async (ticketId) => {
        try {
            const response = await fetch(`https://matwanaminder-7.onrender.com/tickets/${ticketId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTickets(tickets.filter(ticket => ticket.id !== ticketId));
            } else {
                console.error("Failed to delete ticket");
            }
        } catch (error) {
            console.error("Error deleting ticket:", error);
        }
    };

    return (
        <div className="tickets-page">
            <h2>Your Booked Tickets</h2>
            <button onClick={onBack}>Back to Bus List</button>
            {tickets.length === 0 ? (
                <p>No tickets booked yet.</p>
            ) : (
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id}>
                            <p>Date: {ticket.travelDate}</p>
                            <p>Time: {ticket.travelTime}</p>
                            <button onClick={handleReview}>Review your ride</button>
                            <button onClick={() => handleDelete(ticket.id)}>Cancel Ticket</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TicketsPage;
