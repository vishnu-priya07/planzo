import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // ✅ Redirect if not logged in
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (!user) {
      alert("Please login first to explore events!");
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Your events list
  const events = [
    { name: "Engagement", image: "/images/engagement.jpg" },
    { name: "Wedding", image: "/images/wedding.jpg" },
    { name: "Baby Shower", image: "/images/baby.jpg" },
    { name: "Birthday", image: "/images/birthday.jpg" },
    { name: "Corporate Event", image: "/images/corporate.jpg" },
  ];

  const handleEventClick = (event) => {
    if (selectedEvent?.name === event.name) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  const handleCheckAvailability = (eventName) => {
    navigate("/availability", { state: { eventName } });
  };

  // ✅ Everything must be inside the component function
  return (
    <div className="events-page">
      <h1 className="events-title">Choose Your Event Type</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card-container">
            <div
              className={`event-card ${
                selectedEvent?.name === event.name ? "active" : ""
              }`}
              onClick={() => handleEventClick(event)}
            >
              <img src={event.image} alt={event.name} className="event-image" />
              <h2>{event.name}</h2>
            </div>

            {selectedEvent?.name === event.name && (
              <div className="availability-inline">
                <p>
                  Want to check available halls for{" "}
                  <span className="highlight">{event.name}</span>?
                </p>
                <button
                  className="check-btn"
                  onClick={() => handleCheckAvailability(event.name)}
                >
                  Check Availabilities
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;