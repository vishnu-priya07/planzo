import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setStatus("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        password,
      });

      console.log(response.data);
      setStatus("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setStatus(error.response.data.message);
      } else {
        setStatus("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Your Account</h2>
        <p className="sub-text">Start booking beautiful venues for your next celebration.</p>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {status && <p className="register-status">{status}</p>}
         <div className="extra-links">
  <Link to="/login">Don’t have an account? Login here</Link>
</div>
      </div>
    </div>
  );
}

export default Register;