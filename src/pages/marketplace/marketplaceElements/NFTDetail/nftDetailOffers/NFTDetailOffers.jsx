import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NFTDetailOffers.css';
import nftSampleC from '../../../../../assets/image/nftSampleC.png';

function NFTDetailOffers() {
  const navigate = useNavigate();
  const handleClickItemHistory = () => navigate('/NFTDetailItemsHistory');
  const handleClickDetails = () => navigate('/NFTDetailDetails');

  return (
    <div className="offers">
      <div className="containerOne">
        <div id="frame"></div>
        <img id="nftImage" src={nftSampleC}></img>
        <p id="nameWork3">Hamlet</p>
        <h2 id="nftName3">To Be or Not To Be</h2>
        <img id="novelThumbnail"></img>
        <p id="novelTitle3">Novel Title Only 1 Level Up</p>
        <div id="readWork">Read Now</div>
        <div id="nftPriceContainer"></div>
        <p id="nftPrice">22XLT</p>
        <button id="buyNft">Buy Now</button>
        <button id="makeOffer">Make Offer</button>
      </div>
      <div className="containerTwo">
        <div id="details">Details</div>
        <div>
          <div id="categoryItemHistory2" onClick={handleClickItemHistory}>
            Item History
          </div>
          <div id="categoryOffers2">Offers</div>
          <div id="categoryDetails2" onClick={handleClickDetails}>
            Details
          </div>
        </div>
        <hr id="line" />
        <table id="itemsHistory2">
          <tr>
            <th>Price</th>
            <th>USD</th>
            <th>Floor Difference</th>
            <th>From</th>
            <th>Expiration Date</th>
          </tr>
          <tr>
            <td>00XLT</td>
            <td>$00</td>
            <td>00%</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>00XLT</td>
            <td>$00</td>
            <td>00%</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>00XLT</td>
            <td>$00</td>
            <td>00%</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <td>00XLT</td>
            <td>$00</td>
            <td>00%</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default NFTDetailOffers;
