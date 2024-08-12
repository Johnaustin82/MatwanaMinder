import React from 'react';
import './TicketsPage.css';

const TicketsPage = ({ tickets, onDeleteTicket, onBack }) => {
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
                            <p>Bus: {ticket.busName}</p>
                            <p>From: {ticket.from}</p>
                            <p>To: {ticket.to}</p>
                            <p>Date: {ticket.travelDate}</p>
                            <p>Time: {ticket.travelTime}</p>
                            <button onClick={() => onDeleteTicket(ticket.id)}>Cancel Ticket</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TicketsPage;