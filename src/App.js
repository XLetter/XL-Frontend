import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home/home';
import Original from './pages/Original/original';
import Series from './pages/Series/series';
import MyPage from './pages/MyPage/mypage';
import Marketplace from './pages/Marketplace/Marketplace';

import Xloriginalnft from './pages/Marketplace/Xloriginalnft/xloriginalnft';
import NowTrend from './pages/Marketplace/NowTrend/nowtrend';
import Collection from './pages/Marketplace/Collection/collection';
import XloriginalBl from './pages/Original/XloriginalBl/xloriginalbl';
import XloriginalGl from './pages/Original/XloriginalGl/xloriginalgl';
import XloriginalHl from './pages/Original/XloriginalHl/xloriginalhl';
import XlseriesBl from './pages/Series/XlseriesBl/xlseriesbl';
import XlseriesGl from './pages/Series/XlserieslGl/xlseriesgl';
import XlseriesHl from './pages/Series/XlseriesHl/xlserieshl';

import SampleChapterOriginalOne from './pages/Original/sections/SampleChapterOriginalOne';
import SampleChapterOriginalTwo from './pages/Original/sections/SampleChapterOriginalTwo';
import SampleChapterOriginalThree from './pages/Original/sections/SampleChapterOriginalThree';
import NFTDetailPage from './pages/Marketplace/NFTDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mypage/*" element={<MyPage />} />
        
        <Route path="/xloriginalnft" element={<Xloriginalnft />}/>
        <Route path="/nowtrend" element={<NowTrend />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/xloriginalbl" element={<XloriginalBl />}/>
        <Route path="/xloriginalgl" element={<XloriginalGl />}/>
        <Route path="/xloriginalhl" element={<XloriginalHl />}/>
        <Route path="/xlseriesbl" element={<XlseriesBl/>}/>
        <Route path="/xlseriesgl" element={<XlseriesGl />}/>
        <Route path="/xlserieshl" element={<XlseriesHl />}/>

        <Route path="/SampleChapterOriginalOne" element={<SampleChapterOriginalOne />} />
        <Route path="/SampleChapterOriginalTwo" element={<SampleChapterOriginalTwo />} />
        <Route path="/SampleChapterOriginalThree" element={<SampleChapterOriginalThree />} />

        <Route path="/NFTDetailPage" element={<NFTDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
