import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // create this CSS file based on your style.css

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-main">
      <h1>
        Welcome to <span className="highlight">PlanZo</span>
      </h1>
      <p className="subtitle">
        Book beautiful event halls for Weddings, Receptions, and Special family occasions.
      </p>

      <section className="cards-container">
        <div className="card" onClick={() => navigate("/events")}>
          <h3>Explore Events</h3>
          <p>Browse and choose from premium event halls across the city.</p>
        </div>

        <div className="card" onClick={() => navigate("/availability")}>
          <h3>Check Availability</h3>
          <p>View current hall bookings and slot availability.</p>
        </div>

        <div className="card" onClick={() => navigate("/contact")}>
          <h3>Need Help?</h3>
          <p>Reach out to us for queries or support in booking your venue.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;