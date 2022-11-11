import React, { Component } from 'react';
import './BuyXLT.css';
import Select from './select/Select';
import Tokens from './tokens/Tokens';

const BuyXLT = () => {
  return (
    <div className='BuyXLT'>
      <div className='buyXLT_header' style={{width: 1030}}>
        Buy XLT
      </div>
      
      <div className='BuyXLTelments'>
        <div className='select_element'>
          <Select />
        </div>
        
        <div className='tokens_element'>
          <Tokens />
        </div> 
      </div>
      
    </div>
  );
};

export default BuyXLT;
