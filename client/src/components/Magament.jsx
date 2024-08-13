import React from 'react';
import './magament.css';
import matatu2 from '../assets/matatu2.png';
import { FiSearch } from 'react-icons/fi';

// Sample data
const data = {
  "Buses": [
    {
      "id": 1,
      "name": "city hoppa",
      "price": 50,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeOsGBQtts6ori8hcIMoqAYw8TkQCLSs7ru4rnfaHcg2cWs1BbWau0SVzCk4mGquyjvs&usqp=CAU"
    },
    {
      "id": 2,
      "name": "nganya",
      "price": 100,
      "image": "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
    },
    {
      "id": 3,
      "name": "matatu",
      "price": 40,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5nXhQw2wMNwtKDpUSSNSexHKb5Ww2zhIkJDlHzvvqOwZ-bcil9k7c2doE1Y0FfkJYls&usqp=CAU"
    }
  ]
};

function Magament() {
  // Find the data for the card2 and card3 (id: 1 for card2 and id: 3 for card3)
  const card2Data = data.Buses.find(bus => bus.id === 1);
  const card3Data = data.Buses.find(bus => bus.id === 3);

  return (
    <>
      <div className='Magament'>
        <img src={matatu2} alt='Matatu' />
        <div className='text-container'>
          <h3>Magament Section</h3>
          <h5>Where you will find the latest updates</h5>
        </div>
      </div>
      <div className="card">
        <h4>Management Section</h4>
        <div className="search-container">
          <input type="text" placeholder='Search' />
          <FiSearch className="search-icon" />
        </div>
        <p>Here’s the list of the matatu latest changes</p>
        <div className="cards-container">
          <div className="card2">
            <img src={card2Data?.image} alt={card2Data?.name} />
            <div className="card2-details">
              <h5>{card2Data?.name}</h5>
              <p>Price: ${card2Data?.price}</p>
            </div>
          </div>
          <div className="card3">
            <img src={card3Data?.image} alt={card3Data?.name} />
            <div className="card3-details">
              <h5>{card3Data?.name}</h5>
              <p>Price: ${card3Data?.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AdditionalSection">
        <h4>Additional Section</h4>
        <p>This is some additional content below the Magament section.</p>
      </div>
    </>
  );
}

export default Magament;
