import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/testimonial.css";
import dev from '../assets/images/development.png' 
import entreprise from "../assets/images/enterprise.png";
import Kar from "../assets/images/avata.png";
import park3 from "../assets/images/parking-area.png"

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
                  “ Une équipe fiable et loyale"
                </div>
                <div className="nom">Notre équipe de devloppeurs</div>
                <div className="domaine">Nos membres ont travaillé dur pour rendre possible ce projet</div>
              </div>
              <div className="contenu">
                <img src={entreprise} alt="" />
                <div className="text">
                  “Notre histoire "
                </div>
                <div className="nom">Etablie en 2010 avec des grandes visions</div>
                <div className="domaine">On essaye d'adopter un nouveau système de parking !</div>
              </div>
              <div className="contenu">
                <img src={Kar} alt="" />
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
