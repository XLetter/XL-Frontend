import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/home.js';
import Original from './pages/Original/original.js';
import Series from './pages/Series/series.js';
import MyPage from './pages/MyPage/mypage.js';
import Marketplace from './pages/Marketplace/Marketplace';

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
      </Routes>
    </Router>
  );
}

export default App;
