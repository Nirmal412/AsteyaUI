import React, { useEffect, useRef } from "react";
import "./ShoppingExp.css";

export default function ShoppingExp() {
  const cardsRef = useRef([]);

  const handleScroll = () => {
    const cards = cardsRef.current;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const offsetTop = rect.top - window.innerHeight / 2;

      if (offsetTop < 0) {
        card.classList.add("bunched");
        card.style.setProperty("--index", index);
      } else {
        card.classList.remove("bunched");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="shopping-container">
      <section className="header-section">
        <span className="offerings">Our Offerings</span>
        <div className="offering-div">
          <h1 className="title">Personalized shopping experience</h1>
          <p className="description">
            Experience a personalized shopping journey with tailored
            recommendations based on your preferences. Get custom quotes for a
            seamless, hassle-free shopping experience
          </p>
        </div>
      </section>

      <div className="cards-container">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`feature-card`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="number">{index + 1}</div>
            <h2 className="feature-title">Explore a huge variety of products on the go..!</h2>
            <p className="feature-description">
              Description for card {index + 1}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
