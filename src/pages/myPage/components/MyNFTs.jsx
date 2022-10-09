import React from 'react';
import Row from '../../../row/Row';
import requests from '../../../requests/Requests';

import './MyNFTs.css';

const MyNFTs = () => {
  return (
    <div className="MyNFTs">
      <div className='myNFTs_header' style={{width: 1030}}>
        myNFTs
      </div>

      <div className='rows'>
        <Row title="My NFTs" fetchUrl={requests.fetchAll} isLargeRow={true} />
      </div>

    </div>
  );
};

export default MyNFTs;
