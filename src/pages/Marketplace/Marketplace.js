import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../components/Navbar/Config';

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
    </div>
  );
}

export default Marketplace;
