import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Navbar from '../../components/navBar';
import Main from "./Main";
import Home from '../home/Home';
import Original from '../original/Original';
import Series from '../series/Series';
import Marketplace from '../marketplace/Marketplace';
import WalletConnect from './WalletConnect';

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
      <Route path="wallet" element={<WalletConnect />} />
      </Routes>
    </div>
  );
}

export default MyPage;