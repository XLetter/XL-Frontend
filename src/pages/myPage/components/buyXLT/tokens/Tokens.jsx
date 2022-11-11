import React from 'react';
import { useState, useEffect } from 'react';
import "./Tokens.css";
import { getKlayBalance, getXLTBalance } from '../../../../../klaytn/buyXLT';

const Tokens = () => {
    const [klayAmount, setKlayAmount] = useState([]);
    const [XltAmount, setXltAmount] = useState([]);

    useEffect(()=>{
        async function klayAmount() {
            let klayAmount = await getKlayBalance();
            setKlayAmount(klayAmount);
            return klayAmount;
        }
        klayAmount();
    }, []);

    useEffect(()=>{
        async function XLTAmount() {
            let XltAmount = await getXLTBalance();
            setXltAmount(XltAmount);
            return XltAmount;
        }
        XLTAmount();
    }, []);

    return (
        <div className='Tokens'>
            <div className='token_info2'>
                Current Balance
            </div>

            <div className='xlt'>
                My XLT: <span id='xlt_amount'>{XltAmount != 0 ? XltAmount : 0}</span>
            </div>
            
            <div className='klay'>
                My KLAY: <span id='klay_amount'>{klayAmount != 0 ? klayAmount : 0}</span>
            </div>
        </div>
    );
};

export default Tokens;