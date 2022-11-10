import React, { Component } from 'react';

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

import "./Select.css";

import Caver from 'caver-js';

import * as swapFunction from '../../../kaikas/contractConnect';

const caver = new Caver(window.klaytn);
const to = '0x1D34D008d88F6457C6C6f874B11197FBE8f706E3';

const Select = () => {
    return (
        <div className='Select'>
            <div className='select_info'>
                <div className='select_info_main'>
                    Select Amount
                </div>
            </div>

            <div className='SelectRadioBtnWrapper'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        //alert(` Purchase Completed: ${e.target.token.value} XLT`);

                        caver.klay
                            .sendTransaction({
                                type: 'SMART_CONTRACT_EXECUTION',
                                from: window.klaytn.selectedAddress,
                                to: to,
                                value: caver.utils.toPeb('5', 'KLAY'),
                                gas: 8000000,
                                data: '10'
                            })
                            .once('transactionHash', transactionHash => {
                                console.log('txHash', transactionHash)
                            })
                            .once('receipt', receipt => {
                                console.log('receipt', receipt)
                            })
                            .once('error', error => {
                                console.log('error', error)
                            })
                    }}
                >
                    <RadioGroup>
                        <Radio name="token" value="100" defaultChecked>
                            100 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="500">
                            500 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="1000">
                            1000 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="10000">
                            10000 XLT
                        </Radio>
                    </RadioGroup>
                    <br />
                    <button id='purchaseBtn' /*onClick={swapFunction.swapXlt}*/>Purchase</button>
                </form>
            </div>
            
        </div>
    );
};

export default Select;
