import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyJumbotron from './components/MyJumbotrone';
import MyCarousel from './components/Carosello';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyJumbotron />
      <MyCarousel />
    </div>
  );
}

export default App;
