import React, { useState, useEffect } from 'react';
import axios from '../axios/Axios';
import './Grid.css';
import { useNavigate } from 'react-router-dom';

const base_url = 'http://43.200.24.50:8080/apis/webnovel/';

function Grid({ title, fetchUrl, isLargeRow }) {
  const [webnovels, setWebnovels] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      let webnovels = [];
      console.log(fetchUrl);
      for (let url in fetchUrl) {
        const response = await axios.get(fetchUrl[url]);
        webnovels.push(...response.data);
      }
      // const response = await axios.get(fetchUrl);

      setWebnovels(webnovels);
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="grid">
      <h2>{title}</h2>

      <div className="grid__posters">
        {webnovels &&
          webnovels.map((webnovel, i) => (
            <div style={{ display: 'flex', flexDirection: 'column' }} key={webnovel.webnovelId}>
              <img
                className={`${isLargeRow ? ' grid__posterLarge' : 'grid__poster'}`}
                src={`${isLargeRow ? webnovel.thumbnailUrl : webnovel.thumbnailUrl}`}
                alt={webnovel.title}
                onClick={() => {
                  navigate(`/IndividualNovelPageOriginal`, {
                    state: {
                      webnovelId: webnovel.webnovelId,
                      title: webnovel.title,
                      thumbnailUrl: webnovel.thumbnailUrl,
                      writerName: webnovel.writerName,
                    },
                  });
                }}
              />

              <button id="grid_contents">{webnovel.title}</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Grid;
