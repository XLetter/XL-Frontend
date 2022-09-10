import React from 'react';
import { NavLink } from 'react-router-dom';

const Original = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <h1>XL Original</h1>
      <br />
      <NavLink to="IndividualNovelPageOriginal.js"> Individual Page</NavLink>
    </div>
  );
};

export default Original;
