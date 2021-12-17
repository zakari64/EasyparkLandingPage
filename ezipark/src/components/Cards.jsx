import React from "react";
import cards from "../styles/cards.css";
import wallet from "../assets/images/wallet.png";
import watch from "../assets/images/001-clock.png";
import like from "../assets/images/001-like.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Cards() {
  AOS.init({
    duration : 1000
  })

  return ( 
   
    <section className="cards">
      <div className="cards-content">

        <div className="card" data-aos='fade-down-right'>
          <div className="container">
             <div className="img-container">
              <img src={wallet} alt="wallet" />
             </div>
             <div className="txt-container">
             <h2>Save Money</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
             </div>
          </div>
        </div>

        <div className="card" data-aos='fade-down-right'>
          <div className="container">
             <div className="img-container">
              <img src={like} alt="like" />
             </div>
             <div className="txt-container">
             <h2>Stress Less</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
             </div>
          </div>
        </div>
        
       <div className="card" data-aos='fade-down-right'>
          <div className="container">
             <div className="img-container">
              <img src={watch} alt="watch" />
             </div>
             <div className="txt-container">
             <h2>Save Time</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
             </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Cards;
