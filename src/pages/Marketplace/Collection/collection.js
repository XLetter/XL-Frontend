import React from 'react';
import './collection.css';
import Row_add from '../../../Row_add/Row_add';
import requests from '../../../requests/requests';


function Collection(){
    return(
      <div className="collection">

        <Row_add
        title="XL 시리즈 NFT"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} 
        
        
        />
    </div>
  );
}

export default Collection;