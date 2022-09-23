import React, { useState, Component } from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom'; 
import Navbar from '../../components/navBar';
import Main from "./Main";
import Home from '../home/Home';
import Original from '../original/Original';
import Series from '../series/Series';
import Marketplace from '../marketplace/Marketplace';
import WalletConnect from './WalletConnect';
import { Nav, NavMenu } from '../../components/navBar/NavbarElements';

import MyNFTs from './components/MyNFTs';
import BuyXLT from './components/BuyXLT';
import PurchaseHistory from './components/PurchaseHistory';
import ProfileSetting from './components/ProfileSetting';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMyNFTs: true,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    }
  }

  handleNFTsBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: true,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    })
  }

  handleXLTBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: true,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    })
  }

  handleHistoryBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: false,
      viewPurchaseHistory: true,
      viewProfileSetting: false,
    })
  }

  handleProfileBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: true,
    })
  }

  render() {
    const {viewMyNFTs, viewBuyXLT, viewPurchaseHistory, viewProfileSetting} = this.state;

    return (
      <div className='MyPage'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/original" element={<Original />} />
          <Route path="/series" element={<Series />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/mypage/wallet" element={<MyPage />} />
        </Routes>
  
        <WalletConnect />
  
        <br />
        <br />
  
        <div className='componentChangeBtnWrapper'>
          <button 
            name='myNFTsBtn' onClick={this.handleNFTsBtnClick}>
              My NFTs
          </button>
          <button name='buyXLTBtn' onClick={this.handleXLTBtnClick}>
            buy XLT
          </button>
          <button name='historyBtn' onClick={this.handleHistoryBtnClick}>
            Purchase History
          </button>
          <button name='profileBtn' onClick={this.handleProfileBtnClick}>
            Setting
          </button>
        </div>
  
        <br />
        <br />
  
        <div className='myNFTsView' style={{display: viewMyNFTs ? 'block' : 'none'}}>
          <MyNFTs />
        </div>
        <div className='buyXLTView' style={{display: viewBuyXLT ? 'block' : 'none'}}>
          <BuyXLT />
        </div>
        <div className='purchaseHistoryView' style={{display: viewPurchaseHistory ? 'block' : 'none'}}>
          <PurchaseHistory />
        </div>
        <div className='profileSettingView' style={{display: viewProfileSetting ? 'block' : 'none'}}>
          <ProfileSetting />
        </div>
  
      </div>
    );
  }
}

/*
function MyPage() {

  const [content, setContent] = useState();
  
  const handleClickBtn = e => {
    const { menu } = e.target;
    setContent(menu);
  };

  const selectComponent = {
    myNFTs: <MyNFTs />,
    buyXLT: <BuyXLT />,
    purchaseHistory: <PurchaseHistory />,
    profileSetting: <ProfileSetting />,
  };

  console.log(content);
  
  return (
    <div className='MyPage'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mypage/wallet" element={<MyPage />} />
      </Routes>

      <WalletConnect />

      <br />
      <br />

      <div className='componentChangeBtnWrapper'>
        <button name='myNFTs' onClick={handleClickBtn}>
          myNFTs
        </button>
        <button name='buyXLT' onClick={handleClickBtn}>
          buyXLT
        </button>
        <button name='purchaseHistory' onClick={handleClickBtn}> 
          purchaseHistory
        </button>
        <button name='profileSetting' onClick={handleClickBtn}> 
          profileSetting
        </button>
      </div>

      <br />
      <br />

      <div>
        {selectComponent[content]}
    </div>

    </div>
  );
}
*/

export default MyPage;

/*
onClick={() => (viewMyNFTs = true) && (viewBuyXLT = false) && (viewPurchaseHistory = false) && (viewProfileSetting = false)}
*/

/*

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

*/

/*
function MyPage() {
  
  const [viewMyNFTs, setViewMyNFTs] = useState(false);
  const [viewBuyXLT, setViewBuyXLT] = useState(false);
  const [viewPurchaseHistory, setViewPurchaseHistory] = useState(false);
  const [viewProfileSetting, setViewProfileSetting] = useState(false);

  render() {
    let comp = null;
    if(viewMyNFTs) {
      comp = <MyNFTs />
    } else if(viewBuyXLT) {
      comp = <BuyXLT />
    } else if(viewPurchaseHistory) {
      comp = <PurchaseHistory />
    } else if(viewProfileSetting) {
      comp = <ProfileSetting />
    } else {
      comp = <Default />
    }

    return (
      <div className='MyPage'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/original" element={<Original />} />
          <Route path="/series" element={<Series />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/mypage/wallet" element={<MyPage />} />
        </Routes>
  
        <WalletConnect />
  
        <br />
        <br />
  
        <div className='componentChangeBtnWrapper'>
          <button 
            name='myNFTBtn' 
            onClick={() => setViewMyNFTs(true) && setViewBuyXLT(false) && setViewPurchaseHistory(false) && setViewProfileSetting(false)}>
              My NFTs
          </button>
          <button 
            name='buyXLTBtn' 
            onClick={() => setViewMyNFTs(false) && setViewBuyXLT(true) && setViewPurchaseHistory(false) && setViewProfileSetting(false)}>
              buy XLT
          </button>
          <button 
            name='historyBtn' 
            onClick={() => setViewMyNFTs(false) && setViewBuyXLT(false) && setViewPurchaseHistory(true) && setViewProfileSetting(false)}>
              Purchase History
          </button>
          <button 
            name='profileBtn' 
            onClick={() => setViewMyNFTs(false) && setViewBuyXLT(false) && setViewPurchaseHistory(false) && setViewProfileSetting(true)}>
              Setting
          </button>
        </div>
  
        <br />
        <br />
  
        <div className='mainComponentWrapper'>
          { comp }
        </div>
  
      </div>
    );

  }
}*/