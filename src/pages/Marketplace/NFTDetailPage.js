import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NFTDetailPage.css';

function NFTDetailPage() {
  return (
    <div className="detailPage">
      <img id="nftImage"></img>
      <p id="nameWork">nameofwork</p>
      <h2 id="nftName">nftName</h2>
      <button id="readWork">readbutton</button>
      <p id="nftPrice">nftprice</p>
      <button id="buyNft">buynow</button>
      <button id="makeOffer">makeoffer</button>
    </div>
  );
}

export default NFTDetailPage;
