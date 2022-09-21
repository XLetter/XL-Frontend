import React, { Component } from "react";
import caver from './kaikas/caver';

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

    componentDidMount() {
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
        const balance = await caver.klay.selectedAddress
        this.setState({
            account,
            balance: caver.utils.fromPeb(balance, 'KLAY'),
        })
    }

    setNetworkInfo = () => {
        const { klaytn } = window
        if(klaytn === undefined) return

        this.setState({ network: klaytn.networkVersion })
        klaytn.on('networkChanged', () => this.setNetworkInfo(klaytn.networkVersion))
    }

    // div 이름 수정하기
    render() {
        const { account, balance, network } = this.state
        
        return (
            <div className="KaikasPage">
                <div className="KaikasPage_main">
                    <WalletInfo address={account} balance={balance} />
                </div>
            </div>
        )
    }
}

export default WalletConnect