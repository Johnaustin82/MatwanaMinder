import React, { useState, useEffect } from 'react';

const ListMatatus = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON server
    fetch('http://localhost:3000/Buses')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBuses(data); // Set the fetched data to the state
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='Matatu-Container'>
      <h1>List of Matatus</h1>
      <div className='MatatuList'>
        {buses.map((bus) => (
          <div className='MatatuCard' key={bus.id}>
            <h3>{bus.name}</h3>
            <img src={bus.image} alt={`bus${bus.name}`} />
          </div>

        ))}
      </div>
    </div>
  );
};

export default ListMatatus;
