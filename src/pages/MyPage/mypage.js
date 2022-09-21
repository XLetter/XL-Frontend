import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Navbar from '../../components/Navbar';
import Main from "./Main";
import Wallet from './Wallet';
import Home from '../Home/home';
import Original from '../Original/original';
import Series from '../Series/series';
import Marketplace from '../Marketplace/Marketplace';

// KakaoOauth 코드 없앰

function MyPage() {

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mypage/*" element={<MyPage />} />

        <Route path="main" element={<Main />} />
      <Route path="wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default MyPage;