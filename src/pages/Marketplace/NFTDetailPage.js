import React, { useEffect, useState } from 'react';

function NFTDetailPage() {
  return (
    <div>
      <div className="nftInfo">
        <img id="nftImage"></img>
        <p id="nameWork"></p>
        <h2 id="nftName"></h2>
        <button id="readWork"></button>
        <p id="nftPrice"></p>
        <button id="buyNft"></button>
        <button id="makeOffer"></button>
      </div>
    </div>
  );
}

export default NFTDetailPage;
