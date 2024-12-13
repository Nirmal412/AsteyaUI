import React, { useEffect } from 'react';
import './StackingCard.css';

const StackingCards = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://codepen.io/bramus/pen/ZEqMOLz/cccfe67c2b9cdfbeb5fb59083dbd0a64.js';
    script.onload = () => {
      window.showDialog('https://scroll-driven-animations.style/demos/stacking-cards/css/');
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <input type="checkbox" id="debug" />
      <main>
        <ul id="cards">
          {['One', 'Two', 'Three', 'Four'].map((title, index) => (
            <li className="card" id={`card_${index + 1}`} key={index}>
              <div className="card__content">
                <div>
                  <h2>Card {title}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p>
                    <a href="#top" className="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src={`https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-${index + 1}.jpg`}
                    alt={`Card ${title}`}
                  />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default StackingCards;
