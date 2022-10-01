import React from 'react';
import './Home.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/Banner'


function Home(){
  
  return(
    

    <div className="home">
      <div className="row_hm_out">
      <Banner />
      
      <div className='row_hm'>
        <div className="row_hm_in">
      <Row
        title="XL Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        
     /></div></div>
     <div className='row_hm'><div className='row_hm_in'>
     <Row title="XL Series" fetchUrl={requests.fetchTrending} isLargeRow={true} /></div></div>
     <div className='row_hm'><div className='row_hm_in'>
      <Row title="Now Voting" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></div></div>
      <div className='row_hm'><div className='row_hm_in'><Row title="Trending" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/></div></div>
      
    </div>
    </div>
  );
}

export default Home;
