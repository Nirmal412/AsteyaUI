import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="heading">Why choose us ?</h2>
        <h3 className="subheading">
            <p>

          Wide Product Selection, Fast Global Shipping, Unmatched Customer Satisfaction :)
            </p>
        </h3>
        <div className="cards">
          <div className="card">
            <div className="card-title">
              Endless Variety
            </div>
            <p className="card-description">
              Shop from thousands of products across multiple categories, all in one place.
            </p>
          </div>
          <div className="card">
            <div className="card-title" >
              Secure Shipping
            </div>
            <p className="card-description">
              Enjoy fast, reliable, and secure shipping worldwide tracking every step of the way.
            </p>
          </div>
          <div className="card">
            <div className="card-title">
              Tailored Quotation
            </div>
            <p className="card-description">
              Get personalised quotes based on specific products and preferences.
            </p>
          </div>
          <div className="card">
            <div className="card-title">
              Global Reach
            </div>
            <p className="card-description">
              Get Trending global products that are in trend with best shipping support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
