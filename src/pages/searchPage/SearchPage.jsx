import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/Axios';
import '../../row/Row.css';
import './SearchPage.css';

function SearchPage(fetchUrl, isLargeRow) {
  const [webnovels, setWebnovels] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(isLargeRow);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      console.log(location.state.keyword);
      const response = await axios.get(`apis/webnovel/search?keyword=${location.state.keyword}`);
      console.log('response', response);
      //home.js의 fetchUrl
      // ex) https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      setWebnovels(response.data);
    }
    fetchData();
  }, []);
  console.log(webnovels);

  return (
    <div className="search_out">
      <div className="search">
        {webnovels.length > 0 ? (
          webnovels.map((webnovel, i) => {
            return (
              <div style={{ display: 'flex', flexDirection: ' column' }} key={webnovel.webnovelId}>
                <img
                  // className={`${isLargeRow ? 'grid__posterLarge' : 'grid__poster'}`}
                  className="row__poster"
                  src={`${webnovel.thumbnailUrl}`}
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
                <button id="row_contents" >{webnovel.title}</button>
              </div>
            );
          })
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button id="row_contents">없는 제목입니다!</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
