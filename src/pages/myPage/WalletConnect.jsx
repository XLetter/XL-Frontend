import React, { Component } from "react";
import caver from './kaikas/Caver';
import './WalletConnect.css';

import WalletInfo from './kaikas/WalletInfo';

class WalletConnect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '',
            balance: 0,
            network: null,
        }
    }

    handleConnectBtnClick = () => {
        this.loadAccountInfo()
        this.setNetworkInfo()
      }

    loadAccountInfo = async () => {
        const { klaytn } = window

        if(klaytn) {
            try {
                await klaytn.enable()
                this.setAccountInfo(klaytn)
                klaytn.on('accountsChanged', () => this.setAccountInfo(klaytn))
            } catch(error) {
                console.log('User denied account access')
            }
        } else {
            console.log('Non-Kaikas browser detected')
        }
    }

    setAccountInfo = async () => {
        const { klaytn } = window
        if(klaytn === undefined) return

        const account = klaytn.selectedAddress
        const balance = await caver.klay.getBalance(account)
        this.setState({
            account,
            balance: caver.utils.fromPeb(balance, 'KLAY'),
        })
    }

    setNetworkInfo = () => {
        const { klaytn } = window
        var networkInfo = ''
        if(klaytn === undefined) return

        if(klaytn.networkVersion == '8217') {
            networkInfo = 'Cypress'
        } else if(klaytn.networkVersion == '1001') {
            networkInfo = 'Baobab'
        } else {
            networkInfo = 'others'
        }

        this.setState({ network: networkInfo })
        klaytn.on('networkChanged', () => this.setNetworkInfo(klaytn.networkVersion))
    }

    render() {
        const { account, balance, network } = this.state
        
        return (
            <div className="KaikasPage">
                <h2 id="network_info">network: {network}</h2>
                <br />
                <div className="KaikasPage_main">
                    <WalletInfo address={account} balance={balance} />
                </div>
                <br />
                <button id="walletConnectBtn" onClick={this.handleConnectBtnClick}>
                    Connect your Kaikas Wallet!
                </button>
            </div>
        )
    }
}

export default WalletConnect