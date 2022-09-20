import React from 'react';
import './home.css';
import Row from '../../Row/Row';
import requests from '../../requests/requests';
import Banner from './Banner/banner'

function Home(){
  return(
    <div className="home">
      <Banner />
      <Row
        title="New X-Letter"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
      <Row title="XL Originals" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
      <Row title="XL Series 인기작품" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
      <Row title="XL Series-BL" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
      <Row title="XL Series-GL" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
      <Row title="XL Series-HL" fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>

    </div>
  );
}

export default Home;