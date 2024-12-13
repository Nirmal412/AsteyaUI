// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="sidebar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About us</a>
        <a href="/blogs">Blogs</a>
      </div>
    </div>
  );
};

export default Sidebar;
