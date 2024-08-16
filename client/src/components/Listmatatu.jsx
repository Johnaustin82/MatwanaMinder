import React, { useEffect, useState } from 'react';
import VehicleCard from './VehicleCard';

const Listmatatu = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/vehicles')
            .then(response => response.json())
            .then(data => setVehicles(data))
            .catch(error => console.error("There was an error fetching the vehicles!", error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/vehicles/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
                alert(data.message);
            })
            .catch(error => console.error("There was an error deleting the vehicle!", error));
    };

    const handleUpdate = (id, updatedData) => {
        fetch(`http://localhost:5000/vehicles/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => response.json())
            .then(data => {
                setVehicles(vehicles.map(vehicle => 
                    vehicle.id === id ? { ...vehicle, ...updatedData } : vehicle
                ));
                alert("Vehicle updated successfully!");
            })
            .catch(error => console.error("There was an error updating the vehicle!", error));
    };

    return (
        <div className="vehicle-list">
            {vehicles.map(vehicle => (
                <VehicleCard 
                    key={vehicle.id} 
                    vehicle={vehicle} 
                    onDelete={handleDelete} 
                    onUpdate={handleUpdate} 
                />
            ))}
        </div>
    );
};

export default Listmatatu;
