
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './BusGrid.css';
import busData from './Busses.json';

const BusGrid = () => {
    const [selectedBus, setSelectedBus] = useState(null);

    const handleBusClick = (bus) => {
        setSelectedBus(bus);
    };

    const handleCloseForm = () => {
        setSelectedBus(null);
    };

    return (
        <div>
            {selectedBus ? (
                <div className="form-background">
                    <BookingForm bus={selectedBus} onClose={handleCloseForm} />
                </div>
            ) : (
                <div className="bus-grid-container">
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
    );
};

export default BusGrid;

