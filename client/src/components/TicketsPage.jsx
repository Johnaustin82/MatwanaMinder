import React from 'react';
import { Link } from 'react-router-dom';

const TicketsPage = ({ tickets, onDeleteTicket }) => {
    return (
        <div>
            <h2>Your Booked Tickets</h2>
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
                            <div>
                                <Link to={`/Reviews/${ticket.id}`}>Add/Edit Review</Link>
                                <button onClick={() => onDeleteTicket(ticket.id)}>Cancel Ticket</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TicketsPage;