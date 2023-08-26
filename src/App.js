import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import words from './data/words.json'
import {Slider, Home, Table, Error} from './pages'
import './style/App.scss';
import './style/normalize.scss';




function App() {
  return (
  
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/table" element={<Table arr={words}/>} />
        <Route path="/" element={<Home  arr={words} />} />
        <Route path="/slider" element={<Slider arr={words}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  </Router>

    
  
  );
}

export default App;
