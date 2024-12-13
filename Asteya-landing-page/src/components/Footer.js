import React from "react";
import "./Footer.css";
import logo from '../assets/icons/mainLogo.svg'
import LinkedIn from '../assets/icons/LinkedIn.svg'
import Facebook from '../assets/icons/Facebook.svg'
import Instagram from '../assets/icons/Instagram@2x.svg'
import Twitter from '../assets/icons/Twitter.svg'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

       <div className="footer-nav">

        <img src={logo} alt="Asteya Logo" />

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#about-us">About us</a>
          <a href="#products">Products</a>
          <a href="#contact-us">Contact us</a>
          <a href="#blogs">Blogs</a>
        </div>

       </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>2024 © All rights reserved by ASTEYA INTERNATIONAL</p>
          <div className="footer-privacy">
            <a href="#privacy-policy">Privacy policy</a>
            <span>|</span>
            <a href="#terms-conditions">Terms & Conditions</a>
          </div>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook}></img>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram}></img>

            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn}></img>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter}></img>

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
