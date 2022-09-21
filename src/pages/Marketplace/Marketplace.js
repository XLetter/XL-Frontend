import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL, API_KEY } from '../../components/Navbar/Config';
import NFTDetailPage from './NFTDetailPage';

function Marketplace() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <h1>Marketplace</h1>
      <NavLink to="/NFTDetailPage">NFT detail page</NavLink>
    </div>
  );
}

export default Marketplace;
