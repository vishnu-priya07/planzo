import React, { useState } from "react";
import "./Contact.css"; // create this file based on contact.css

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to backend API later
    console.log({ name, email, message });
    setStatus("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="contact-page">
      {/* Intro Section */}
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>Have a question or need assistance with your event booking? Reach out to us!</p>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-container">

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </section>
    </main>
  );
}

export default Contact;