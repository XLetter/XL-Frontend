import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_URL, API_KEY } from '../../components/Navbar/Config';

function Marketplace() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/NFTDetailPage');

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
      <button onClick={handleClick}>NFT detail page</button>
    </div>
  );
}

export default Marketplace;
