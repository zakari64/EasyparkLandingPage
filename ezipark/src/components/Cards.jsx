import React from "react";
import cards from "../styles/cards.css";
import money from '../assets/images/money-bag.png'
import touch from '../assets/images/touchscreen.png'
import dep from '../assets/images/depression.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  AOS.init({
    duration: 1000,
  });

  return (
    <section className="cards" id="sect2">
      <div className="title" data-aos="fade-down-right">
        <h1>What we provide you with </h1>
      </div>
      <div className="cards-content">
        <div className="card" data-aos="fade-down-right">
          <div className="container">
            <div className="img-container">
              <img src={money} alt="" />
            </div>
            <div className="txt-container">
              <h2>Save Money</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>

        <div className="card" data-aos="fade-down-right">
          <div className="container">
            <div className="img-container">
              <img src={dep} alt="" />
            </div>
            <div className="txt-container">
              <h2>Stress Less</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className="card" data-aos="fade-down-right">
          <div className="container">
            <div className="img-container">
              <img src={touch} alt="" />
            </div>
            <div className="txt-container">
              <h2>Save Time</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
