import React from 'react';
import './home.css';
import Row from '../../Row/Row';
import requests from '../../requests/requests';

function Home(){
  return(
    <div className="home">
      <Row
        title="New X-Letter"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="XL Originals" fetchUrl={requests.fetchActionMovies} />
      <Row title="XL Series 인기작품" fetchUrl={requests.fetchComedyMovies} />
      <Row title="XL Series-BL" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="XL Series-GL" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="XL Series-HL" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default Home;