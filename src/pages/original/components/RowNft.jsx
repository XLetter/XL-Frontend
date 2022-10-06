import React, { useState, useEffect } from 'react';
import axios from '/Users/yenas/Documents/GitHub/XL-Frontend/src/axios/Axios';
import './RowNft.css';

const base_url = 'http://43.200.24.50:8080/apis/webnovel/';

function RowNft({ title, fetchUrl, isLargeRow }) {
  const [webnovels, setWebnovels] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const response = await axios.get(fetchUrl);
      //home.js의 fetchUrl
      // ex) https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      setWebnovels(response.data);
    }
    fetchData();
  });

  return (
    <div className="row">
      {/* <h2 id="row_title">{title}</h2> */}

      <div className="row__posters">
        {webnovels &&
          webnovels.map((webnovel) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                key={webnovel.webnovelId}
                className={`${isLargeRow ? ' row__posterLarge' : 'row__poster'}`}
                src={`${isLargeRow ? webnovel.thumbnailUrl : webnovel.thumbnailUrl}`}
                alt={webnovel.title}
              />
              <p id="row_content">{webnovel.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RowNft;
