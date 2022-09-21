import React from 'react';
import './Popup.css';
import './SampleChapterOriginal.js';
import { Redirect } from 'react-router';

function Popup(props) {
  const history = useHistory();
  const navigateTo = () => history.push('/SampleChapterOriginal.js');

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="buyButton">
          3 XLT로 구매하기 <Redirect to="/SampleOriginal.js" />
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
