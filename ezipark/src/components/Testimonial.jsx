import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/testimonial.css";
import dev from '../assets/images/development.png' 
import park2 from "../assets/images/park2.png";
import park3 from "../assets/images/parking.png";
function Testimonial() {
  const options = {
    items: 1,
    nav: true, 
    dots: false,
    rewind: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
  };

  return (
    <section id ="sec" className="testimonial">
      <div className="overlay">
        <div className="max-width">
          <div className="container">
            <OwlCarousel options={options}>
              <div className="contenu">
                <img src={dev} alt="" />
                <div className="text">
                  “ A reliable and loyal team"
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="domaine">Lorem, ipsum dolor.</div>
              </div>
              <div className="contenu">
                <img src={park2} alt="" />
                <div className="text">
                  “ Our history"
                </div>
                <div className="nom">Founded in 2010 with high goals</div>
                <div className="domaine">We're trying to innovate in parking management</div>
              </div>
              <div className="contenu">
                <img src={park3} alt="" />
                <div className="text">
                  “ Barmy loo sloshed porkiesdo with me down "
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="domaine">Lorem, ipsum dolor.</div>
              </div>
              <div className="contenu">
                <img src={park3} alt="" />
                <div className="text">
                  “ Barmy loo sloshed porkiesdo with me down ”
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="domaine">Lorem, ipsum dolor.</div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
