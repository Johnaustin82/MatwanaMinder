import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import img4 from "../assets/4.jpeg";

const LoginForm = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  

  const [error, setError] = useState("");
  

  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setLoading(true);   
    setError("");       

    try {
     
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  
      });

     
      const data = await response.json();

      if (response.ok) {
       
        localStorage.setItem("access_token", data.access_token);
        alert("Login successful!");  
        navigate("/homepage"); 
      } else {
       
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
     
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="img">
        <img src={img4} alt="Description" className="form-image" />
        <div className="text">
          <h1>LOGIN WITH US!</h1>
          <h2>
            Log in to access your account and enjoy our seamless travel services
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h4>YOUR ULTIMATE MATATU SOLUTION</h4>
        <h3>Email address</h3>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          placeholder="At least 8 characters"
          value={formData.password}
          onChange={handleChange}
          required 
        />
        <p>
          Don't have an account?{" "}
          <Link to="/Signup" className="sign-up-button">
            Sign up
          </Link>
        </p>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}  // Show loading text if processing
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}  // Display error message if any
      </form>
    </div>
  );
};

export default LoginForm;
