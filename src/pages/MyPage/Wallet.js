import React, { Component } from 'react';
import Caver from 'caver-js';

const CYPRESS_NETWORK = 8217;
const BAOBAB_NETWORK = 1001;
const bappName = "XLetter";

let caver;



class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      balance: 0,
      requestKey: '',
      accountViewVisible: false,
      kaikas: false,
    };
  };

  componentDidMount() {
    this.prepareAuthRequest();
  }

  prepareAuthRequest = async() => {
    const res = await this.prepareAuthRequest.auth({ bappName });
    if(res.err) {
      console.log(res.err);
    } else if(res.request_key) {
      this.setState({ requestKey: res.request_key });
    }
  }

  connectKaikas = async() => {
    this.setState({ kaikas: true });

    const { klaytn } = window;

    if(klaytn) {
      try {
        await klaytn.enable();
        caver = new Caver(window.klaytn)
        this.setState({ network: this.getNetworkName(klaytn.networkVersion) });
        this.getBalance(klaytn.selectedAddress);

        klaytn.on('accountsChanged', () => this.getBalance(klaytn.selectedAddress));
        klaytn.on('networkChanged', () => {
          this.setState({ network: this.getNetworkName(klaytn.networkVersion) });
          this.getBalance(klaytn.selectedAddress);
        })
      } catch(error) {
        console.log('user denied account access');
      }
    } else {
      console.log('non-kaikas browser detected');
    }
  }

  getBalance = async address => {
    caver.rpc.klay.getBalance(address).then(b => {
      const balanceKLAY = caver.utils.convertFromPeb(b, 'KLAY');
      this.setState({ address, accountViewVisible: true, balance: balanceKLAY.slice(0, balanceKLAY.indexOf('.') + 7) });
    })
  }

  getNetworkName = networkId => {
    if(!networkId) networkId = CYPRESS_NETWORK;
    return networkId === 8217 ? 'Cypress' : networkId === 1001 ? 'Baobab' : 'Custom Network';
  }

  render() {
    const { address, balance, accountViewVisible } = this.state;

    return (
      <div>
        <div>
          <div>Klaytn Network: {this.state.network}</div>
        </div>

        <br />
      
      <div className='accountView' style={{ display: accountViewVisible ? 'block' : 'none' }}>
        <div>{address}</div>
        <br />
        <div>{balance} KLAY</div>
      </div>
      
      <div>
        <button
          type='button'
          onClick={this.connectKaikas}
          className="WalletConnectBtn Kaikas"
          >
            <div style={{ marginLeft: '10%', marginRight: '10%' }}>
              <span style={{ verticalAlign: 'middle' }}>Kaikas 지갑 연결</span>
            </div>
          </button>
      </div>

      </div>
    )
  }
}

export default Wallet;