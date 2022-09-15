import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/home.js';
import Original from './pages/Original/original.js';
import Series from './pages/Series/series.js';
import MyPage from './pages/MyPage/mypage.js';
import Marketplace from './pages/Marketplace/Marketplace';
import Xloriginalnft from './pages/Marketplace/Xloriginalnft/xloriginalnft.js';
import NowTrend from './pages/Marketplace/NowTrend/nowtrend';
import Collection from './pages/Marketplace/Collection/collection';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/xloriginalnft" element={<Xloriginalnft />}/>
        <Route path="/nowtrend" element={<NowTrend />}/>
        <Route path="/collection" element={<Collection />}/>


      </Routes>
    </Router>
  );
}

export default App;
