import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@planzo.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-twitter"></i> Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* More About Us */}
        <div className="footer-section">
          <h3>More About Us</h3>
          <p>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
