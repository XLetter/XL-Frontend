import React from "react";
import "./RadioGroup.css";

function RadioGroup({ label, children }) {
    return (
        <fieldset className="RadioGroup">
            <legend>{label}</legend>
            {children}
        </fieldset>
    );
}

export default RadioGroup;
