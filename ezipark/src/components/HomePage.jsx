import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Cards from "../components/Cards"
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer";

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
