import React from "react";
import './Radio.css';

function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
        <label>
            <input
                type="radio"
                id="radioBtn"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            {children}
        </label>
    );
}

export default Radio;
