import React, { Component } from 'react';

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

import "./Select.css";
import { swapToXLT } from '../../../../../klaytn/buyXLT';


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
                        // TODO: 창이 열리진 않음
                        const targetXlt = String(e.target.token.value * 4.8850229);
                        swapToXLT(targetXlt);
                    }}
                >
                    <RadioGroup>
                        <Radio name="token" value="10" defaultChecked>
                            10 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="50">
                            50 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="100">
                            100 XLT
                        </Radio>
                        <br />
                        <br />
                        <Radio name="token" value="500">
                            500 XLT
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
