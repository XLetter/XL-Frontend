import React, { Component } from 'react';

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

import "./Select.css";

const Select = () => {
    return (
        <div className='Select'>
            <div className='select_info'>
                <div className='select_info_main'>
                    Select Amount
                </div>

                <div className='select_info_detail'>
                    How much XLT you want to buy?
                </div>
            </div>

            <div className='SelectRadioBtnWrapper'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(`${e.target.token.value} XLT :)`);
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
                    <button id='purchaseBtn'>Purchase</button>
                </form>
            </div>
            
        </div>
    );
};

export default Select;
