import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Cards from "./Cards"
import Contact from "./Contact";
import Testimonial from "./Testimonial"
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Container />
      <Cards />
      <Testimonial /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
