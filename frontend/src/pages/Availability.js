import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Availability.css";

const Availability = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [filteredHalls, setFilteredHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    timeSlot: "",
    guests: "",
    paymentStatus: "Pending",
  });

  // ✅ Dummy hall data (hardcoded)
  const halls = [
    {
      _id: "1",
      name: "Grand Lotus Banquet Hall",
      location: "Hyderabad",
      capacity: 300,
      isAvailable: true,
    },
    {
      _id: "2",
      name: "The Pearl Convention Center",
      location: "Chennai",
      capacity: 500,
      isAvailable: false,
    },
    {
      _id: "3",
      name: "Royal Palace Hall",
      location: "Bangalore",
      capacity: 250,
      isAvailable: true,
    },
    {
      _id: "4",
      name: "Sunshine Celebration Hall",
      location: "Mumbai",
      capacity: 400,
      isAvailable: true,
    },
    {
      _id: "5",
      name: "Emerald Grand Function Hall",
      location: "Delhi",
      capacity: 350,
      isAvailable: false,
    },
  ];

  // ✅ Redirect to login if not authenticated
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (!user) {
      alert("Please login first to check hall availability!");
      navigate("/login");
    }
  }, [navigate]);

  // 🔍 Search handler
  const handleSearch = () => {
    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }

    const filtered = halls.filter((hall) =>
      hall.location.toLowerCase().includes(city.toLowerCase())
    );

    if (filtered.length === 0) {
      alert(`No halls found in "${city}"`);
    }

    setFilteredHalls(filtered);
    setSelectedHall(null);
  };

  // 🔁 Input change handler
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Booking handler
  const handleBooking = (hall) => {
    if (
      !formData.name ||
      !formData.contact ||
      !formData.date ||
      !formData.timeSlot ||
      !formData.guests
    ) {
      alert("Please fill all fields before booking!");
      return;
    }

    alert(
      `🎉 Booking Confirmed!\n\nHall: ${hall.name}\nCity: ${hall.location}\nName: ${formData.name}\nContact: ${formData.contact}\nDate: ${formData.date}\nTime: ${formData.timeSlot}\nGuests: ${formData.guests}\nPayment Status: ${formData.paymentStatus}`
    );

    // reset
    setSelectedHall(null);
    setFormData({
      name: "",
      contact: "",
      date: "",
      timeSlot: "",
      guests: "",
      paymentStatus: "Pending",
    });
  };

  return (
    <div className="availability-page">
      <h2 className="page-title">Find Event Halls Near You</h2>
      <p className="subtitle">Enter your city name to check available halls</p>

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {filteredHalls.length === 0 && city === "" ? (
        <p className="hint-text">Start by entering your city name above 👆</p>
      ) : filteredHalls.length === 0 && city !== "" ? (
        <p className="no-results">No halls found in "{city}"</p>
      ) : (
        <div className="halls-list">
          {filteredHalls.map((hall) => (
            <div
              key={hall._id}
              className={`hall-card ${
                hall.isAvailable ? "available" : "unavailable"
              }`}
            >
              <div className="hall-info">
                <h3>{hall.name}</h3>
                <p>
                  <strong>City:</strong> {hall.location}
                </p>
                <p>
                  <strong>Capacity:</strong> {hall.capacity}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={hall.isAvailable ? "green" : "red"}>
                    {hall.isAvailable ? "Available" : "Not Available"}
                  </span>
                </p>
              </div>

              {hall.isAvailable && (
                <button
                  className="check-btn"
                  onClick={() =>
                    setSelectedHall(
                      selectedHall?._id === hall._id ? null : hall
                    )
                  }
                >
                  {selectedHall?._id === hall._id
                    ? "Hide Booking Form"
                    : "Book This Hall"}
                </button>
              )}

              {selectedHall?._id === hall._id && (
                <div className="booking-form">
                  <h4>Book This Hall</h4>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />

                  <input
                    type="tel"
                    name="contact"
                    placeholder="Enter contact number"
                    value={formData.contact}
                    onChange={handleFormChange}
                    required
                  />

                  <div className="form-row">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      required
                    />
                    <input
                      type="text"
                      name="timeSlot"
                      placeholder="e.g. Morning, Afternoon, Evening"
                      value={formData.timeSlot}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <input
                    type="number"
                    name="guests"
                    placeholder="Enter number of guests"
                    value={formData.guests}
                    onChange={handleFormChange}
                    required
                  />

                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleFormChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                  </select>

                  <button
                    className="book-btn"
                    onClick={() => handleBooking(hall)}
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Availability;