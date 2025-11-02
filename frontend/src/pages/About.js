import React from "react";
import "./About.css"; // create this CSS file based on your about.css

function About() {
  return (
    <main className="about-section">
      <div className="container">
        {/* Intro Section */}
        <div className="intro-section">
          <h1>
            About <span className="highlight">PlanZo</span>
          </h1>
          <p className="intro">
            Organizing and booking events shouldn’t be stressful. PlanZo is your all-in-one event 
            management and booking platform designed to simplify planning for students, staff, 
            and organizations—whether it’s a seminar, fest, or personal celebration.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          <div className="box">
            <h2>Why PlanZo?</h2>
            <p>
              Events often get chaotic without a proper system. PlanZo provides a structured 
              and user-friendly platform to manage bookings, track schedules, and keep everything 
              organized in one place.
            </p>
          </div>

          <div className="box">
            <h2>How it Works</h2>
            <p>
              Create or join events with just a few clicks. From booking venues to managing 
              registrations, PlanZo streamlines the entire event planning process.
            </p>
          </div>

          <div className="box">
            <h2>Our Mission</h2>
            <p>
              To empower students and organizations with a smart, reliable, and collaborative 
              platform that makes event management simple, enjoyable, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;