import react  from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Navbar  from '../src/components/Navbar'
import Container from '../src/components/Container'
import Cards from '../src/components/Cards'
import Testimonial from './components/Testimonial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Container />
      <Cards />
      <Testimonial />
      </header>
    </div>
  );
}

export default App;
