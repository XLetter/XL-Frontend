import React from 'react';
import "./Tokens.css";

const Tokens = () => {
    return (
        <div className='Tokens'>
            <h4>My XLT:</h4>
            <br />
            <div className='Amount'>8613</div> XLT
            <br />
            <br />
            <h4>My KLAY:</h4>
            <br />
            <div className='Amount'>15434</div> KLAY
        </div>
    );
};

export default Tokens;