import react from "react";
import OwlCarousel from "react-owl-carousel2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/Homepage" element={<HomePage/>} />
      </Routes>
     
      </div>
    
    </Router>
  
  );
}

export default App;
