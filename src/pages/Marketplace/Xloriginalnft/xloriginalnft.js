import React from 'react';
import './xloriginalnft.css';
import requests from '../../../requests/requests';
import Row_add from '../../../Row_add/Row_add';



function Xloriginalnft(){
    return(
      <div className="xloriginalnft">

        <Row_add
        title="XL Original NFT"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={false} 
        
        
        />
    </div>
  );
}

export default Xloriginalnft;