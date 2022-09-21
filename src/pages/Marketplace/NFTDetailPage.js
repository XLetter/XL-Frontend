import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
      <Nav>
        <NavMenu>
          <NavLink to="/Details">Details</NavLink>
          <NavLink to="/ItemHistory">Item History</NavLink>
          <NavLink to="/Offers">Offers</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default NFTDetailPage;
