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
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("userId", data.userId); 
        localStorage.setItem("role", data.role); 
        localStorage.setItem("email",data.email)

        alert("Login successful!");

        if (data.role === "operator") {
          navigate("/dashboard");
        } else if (data.role === "passenger") {
          navigate("/homepage");
        } else {
          setError("Unknown user role.");
        }
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
          <h1 className="H1">LOGIN WITH US!</h1>
          <h2 className="H2">
            LOGIN TO ACCESS OUR SEAMLESS SERVICES
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="Loginform">
        <h4 className="H4">YOUR ULTIMATE MATATU SOLUTION</h4>
        <h3 className="H3">Email address</h3>
        <input
          type="email"
          name="email"
          className="Input"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <h3 className="H3">Password</h3>
        <input
          type="password"
          name="password"
          className="Input"
          placeholder="at least 8 characters"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className="P1">
          Don't have an account?{" "}
          <Link to="/Signup" className="sign-up-button">
            Sign up
          </Link>
        </p>
        <button type="submit" disabled={loading} className="btn">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

