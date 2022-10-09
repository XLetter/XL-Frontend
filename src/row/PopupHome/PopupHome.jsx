import React from 'react';
import { useNavigate } from 'react-router-dom';

import './PopupHome.css';

function PopupHome(props) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/SampleChapterOriginalThree');

  return props.trigger ? (
    <div className="popup">
      <div id="inner">
        <div id="title"> ;XLetter</div>
        <div className="popup-inner">
          <div id="question">Coming Soon!</div>
          <div id="buttons">
            <button className="cancelButton" onClick={() => props.setTrigger(false)}>
              Close
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

export default PopupHome;
