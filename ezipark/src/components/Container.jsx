import React from "react";
import container from "../styles/container.css";
import AOS from "aos";
import car from "../assets/images/parking.png";
import "aos/dist/aos.css";

function Container() {
  AOS.init({
    duration: 1000,
  });
  return (
    <main id="sect1">
      <div className="lefty">
        <div className="title">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            We make parking a lot easier with Parkeasy!
          </h1>
        </div>
        <div className="txt-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          consectetur quidem tenetur animi libero nemo, ea expedita sequi quasi
          aut!
        </div>
        <button data-aos="zoom-in-down" className="button-64" role="button">
          <span className="text">Get Started !</span>
        </button>
      </div>
      <div className="righty">
        <div data-aos="zoom-in-down" className="img-are">
          <img src={car} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Container;
