import './style/App.scss';
import Slider from './pages/Slider/Slider';
import Table from './pages/Table/Table';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import words from './data/words.json'
import Cards from './pages/Cards/Cards'

function App() {
  return (
  <>
    <Header/>
    <div className="main">
    <Home/>
    <Cards arr={words}/>
    <Slider arr={words}/>
    <Table arr={words}/>
    </div>
    <Footer/>
  </>
  );
}

export default App;
