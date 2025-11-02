import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="logo">PlanZo</div>

      <nav className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
        <Link to="/events" className="nav-btn">Events</Link>
        <Link to="/availability" className="nav-btn">Availability</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="nav-btn">Dashboard</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/register" className="nav-btn primary-btn">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;