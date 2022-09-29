import React, { useState, useEffect } from 'react';
import axios from '../axios/Axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const response = await axios.get(fetchUrl);
      //home.js의 fetchUrl
      // ex) https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      setMovies(response.data.results);
    }
    fetchData();
  });
 

  return (
    <div className="row">
      <h2 id='row_title'>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              key={movie.id}
              className={`${isLargeRow ? ' row__posterLarge' : 'row__poster'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
            <p id='row_content'>{movie.name}</p>
          </div>
        ))}

        
      </div>
    </div>
  );
}

export default Row;