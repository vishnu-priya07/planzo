import React, { useState } from "react";
import axios from "axios";

const HallCard = ({ hall, token }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    seatsBooked: 1,
    totalAmount: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;  // ✅ use env variable

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/api/bookings`,   // ✅ dynamic URL
        {
          eventId: hall._id,
          date: form.date,
          time: form.time,
          seatsBooked: form.seatsBooked,
          totalAmount: form.totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Booking successful!");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="hall-card">
      <h3>{hall.title}</h3>
      <p>{hall.location}</p>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Check Availability"}
      </button>

      {showForm && (
        <div className="booking-form">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="seatsBooked"
            placeholder="Seats"
            value={form.seatsBooked}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="totalAmount"
            placeholder="Total Amount"
            value={form.totalAmount}
            onChange={handleChange}
            required
          />
          <button onClick={handleBooking}>Book Now</button>
        </div>
      )}
    </div>
  );
};

export default HallCard;
