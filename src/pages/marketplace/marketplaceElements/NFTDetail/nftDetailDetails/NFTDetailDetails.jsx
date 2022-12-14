import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NFTDetailDetails.css';
import nftSampleC from '../../../../../assets/image/nftSampleC.png';

function NFTDetailDetails() {
  const navigate = useNavigate();
  const handleClickItemHistory = () => navigate('/NFTDetailItemsHistory');
  const handleClickOffers = () => navigate('/NFTDetailOffers');

  return (
    <div className="Details">
      <div className="containerOne">
        <div id="frame"></div>
        <img id="nftImage" src={nftSampleC}></img>
        <p id="nameWork2">Hamlet</p>
        <h2 id="nftName2">To Be or Not To Be</h2>
        <img id="novelThumbnail"></img>
        <p id="novelTitle">Novel Title Only 1 Level Up</p>
        <div id="readWork">Read Now</div>
        <div id="nftPriceContainer2"></div>
        <p id="nftPrice">22XLT</p>
        <button id="buyNft">Buy Now</button>
        <button id="makeOffer">Make Offer</button>
      </div>
      <div className="containerTwo3">
        <div id="details">Details</div>
        <div>
          <div id="categoryItemHistory3" onClick={handleClickItemHistory}>
            Item History
          </div>
          <div id="categoryOffers3" onClick={handleClickOffers}>
            Offers
          </div>
          <div id="categoryDetails3">Details</div>
        </div>
        <hr id="line" />
        <table id="itemsHistory3">
          <tr>
            <th>Contact Address</th>
            <td>33032902039</td>
          </tr>
          <tr>
            <th>Sale</th>
            <td>00XLT</td>
          </tr>
          <tr>
            <th>Token ID</th>
            <td>00</td>
          </tr>
          <tr>
            <th>Token Standard</th>
            <td>ERC-721</td>
          </tr>
          <tr>
            <th>Blockchain</th>
            <td>Klaytn</td>
          </tr>
          <tr>
            <th>Creator Earning</th>
            <td>00%</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default NFTDetailDetails;
