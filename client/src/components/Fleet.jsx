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
          <button className="fleet-button">Button 1</button>
          <button className="fleet-button">Button 2</button>
        </div>
        <div className="button-group-right">
          <button className="fleet-button">Button 3</button>
          <button className="fleet-button">Button 4</button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
