import React, { useState } from 'react';
import './Vehicles.css'

const VehicleCard = ({ vehicle, onDelete, onUpdate }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [mileage, setMileage] = useState(vehicle.mileage);
    const [route, setRoute] = useState(vehicle.route);

    const handleToggleDetails = () => setShowDetails(!showDetails);
    const handleDelete = () => onDelete(vehicle.id);
    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleUpdate = () => {
        onUpdate(vehicle.id, { mileage, route });
        setIsEditing(false);
    };

    return (
        <div className="vehicle-card">
            <img className="vehicle-image" src={vehicle.image_url} alt={vehicle.license_plate} />
            <h3 className="vehicle-title">{vehicle.license_plate}</h3>
            <button className="vehicle-button" onClick={handleToggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <div className="vehicle-details">
                    <p>Capacity: {vehicle.capacity}</p>
                    <p>Price: {vehicle.price}</p>
                    {isEditing ? (
                        <div>
                            <label className="vehicle-label">
                                Mileage:
                                <input 
                                    className="vehicle-input" 
                                    type="number" 
                                    value={mileage} 
                                    onChange={(e) => setMileage(e.target.value)} 
                                />
                            </label>
                            <label className="vehicle-label">
                                Route:
                                <input 
                                    className="vehicle-input" 
                                    type="text" 
                                    value={route} 
                                    onChange={(e) => setRoute(e.target.value)} 
                                />
                            </label>
                            <button className="vehicle-button" onClick={handleUpdate}>Save</button>
                        </div>
                    ) : (
                        <>
                            <p>Mileage: {mileage}</p>
                            <p>Route: {route}</p>
                        </>
                    )}
                    <button className="vehicle-button" onClick={handleEditToggle}>
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                    <button className="vehicle-button vehicle-button-danger" onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default VehicleCard;
