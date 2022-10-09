import React, { useState } from 'react';
import './Home.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/Banner';
import PopupMain from './sections/popupMain';

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="home">
      <div className="row_hm_out">
        <Banner />

        <div className="row_hm">
          <div className="row_hm_in" onClick={() => setButtonPopup(true)}>
            <Row
              title="XL Original"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow={true}
              onClick={() => setButtonPopup(true)}
            />
          </div>
        </div>
        <div className="row_hm">
          <div className="row_hm_in" onClick={() => setButtonPopup(true)}>
            <Row title="XL Series" fetchUrl={requests.fetchTrending} isLargeRow={true} />
          </div>
        </div>
        <div className="row_hm">
          <div className="row_hm_in" onClick={() => setButtonPopup(true)}>
            <Row title="Now Voting" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
          </div>
        </div>
        <div className="row_hm">
          <div className="row_hm_in" onClick={() => setButtonPopup(true)}>
            <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
          </div>
          <PopupMain trigger={buttonPopup} setTrigger={setButtonPopup}></PopupMain>
        </div>
      </div>
    </div>
  );
}

export default Home;
