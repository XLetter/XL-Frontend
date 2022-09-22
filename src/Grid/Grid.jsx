import React, { useState, useEffect } from 'react';
import axios from '../Axios/axios';
import './Grid.css';


const base_url = 'https://image.tmdb.org/t/p/original/';

function Grid({ title, fetchUrl, isLargeRow }) {
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
    <div className="grid">
      <h2>{title}</h2>

    <div className="grid__posters">
        {movies.map((movie) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              key={movie.id}
              className={`${isLargeRow ? ' grid__posterLarge' : 'grid__poster'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;