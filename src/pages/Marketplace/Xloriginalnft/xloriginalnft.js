import React from 'react';
import './xloriginalnft.css';
import Row from '../../../Row/Row';
import requests from '../../../requests/requests';

function xloriginalnft(){
    return(
      <div className="xloriginalnft">

        <Row 
        title="XL Original NFT"
        fetchUrl={requests.fetchNetflixOriginals} 
    />
    </div>
  );
}

export default xloriginalnft;