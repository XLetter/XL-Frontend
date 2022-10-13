import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Popup.css';

function Popup(props) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/SampleChapterOriginalThree');

  return props.trigger ? (
    <div className="popup">
      <div id="inner">
        <div id="title"> ;XLetter</div>
        <div className="popup-inner">
          <div id="question">Would you like to purchase Episode 3?</div>
          <div id="remaining">Retained Token: 3 Token</div>
          <div id="buttons">
            <button className="buyButton" onClick={handleClick}>
              Buy with 3 XLT
            </button>
            <button className="cancelButton" onClick={() => props.setTrigger(false)}>
              Cancel
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
