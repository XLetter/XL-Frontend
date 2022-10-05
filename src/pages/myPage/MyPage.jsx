import React, { useState, Component } from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import Original from '../original/Original';
import Series from '../series/Series';
import Marketplace from '../marketplace/Marketplace';
import WalletConnect from './WalletConnect';

import './MyPage.css';

import MyNFTs from './components/MyNFTs';
import BuyXLT from './components/buyXLT/BuyXLT';
import PurchaseHistory from './components/history/PurchaseHistory';
import ProfileSetting from './components/profileSetting/ProfileSetting';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMyNFTs: true,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    };
  }

  handleNFTsBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: true,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    });
  };

  handleXLTBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: true,
      viewPurchaseHistory: false,
      viewProfileSetting: false,
    });
  };

  handleHistoryBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: false,
      viewPurchaseHistory: true,
      viewProfileSetting: false,
    });
  };

  handleProfileBtnClick = () => {
    this.setState({
      default: false,
      viewMyNFTs: false,
      viewBuyXLT: false,
      viewPurchaseHistory: false,
      viewProfileSetting: true,
    });
  };

  render() {
    const { viewMyNFTs, viewBuyXLT, viewPurchaseHistory, viewProfileSetting } = this.state;

    return (
      <div className='cover'>
        <div className='MyPage'>

          <WalletConnect />

          <div className='componentChangeBtnWrapper'>
            <div className='buttons'>
              <button 
                id='myNFTs' 
                name='myNFTsBtn' 
                onClick={this.handleNFTsBtnClick} 
                style={{ color: viewMyNFTs ? '#ED497B' : 'black' }}
                >
                My NFTs
              </button>

              <button 
                id='buyXLT' 
                name='buyXLTBtn' 
                onClick={this.handleXLTBtnClick}
                style={{ color: viewBuyXLT ? '#ED497B' : 'black' }}
                >
                buy XLT
              </button>

              <button 
                id='history' 
                name='historyBtn' 
                onClick={this.handleHistoryBtnClick}
                style={{ color: viewPurchaseHistory ? '#ED497B' : 'black' }}
                >
                Purchase History
              </button>

              <button 
                id='profile' 
                name='profileBtn' 
                onClick={this.handleProfileBtnClick}
                style={{ color: viewProfileSetting ? '#ED497B' : 'black' }}
                >
                Setting
              </button>
            </div>
          </div>

          <div className='views'>
            <div className='myNFTsView' style={{ display: viewMyNFTs ? 'block' : 'none' }}>
              <MyNFTs />
            </div>
            <div className='buyXLTView' style={{ display: viewBuyXLT ? 'block' : 'none' }}>
              <BuyXLT />
            </div>
            <div className='purchaseHistoryView' style={{ display: viewPurchaseHistory ? 'block' : 'none' }}>
              <PurchaseHistory />
            </div>
            <div className='profileSettingView' style={{ display: viewProfileSetting ? 'block' : 'none' }}>
              <ProfileSetting />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MyPage;
