import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const responce=axios.post("https://rizeos.onrender.com/api/auth/register",form);
    console.log("Form submitted:", form);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div className="signup-right">
        <h2>Create Account</h2>
        <div className="social-icons">
          <span>f</span>
          <span>G+</span>
          <span>in</span>
        </div>
        <p className="or-text">or use your email for registration:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
