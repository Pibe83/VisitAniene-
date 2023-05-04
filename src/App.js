import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyJumbotron from './components/MyJumbotrone';
import MyCarousel from './components/Carosello';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyJumbotron />
      <MyCarousel />
      <Footer />
    </div>
  );
}

export default App;
