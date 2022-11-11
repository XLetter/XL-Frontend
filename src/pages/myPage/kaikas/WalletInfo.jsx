import React from 'react';
import './WalletInfo.css';

const WalletInfo = ({ address, balance }) => {
  return (
    <div className="WalletInfo">
      <h2 className="WalletInfo_title">
        Anonymous_xl0978
      </h2>

      <div className="WalletInfo_infoBox">
        <div className="WalletInfo_info">
          {address}
        </div>
      </div>
      
    </div>
  );
};

export default WalletInfo;
