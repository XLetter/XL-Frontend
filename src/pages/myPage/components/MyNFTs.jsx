import React from 'react'
import Row from '../../../row/Row';
import requests from '../../../requests/Requests';

import './MyNFTs.css'

const MyNFTs = () => {
  return (
    <div className='MyNFTs'>
      <Row title="Reading List" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="My NFTs" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
      <Row title="Favorites" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
    </div>
  );
};

export default MyNFTs;