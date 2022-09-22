import React from 'react';
import './Series.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';

function Series(){
  return(
    <div className="series">
      <Row
        title="New XL Series"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
      <Row title="XL Series-Korea" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
      <Row title="XL Series Recommend" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
      <Row title="XL Seriess-BL" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
      <Row title="XL Series-GL" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
      <Row title="XL Series-HL" fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>

    </div>
  );
}

export default Series;
