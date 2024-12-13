import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/icons/mainLogo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 728);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 728);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo" />
          </div>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About us</a>
          <a href="/blogs">Blogs</a>
          {!isWideScreen && <button className="contact-button">Contact us</button>}
        </div>

        {isWideScreen && <button className="contact-button">Contact us</button>}

        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <div className="sidebar-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About us</a>
          <a href="/blogs">Blogs</a>
          <button className="contact-button">Contact us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
