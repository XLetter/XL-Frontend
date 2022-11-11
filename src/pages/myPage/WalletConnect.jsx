import React, { Component } from 'react';
import caver from './kaikas/Caver';
import './WalletConnect.css';
import profile from '../../assets/image/user_profile.jpeg';

import WalletInfo from './kaikas/WalletInfo';

import { getXLTBalance } from '../../klaytn/buyXLT';

class WalletConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      balance: 0,
      network: null,
    };
  }

  handleConnectBtnClick = () => {
    this.loadAccountInfo();
    this.setNetworkInfo();
  };

  loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        await klaytn.enable();
        this.setAccountInfo(klaytn);
        klaytn.on('accountsChanged', () => this.setAccountInfo(klaytn));
      } catch (error) {
        console.log('User denied account access');
      }
    } else {
      console.log('Non-Kaikas browser detected');
    }
  };

  setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    const account = await klaytn.selectedAddress;
    const balance = await getXLTBalance();
    this.setState({
      account,
      balance: balance,
    });
  };

  setNetworkInfo = () => {
    const { klaytn } = window;
    var networkInfo = '';
    if (klaytn === undefined) return;

    if (klaytn.networkVersion == '8217') {
      networkInfo = 'Cypress';
    } else if (klaytn.networkVersion == '1001') {
      networkInfo = 'Baobab';
    } else {
      networkInfo = 'others';
    }

    this.setState({ network: networkInfo });
    klaytn.on('networkChanged', () => this.setNetworkInfo(klaytn.networkVersion));
  };

  render() {
    const { account, balance, network } = this.state;

    return (
      <div className="KaikasPage">

        <div className='unconnected' style={{display: account ? 'none' : ''}}>
          <div className='welcome'>
            Welcome! <br /> Be our member for more contents!
          </div>

          <button id="walletConnectBtn" onClick={this.handleConnectBtnClick}>
            Connect your Kaikas Wallet!
          </button>
        </div>

        <div className='connected' style={{display: account ? '' : 'none'}}>

          <div className='profile_content'>

            <div className='picture_area'>
              <div className='profile_picture'>
                <img className='profile' src={profile} />
              </div>
            </div>

            <div className='profile_info'>
              <div className="KaikasPage_main">
                <WalletInfo address={account} balance={balance} />
              </div>
            </div>

            <div className='token_info'>
              <div className='info'>
                My Token:
              </div>

              <div className='amount'>
                {balance}
              </div>

              <div className='unit'>
                XLT {/* 실제로는 klay임 */}
              </div> 

              <button id="justBtn">
                More...
              </button>
            </div>

          </div>
        </div>  
      </div>
    );
  }
}

export default WalletConnect;
