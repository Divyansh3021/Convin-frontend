// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import Cards_show from './Components/Cards_show';
import Hero from './Components/Hero';
import Buckets from './Components/Buckets';
import Rocket from './Components/Rocket';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Food from './Components/Food';
import Astronauts from './Components/Astronauts';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<><Hero/><Buckets/></>}></Route>
        <Route path='/rocket' element = {<Rocket/>}></Route>
        <Route path='/restaurant' element = {<Food/>}></Route>
        <Route path='/group' element = {<Astronauts/>}></Route>
        {/* <Route path='/food' element = {<Rocket/>} />
        <Route path='/astronaut' element = {<Rocket/>} /> */}
      </Routes>
      {/* <Hero/> */}
      {/* <Buckets/> */}
      {/* <Cards_show/> */}
    </Router>
  );
}

export default App;
