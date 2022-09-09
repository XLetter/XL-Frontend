import React from 'react';
import './series.css';
import Row from '../../Row/Row';
import requests from '../../requests/requests';

function Series(){
  return(
    <div className="series">
      <Row
        title="New XL Series"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="XL Series-Korea" fetchUrl={requests.fetchActionMovies} />
      <Row title="XL Series Recommend" fetchUrl={requests.fetchComedyMovies} />
      <Row title="XL Seriess-BL" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="XL Series-GL" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="XL Series-HL" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default Series;