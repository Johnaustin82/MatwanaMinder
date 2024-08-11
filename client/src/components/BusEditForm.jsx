import React, { useState } from 'react';
import './BusEditForm.css';

const EditBusForm = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [mileage, setMileage] = useState('');
  const [roadName, setRoadName] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setMessage('Details updated successfully!');
    setShowPopup(true);
  };

  return (
    <div className="edit-bus-form">
      <h2 className="form-heading">Edit Bus and Road Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="plateNumber">
            Bus Plate Number
          </label>
          <input
            type="text"
            id="plateNumber"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="mileage">
            Bus Mileage
          </label>
          <input
            type="number"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="roadName">
            Route Name
          </label>
          <input
            type="text"
            id="roadName"
            value={roadName}
            onChange={(e) => setRoadName(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Update Details
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="popup-message">{message}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="popup-close"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBusForm;




