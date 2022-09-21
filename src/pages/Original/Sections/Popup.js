import React from 'react';
import { Routes, Route, useNavigate, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';
import './Popup.css';

function Popup(props) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/SampleChapterOriginal');

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
