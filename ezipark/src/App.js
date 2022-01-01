import react from "react";
import OwlCarousel from "react-owl-carousel2";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Testimonial from "./components/Testimonial";
import Container from "./components/Container";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={HomePage} />
          <Route path="/container" component={Container} />
          <Route path="/cards" component={Cards} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          
        </Switch>
      </div>
    </Router>
      

    
  );
}

export default App;
