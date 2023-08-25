import './style/App.scss';
import Slider from './pages/Slider/Slider';
import Table from './pages/Table/Table';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import words from './data/words.json'
import Cards from './pages/Cards/Cards'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  
    <Router>
    <div>
      <Header/>

      <Routes>
        <Route path="/table" element={<Table arr={words}/>} />
        <Route path="/" element={<Home  arr={words} />} />
        <Route path="/slider" element={<Slider arr={words}/>} />
      </Routes>
      <Footer/>
    </div>
  </Router>

    
  
  );
}

export default App;
