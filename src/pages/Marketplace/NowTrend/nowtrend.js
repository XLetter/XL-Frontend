import React from 'react';
import './nowtrend.css';
import Row_add from '../../../Row_add/Row_add';
import requests from '../../../requests/requests';



function NowTrend(){
    return(
      <div className="nowtrend">

        <Row_add
        title="최신 트렌드"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={false} 
        
        />
    </div>
  );
}

export default NowTrend;