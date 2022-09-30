import React from 'react';
import './Home.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/Banner'


function Home(){
  
  return(
    <div className="home">
      <Banner />
      <div className='row_hm_1'>
      <Row
        title="New X-Letter"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        
     /></div>
     <div className='row_hm_2'>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} /></div>
     <div className='row_hm_3'>
      <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></div>
      <div className='row_hm_4'><Row title="XL Originals" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/></div>
      <div className='row_hm_5'><Row title="Trend-XL Series" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/></div>
      <div className='row_hm_6'><Row title="XL Series-BL" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/></div>
      <div className='row_hm_7'><Row title="XL Series-GL" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/></div>
      <div className='row_hm_8'><Row title="XL Series-HL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div>

    </div>
  );
}

export default Home;
