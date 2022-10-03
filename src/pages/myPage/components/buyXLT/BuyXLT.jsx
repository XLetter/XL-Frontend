import React, { Component } from 'react';
import './BuyXLT.css';
import Select from './select/Select';
import Tokens from './Tokens';

const BuyXLT = () => {
  return (
    <div className="BuyXLT">
      <h1>Buy XLT</h1>
      <div className="BuyXLTelments">
        <Select />
        <Tokens />
      </div>
    </div>
  );
};

export default BuyXLT;
