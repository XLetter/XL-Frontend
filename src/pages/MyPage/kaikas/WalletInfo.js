import React from "react";

const WalletInfo = ({address, balance}) => {
    return (
        <div className="WalletInfo">
            <h2 className="WalletInfo_title">Wallet Information</h2>

            <div className="WalletInfo_infoBox">
                <div className="WalletInfo_info">
                    <span className="WalletInfo_label">Wallet Address</span>
                    {address || 'Login with Kaikas :)'}
                </div>

                <div className="WalletInfo_info">
                    <span className="WalletInfo_label">Balance</span>
                    <span className="WalletInfo_balance">{balance}</span>
                    <span className="WalletInfo_unit">KLAY</span>
                </div> 
            </div>
        </div>
    )
}

export default WalletInfo