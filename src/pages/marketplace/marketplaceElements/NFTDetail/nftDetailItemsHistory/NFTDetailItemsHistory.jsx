import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NFTDetailItemsHistory.css';

function NFTDetailItemsHistory() {
  const navigate = useNavigate();
  const handleClickOffers = () => navigate('/NFTDetailOffers');
  const handleClickDetails = () => navigate('/NFTDetailDetails');

  return (
    <div className="itemsHistory">
      <div id="containerOne" className="box">
        <div id="frame"></div>
        <img id="nftImage"></img>
        <p id="nameWork">Novel Title</p>
        <h2 id="nftName">NFT Title #1288430</h2>
        <img id="novelThumbnail"></img>
        <p id="novelTitle">Novel Title Only 1 Level Up</p>
        <div id="readWork">Read Now</div>
        <div id="nftPriceContainer"></div>
        <p id="nftPrice">00XLT</p>
        <button id="buyNft">Buy Now</button>
        <button id="makeOffer">Make Offer</button>
      </div>
      <div id="containerTwo">
        <div id="details">Details</div>
        <div>
          <div id="categoryItemHistory1">Item History</div>
          <div id="categoryOffers1" onClick={handleClickOffers}>
            Offers
          </div>
          <div id="categoryDetails1" onClick={handleClickDetails}>
            Details
          </div>
        </div>
        <hr id="line" />
        <table id="itemsHistory1">
          <tr>
            <th>Event</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Sale</td>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>List</td>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>Minted</td>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default NFTDetailItemsHistory;
