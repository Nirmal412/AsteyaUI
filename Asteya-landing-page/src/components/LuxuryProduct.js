import React from "react";
import LuxuryProductIcon from '../assets/icons/Shpping.svg'
import "./LuxuryProduct.css";

const LuxuryProduct = () => {
  return (
    <section className="luxury-products-section">
      <div className="overlay" />
      <div className="luxury-container">
        <div className="content-grid">
          {/* Left Content */}
          <div className="left-content">
            <p className="products-tag">Products</p>
            <h1 className="lux-heading">Luxury on mind</h1>
            <p className="description">
              Quality, Design, Trends all at one platform - Skim through our
              wide range of products to get the one that suits you!
            </p>
            <button className="explore-btn">Explore Products</button>
          </div>

          {/* Right Product Grid */}
          <div className="right-content">
            <div className="product-grid">
              <img className="products" src={LuxuryProductIcon}></img>
            </div>

            {/* Curved Border */}
            <div className="curved-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryProduct;
