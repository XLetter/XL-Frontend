import React from 'react';
import { FavoriteButton } from '../Favorite';

const popUpFavorite = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <p className="popupText">
          <a href="/mypage/*">Log in to favorite this recipe!</a>
          <FavoriteButton />
        </p>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default popUpFavorite;
