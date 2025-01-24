import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
          <p>&copy; 2025 Your Website Name. All rights reserved.</p>
          <ul class="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
