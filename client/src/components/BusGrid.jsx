import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './BusGrid.css';
import busData from '../Busses.json';
import TicketsPage from './TicketsPage'; 

const BusGrid = () => {
    const [selectedBus, setSelectedBus] = useState(null);
    const [tickets, setTickets] = useState([]);
    const [viewTickets, setViewTickets] = useState(false);

    const handleBusClick = (bus) => {
        setSelectedBus(bus);
    };

    const handleCloseForm = () => {
        setSelectedBus(null);
    };

    const handleBookTicket = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    const handleDeleteTicket = (ticketId) => {
        setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    };

    return (
        <div>
            {viewTickets ? (
                <TicketsPage 
                    tickets={tickets} 
                    onDeleteTicket={handleDeleteTicket} 
                    onBack={() => setViewTickets(false)} 
                />
            ) : (
                <div>
                    {selectedBus ? (
                        <div className="form-background">
                            <BookingForm 
                                bus={selectedBus} 
                                onClose={handleCloseForm} 
                                onBookTicket={handleBookTicket} 
                            />
                        </div>
                    ) : (
                        <div className="bus-grid-container">
                            <h2>Choose Your Ride and Book Your Ticket..</h2>
                            <button onClick={() => setViewTickets(true)}>View My Tickets</button>
                            <div className="bus-grid">
                                {busData.map((bus) => (
                                    <div key={bus.id} className="bus-item" onClick={() => handleBusClick(bus)}>
                                        <img src={bus.image} alt={bus.name} />
                                        <h3>{bus.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BusGrid;
