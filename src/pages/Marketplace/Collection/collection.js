import React from 'react';
import './collection.css';
import Row from '../../../Row/Row';
import requests from '../../../requests/requests';


function Collection(){
    return(
      <div className="collection">

        <Row
        title="XL 시리즈 NFT"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} 
        
        />
    </div>
  );
}

export default Collection;