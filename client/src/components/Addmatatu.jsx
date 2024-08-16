// import React, { useState } from 'react';
// import './Addmatatu.css'; // Import the CSS file for styling

// function Addmatatu() {
//   // State variables for form fields
//   const [busName, setBusName] = useState('');
//   const [licensePlate, setLicensePlate] = useState('');
//   const [seatingCapacity, setSeatingCapacity] = useState('');
//   const [driverName, setDriverName] = useState('');
//   const [route, setRoute] = useState('');
//   const [image, setImage] = useState(null); // State for image file

//   // Handler for form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare form data for submission
//     const formData = new FormData();
//     formData.append('busName', busName);
//     formData.append('licensePlate', licensePlate);
//     formData.append('seatingCapacity', seatingCapacity);
//     formData.append('driverName', driverName);
//     formData.append('route', route);
//     formData.append('image', image); // Append the image file

//     try {
//       // Example logic to send data to the server (replace with actual API endpoint)
//       const response = await fetch('http://localhost:5000/vehicle/register-matatu', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data'
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         // Reset form fields after submission
//         setBusName('');
//         setLicensePlate('');
//         setSeatingCapacity('');
//         setDriverName('');
//         setRoute('');
//         setImage(null);
//         console.log('Matatu registered successfully');
//       } else {
//         console.error('Failed to register matatu');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="bus-registration-form">
//       <h1>Bus Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="busName">Bus Name:</label>
//           <input
//             type="text"
//             id="busName"
//             value={busName}
//             onChange={(e) => setBusName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="licensePlate">License Plate:</label>
//           <input
//             type="text"
//             id="licensePlate"
//             value={licensePlate}
//             onChange={(e) => setLicensePlate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="seatingCapacity">Seating Capacity:</label>
//           <input
//             type="number"
//             id="seatingCapacity"
//             value={seatingCapacity}
//             onChange={(e) => setSeatingCapacity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="driverName">Driver Name:</label>
//           <input
//             type="text"
//             id="driverName"
//             value={driverName}
//             onChange={(e) => setDriverName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="route">Route:</label>
//           <input
//             type="text"
//             id="route"
//             value={route}
//             onChange={(e) => setRoute(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Upload Image:</label>
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit">Register Bus</button>
//       </form>
//     </div>
//   );
// }

// export default Addmatatu;

// import React, { useState } from "react";
// import "./Addmatatu.css";

// function Addmatatu() {
//   const [model, setModel] = useState("");
//   const [licensePlate, setLicensePlate] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [mileage, setMileage] = useState("");
//   const [route, setRoute] = useState("");
//   const [price, setPrice] = useState("");
//   const [imageUrl, setImageUrl] = useState(""); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("model", model);
//     formData.append("licensePlate", licensePlate);
//     formData.append("mileage", mileage);
//     formData.append("capacity", capacity);
//     formData.append("route", route);
//     formData.append("price", price);
//     formData.append("image_url", imageUrl); 

//     const token = localStorage.getItem("access_token");

//     if (!token) {
//       console.error("No access token found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:5000/vehicle/register-matatu",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         setModel("");
//         setLicensePlate("");
//         setCapacity("");
//         setRoute("");
//         setMileage("");
//         setPrice("");
//         setImageUrl(""); 
//         console.log("Matatu registered successfully");
//       } else if (response.status === 401) {
//         console.error("Unauthorized: Token may have expired.");
//       } else {
//         console.error("Failed to register matatu:", await response.json());
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="bus-registration-form">
//       <h1>Bus Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="model">Model:</label>
//           <input
//             type="text"
//             id="model"
//             value={model}
//             onChange={(e) => setModel(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="licensePlate">License Plate:</label>
//           <input
//             type="text"
//             id="licensePlate"
//             value={licensePlate}
//             onChange={(e) => setLicensePlate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mileage">Mileage:</label>
//           <input
//             type="text"
//             id="mileage"
//             value={mileage}
//             onChange={(e) => setMileage(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="capacity">Capacity:</label>
//           <input
//             type="number"
//             id="capacity"
//             value={capacity}
//             onChange={(e) => setCapacity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="route">Route:</label>
//           <input
//             type="text"
//             id="route"
//             value={route}
//             onChange={(e) => setRoute(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image_url">Image URL:</label>
//           <input
//             type="text"
//             id="image_url"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register Matatu</button>
//       </form>
//     </div>
//   );
// }

// export default Addmatatu;

import React, { useState } from 'react';
import './Addmatatu.css'

const RegisterMatatu = () => {
  const [formData, setFormData] = useState({
    licensePlate: '',
    model: '',
    capacity: '',
    route: '',
    price: '',
    mileage: '',
    image_url: '',
    operator_id: '',  
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/vehicle/register-matatu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Matatu registered successfully!');
        setFormData({
          licensePlate: '',
          model: '',
          capacity: '',
          route: '',
          price: '',
          mileage: '',
          image_url: '',
          operator_id: '',
        });
      } else {
        setMessage(data.message || 'Error registering matatu.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <>
    <div className='bus-registration-form'>
      <h2>Register Matatu</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="licensePlate"
          placeholder="License Plate"
          className='form-group'
          value={formData.licensePlate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          className='form-group'
          value={formData.model}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          className='form-group'
          value={formData.capacity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="route"
          placeholder="Route"
          className='form-group'
          value={formData.route}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className='form-group'
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="mileage"
          placeholder="Mileage"
          className='form-group'
          value={formData.mileage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          className='form-group'
          value={formData.image_url}
          onChange={handleChange}
        />
        <input
          type="text"
          name="operator_id"
          placeholder="Operator ID"
          className='form-group'
          value={formData.operator_id}
          onChange={handleChange}
          required
        />
        <button className="BTN"type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </>
  );
};

export default RegisterMatatu;
