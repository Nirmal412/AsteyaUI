import React from "react";
import "./AboutUs.css";
import pcIcon from '../assets/icons/pc.svg'

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Image Section */}
        <div className="about-us-image">
          <img src={pcIcon} alt="Online Shopping" />
          <div className="image-background" />
        </div>

        {/* Right Content Section */}
        <div className="about-us-content">
          <p className="about-us-tag">About us</p>
          <h1 className="about-us-title">
            Discover ASTEYA: Trusted Platform for Quality Products and Seamless
            Global Shopping
          </h1>
          <p className="about-us-description">
            At ASTEYA, we are passionate about providing a seamless and
            personalized shopping experience for customers worldwide. Our
            platform offers a wide range of high-quality products, from the
            latest trends to timeless essentials, all available at your
            fingertips.
          </p>
          <p className="about-us-description">
            We focus on delivering tailored solutions, offering custom quotes
            and handpicked recommendations to suit your needs. With reliable,
            fast, and secure shipping across the globe, we ensure that your
            orders reach you quickly, wherever you are.
          </p>
          <p className="about-us-description">
            Our commitment to customer satisfaction drives everything we do,
            making your shopping experience smooth and hassle-free.
          </p>
          <button className="discover-more-btn">Discover more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
