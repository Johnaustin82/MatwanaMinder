import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import "./BusGrid.css";
import TicketsPage from "./TicketsPage"; 
import BusItem from "./BusItem"; 

const BusGrid = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [viewTickets, setViewTickets] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched bus data:", data); 
        setBuses(data || []); 
      })
      .catch((error) => console.error("Error fetching bus data:", error));
  }, []);

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
    setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
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
              <button onClick={() => setViewTickets(true)}>
                View My Tickets
              </button>
              <div className="bus-grid">
                {buses.length > 0 ? (
                  buses.map((bus) => (
                    <BusItem key={bus.id} bus={bus} handleBusClick={handleBusClick} />
                  ))
                ) : (
                  <p>Loading buses...</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusGrid;
