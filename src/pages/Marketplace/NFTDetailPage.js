import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NFTDetailPage.css';

function NFTDetailPage() {
  return (
    <div>
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
        <div id="categoryItemHistory">Item History</div>
        <div id="categoryOffers">Offers</div>
        <div id="categoryDetails">Details</div>
        <table id="itemsHistory">
          <tr>
            <th>Event</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
          <tr>
            <th>Sale</th>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <th>List</th>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <th>Minted</th>
            <td>00XLT</td>
            <td>0x394dkdkldks</td>
            <td>0x394dkdkldks</td>
            <td>2022.09.20</td>
          </tr>
          <tr>
            <th>Date</th>
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

export default NFTDetailPage;
