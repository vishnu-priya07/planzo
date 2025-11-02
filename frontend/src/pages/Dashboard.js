import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.name);
    }

    const token = localStorage.getItem("token");
    const API_URL = process.env.REACT_APP_API_URL; // ✅ use environment variable

    if (token) {
      axios
        .get(`${API_URL}/api/bookings/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setBookings(res.data))
        .catch((err) => console.error("Error fetching bookings:", err));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userName || "User"} 👋</h2>
      <h3>Your Booking History</h3>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>No previous bookings found 💺</p>
          <p>
            Book your first event from the <strong>Events</strong> page!
          </p>
        </div>
      ) : (
        <div className="booking-list">
          {bookings.map((b) => (
            <div key={b._id} className="booking-card">
              <h4>{b.event?.title}</h4>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(b.event?.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Location:</strong> {b.event?.location}
              </p>
              <p>
                <strong>Seats Booked:</strong> {b.seatsBooked}
              </p>
              <p>
                <strong>Status:</strong> {b.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
