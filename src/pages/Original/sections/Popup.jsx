import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Popup.css';

function Popup(props) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/SampleChapterOriginalThree');

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="buyButton" onClick={handleClick}>
          3 XLT로 구매하기
        </button>
        <button className="cancelButton" onClick={() => props.setTrigger(false)}>
          취소하기
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
