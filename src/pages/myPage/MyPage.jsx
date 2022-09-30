import React, { useState, Component } from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom'; 
import Home from '../home/Home';
import Original from '../original/Original';
import Series from '../series/Series';
import Marketplace from '../marketplace/Marketplace';
import WalletConnect from './WalletConnect';

import './MyPage.css'

import MyNFTs from './components/MyNFTs';
import BuyXLT from './components/BuyXLT';
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

        <div className='views'>
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
  
      </div>
    );
  }
}

export default MyPage;
