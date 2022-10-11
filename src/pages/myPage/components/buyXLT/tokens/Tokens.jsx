import React from 'react';
import "./Tokens.css";

const Tokens = () => {
    return (
        <div className='Tokens'>
            <div className='token_info2'>
                Current Balance
            </div>

            <div className='xlt'>
                My XLT: <span id='xlt_amount'>8613</span>
            </div>
            
            <div className='klay'>
                My KLAY: <span id='klay_amount'>150</span>
            </div>
        </div>
    );
};

export default Tokens;