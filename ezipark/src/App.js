import react from "react";
import OwlCarousel from "react-owl-carousel2";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Login from './components/Login' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <Router>

      <div className="App">
        <Switch>

        <Route exact path="/" component={Login} />
        <Route path="/Homepage" component={HomePage} />
        
        </Switch>

      </div>
      </Router>

    
  );
}

export default App;
