import React from 'react';
import './Home.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/Banner';

function Home() {
  return (
    <div className="home">
      <div className="row_hm_out_1">
      
        <Banner />
        <div className="row_hm_out_2">
        <div className="row_hm">
          <div className="row_hm_in">
            <Row title="XL Original" fetchUrl={requests.fetchOriginal} isLargeRow={true} />
          </div>
        
        
          <div className="row_hm_in">
            <Row title="XL Series" fetchUrl={requests.fetchSeries} isLargeRow={true} />
          </div>
       
        
          <div className="row_hm_in">
            <Row title="Now Voting" fetchUrl={requests.fetchOriginal} isLargeRow={true} />
          </div>
        
       
          <div className="row_hm_in">
            <Row title="Trending" fetchUrl={requests.fetchAll} isLargeRow={true} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
