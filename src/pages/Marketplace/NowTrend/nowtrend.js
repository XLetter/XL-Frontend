import React from 'react';
import './nowtrend.css';
import Row from '../../../Row/Row';
import requests from '../../../requests/requests';


function NowTrend(){
    return(
      <div className="nowtrend">

        <Row
        title="최신 트렌드"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} 
        
        />
    </div>
  );
}

export default NowTrend;