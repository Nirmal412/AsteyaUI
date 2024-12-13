import React from 'react';
import './HeroSection.css';
import plateLogo from '../assets/icons/plate.svg'
import vector1 from '../assets/icons/Vector1.svg'
import vector2 from '../assets/icons/Vector2.svg'


const HeroSection = () => (
  <div className="hero-section">
    <div className="star star-1"></div>
    <div className="star star-2"></div>

    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            OneStop for Quality Products,
            <span>Delivered Worldwide!</span>
          </h1>
          <p>
            Get customised quotes for the products and services you need, with expert solutions tailored to your requirements. We offer reliable and efficient service delivery to clients worldwide.
          </p>
          <button className="explore-button">
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="hero-image">
            {/* <img src={vector2} className='vector2' alt="Decorative plate" />
            <img src={vector1} className='vector1' alt="Decorative plate" /> */}
          <div className="image-container">
            <img src={plateLogo} alt="Decorative plate" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;

