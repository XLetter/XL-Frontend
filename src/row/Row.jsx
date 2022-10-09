import React, { useState, useEffect } from 'react';
import axios from '../axios/Axios';
import './Row.css';
import { useNavigate } from 'react-router-dom';
import PopupHome from './PopupHome/PopupHome';

const base_url = 'http://43.200.24.50:8080/apis/webnovel/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [webnovels, setWebnovels] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const response = await axios.get(fetchUrl);

      setWebnovels(response.data);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="row">
      <h2 id="row_title">{title}</h2>

      <div className="row__posters">
        {webnovels &&
          webnovels.map((webnovel, i) => (
            <div style={{ display: 'flex', flexDirection: 'column' }} key={webnovel.webnovelId}>
              <img
                className={`${isLargeRow ? ' row__posterLarge' : 'row__poster'}`}
                src={`${isLargeRow ? webnovel.thumbnailUrl : webnovel.thumbnailUrl}`}
                alt={webnovel.title}
                onClick={() => setButtonPopup(true)}
                // onClick={() => {
                //   navigate(`/IndividualNovelPageOriginal/${webnovel.webnovelId}`);
                // }}
              />
              <PopupHome trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* 구매하겠습니까? */}
              </PopupHome>
              <button id="row_contents">{webnovel.title}</button>
              <PopupMain trigger={buttonPopup} setTrigger={setButtonPopup}></PopupMain>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;
