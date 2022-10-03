import React, { Component } from 'react';

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

import "./Select.css";

const Select = () => {
    return (
        <div className='Select'>
            <h1>Select Amount</h1>
            <h3 id='info'>How much XLT you want to buy?</h3>
            <br />
            <div className='SelectRadioBtnWrapper'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(`${e.target.token.value} XLT :)`);
                    }}
                >
                    <RadioGroup>
                        <Radio name="token" value="100" defaultChecked>
                            100 XLT    100 KLAY
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="500">
                            500 XLT    500 KLAY
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="1000">
                            1000 XLT    1000 KLAY
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="10000">
                            10000 XLT    10000 KLAY
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