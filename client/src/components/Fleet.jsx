import React from "react";
import "../App.css";// Assuming you're using CSS for styling

const Fleet = () => {
  return (
    <div className="fleet-container">
      <div className="fleet-image">
        <img
          src="your-image-url.jpg"
          alt="Fleet"
          className="image"
        />
      </div>
      <div className="fleet-buttons">
        <div className="button-group-left">
          <button className="fleet-button">Add a Matatu</button>
          <button className="fleet-button">Edit your matatu details</button>
        </div>
        <div className="button-group-right">
          <button className="fleet-button">View your matatus</button>
          <button className="fleet-button">Delete your matatu</button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
