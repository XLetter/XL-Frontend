import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Original from './pages/original/Original';
import Series from './pages/series/Series';
import MyPage from './pages/myPage/MyPage';
import Marketplace from './pages/marketplace/Marketplace';

import Xloriginalnft from './pages/marketplace/marketplaceElements/XLOriginalNFT/XLOriginalNFT';
import NowTrend from './pages/marketplace/nowTrend/NowTrend';
import Collection from './pages/marketplace/collection/Collection';
import XloriginalBl from './pages/original/XLOriginalBL/XLOriginalBL';
import XloriginalGl from './pages/original/XLOriginalGL/XLOriginalGL';
import XloriginalHl from './pages/original/XLOriginalHL/XLOriginalHL';
import XlseriesBl from './pages/series/XLSeriesBL/XLSeriesBL';
import XlseriesGl from './pages/series/XLSeriesGL/XLSeriesGL';
import XlseriesHl from './pages/series/XLSeriesHL/XLSeriesHL';
import SearchPage from './pages/searchPage/SearchPage'
import IndividualNovelPageOriginal from './pages/original/IndividualNovelPageOriginal';
import SampleChapterOriginalOne from './pages/original/sections/SampleChapterOriginalOne';
import SampleChapterOriginalTwo from './pages/original/sections/SampleChapterOriginalTwo';
import SampleChapterOriginalThree from './pages/original/sections/SampleChapterOriginalThree';
import NFTDetailPage from './pages/marketplace/marketplaceElements/NFTDetail/NFTDetailPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mypage/" element={<MyPage />} />

        <Route path="/xloriginalnft" element={<Xloriginalnft />} />
        <Route path="/nowtrend" element={<NowTrend />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/xloriginalbl" element={<XloriginalBl />} />
        <Route path="/xloriginalgl" element={<XloriginalGl />} />
        <Route path="/xloriginalhl" element={<XloriginalHl />} />
        <Route path="/xlseriesbl" element={<XlseriesBl />} />
        <Route path="/xlseriesgl" element={<XlseriesGl />} />
        <Route path="/xlserieshl" element={<XlseriesHl />} />
        <Route path="/SeaarchPage" element={<SearchPage/>}/>
        <Route path="/IndividualNovelPageOriginal" element={<IndividualNovelPageOriginal />} />
        <Route path="/SampleChapterOriginalOne" element={<SampleChapterOriginalOne />} />
        <Route path="/SampleChapterOriginalTwo" element={<SampleChapterOriginalTwo />} />
        <Route path="/SampleChapterOriginalThree" element={<SampleChapterOriginalThree />} />
        <Route path="/NFTDetailPage" element={<NFTDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
