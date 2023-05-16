
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyJumbotron from './components/MyJumbotrone';
import MyCarousel from './components/Carosello';
import Footer from './components/Footer';
import RaftingPage from './components/RaftingPage';
import CanoaPage from './components/CanoaPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanyoningPage from './components/CanyoningPage';
import ClimbingPage from './components/ClimbingPage';
import TrekkingPage from './components/TrekkingPage';
import SurvivalPage from './components/SurvivalPage';
import WeatherApp from './components/MyMeteo';
import MyActivities from './components/Carosello';

function App() {
  return (
    <Router>
      <div className="sfondo">
      <Navigation />
        <MyJumbotron />
        <Routes >
          <Route path="/" element={<>
            <MyActivities />
            <WeatherApp />
          </>} />
          <Route path="/raftingpage" element={<RaftingPage />} />
          <Route path="/canoa" element={<CanoaPage />} />
          <Route path="/canyoning" element={<CanyoningPage />} />
          <Route path="/climbing" element={<ClimbingPage />} />
          <Route path="/trekking" element={<TrekkingPage />} />
          <Route path="/survival" element={<SurvivalPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

