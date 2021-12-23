import React from "react";
import container from "../styles/container.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Container() {
  AOS.init({
    duration : 1000
  })
  return (
    <main >
      <div className="slogan">
        <div className="title">
          <h1 data-aos="zoom-in-down">We make parking a lot easier with Parkeasy!</h1>
        </div>
        <div className="txt-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          consectetur quidem tenetur animi libero nemo, ea expedita sequi quasi
          aut!
        </div>
        <button className="button-64" role="button">
          <span className="text">Get Started !</span>
        </button>
      </div>
    </main>
  );
}

export default Container;
