import React from 'react';
import './xloriginalnft.css';
import Row from '../../../Row/Row';
import requests from '../../../requests/requests';


function Xloriginalnft(){
    return(
      <div className="xloriginalnft">

        <Row
        title="XL Original NFT"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} 
        
        />
    </div>
  );
}

export default Xloriginalnft;