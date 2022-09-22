import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NFTDetailPage.css';

function NFTDetailPage() {
  return (
    <div>
      <div id="container" className="box">
        <div id="frame"></div>
        <img id="nftImage"></img>
        <p id="nameWork">Novel Title</p>
        <h2 id="nftName">NFT Title #1288430</h2>
        <img id="novelThumbnail"></img>
        <div id="readWork">Read Now</div>
        <div id="nftPriceContainer"></div>
        <p id="nftPrice">00XLT</p>
        <button id="buyNft">Buy Now</button>
        <button id="makeOffer">Make Offer</button>
      </div>
    </div>
  );
}

export default NFTDetailPage;
